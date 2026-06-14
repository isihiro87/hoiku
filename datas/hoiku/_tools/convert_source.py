#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""保育士4択ソース(four_choices.md) → ichimondittou.md 変換（汎用）。

対応する2形式を自動判定:
  形式A(食と栄養): **問N**　問題 / 1　… 2　… 3　… 4　… / **答え：N**　解説
  形式B(子どもの保健): **QN.** 問題 / ① … ② … ③ … ④ … / 【答】②  (解説は任意)

出力: ## NN セクション名 + Q:/A:/B:/C:/D:/答え:/解説: 形式。
- 章ごとに 3〜4 問へ自動分割（5は1本、まれな1〜2はそのまま）。
- 問題文は語尾を簡潔化（「〜か。」→「〜?」等）。

使い方: python convert_source.py <source.md> <out_ichimondittou.md>
"""
import re, sys

Z2H_DIGIT = str.maketrans("０１２３４５６７８９　", "0123456789 ")
CIRCLE = {"①": 1, "②": 2, "③": 3, "④": 4}


def shorten(q):
    q = q.strip()
    for pre in ("次のうち、", "次のうち ", "次の文のうち、"):
        if q.startswith(pre):
            q = q[len(pre):]
    for a, b in [("はどれか。", "は?"), ("のはどれか。", "のは?"),
                 ("はどれか", "は?"), ("のはどれか", "のは?"),
                 ("でしょうか。", "?"), ("か。", "?"), ("か？", "?"), ("か?", "?")]:
        if q.endswith(a):
            q = q[:-len(a)] + b
            break
    q = q.rstrip("。 ")
    return q.replace("？", "?").strip()


def parse_choices_A(line):
    s = line.translate(Z2H_DIGIT).strip()
    m = re.match(r'1\s+(.+?)\s+2\s+(.+?)\s+3\s+(.+?)\s+4\s+(.+)$', s)
    return [g.strip() for g in m.groups()] if m else None


def parse_choices_B(line):
    s = line.strip()
    m = re.match(r'①\s*(.+?)\s*②\s*(.+?)\s*③\s*(.+?)\s*④\s*(.+)$', s)
    return [g.strip() for g in m.groups()] if m else None


def get_choices(lines, start):
    """選択肢を取得。単一行(4択1行) と 複数行(1行1択) の両対応。
    戻り値: (choices or None, 次に読むべき行index)"""
    j = start
    while j < len(lines) and not lines[j].strip():
        j += 1
    if j >= len(lines):
        return None, start
    single = parse_choices_A(lines[j]) or parse_choices_B(lines[j])
    if single:
        return single, j + 1
    # 複数行: 各行が 1択（"N　…" または "① …"）
    choices, k = [], j
    while k < len(lines) and len(choices) < 4:
        s = lines[k].strip()
        if not s:
            k += 1
            continue
        mn = re.match(r'^([1-4１-４])[　 ]\s*(.+)$', s)
        mc = re.match(r'^([①-④])\s*(.+)$', s)
        if mn:
            choices.append(mn.group(2).strip()); k += 1
        elif mc:
            choices.append(mc.group(2).strip()); k += 1
        else:
            break
    return (choices, k) if len(choices) == 4 else (None, start)


def split_counts(n):
    if n <= 0:
        return []
    for b in range(n // 3 + 1):          # 3/4 の厳密分割（4優先）
        if (n - 3 * b) % 4 == 0:
            return [4] * ((n - 3 * b) // 4) + [3] * b
    if n <= 5:
        return [n]
    return [4] + split_counts(n - 4)


def parse(path):
    lines = open(path, encoding="utf-8").read().split("\n")
    chapters = []          # [(chapter_name, [q,...])]
    cur_name, cur_qs = None, []
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("## "):
            if cur_name is not None:
                chapters.append((cur_name, cur_qs))
            cur_name, cur_qs = line[3:].strip(), []
            i += 1
            continue
        mq = re.match(r'\*\*(?:問|Q)\s*\d+[\.\．]?\*\*\s*(.*)', line)
        if mq and cur_name is not None:
            qtext = mq.group(1).strip()
            choices, after = get_choices(lines, i + 1)
            k = after
            while k < len(lines) and not lines[k].strip():
                k += 1
            ans, exp = None, ""
            if k < len(lines):
                al = lines[k].strip()
                ma = re.match(r'\*\*答え[：:]\s*([1-4１-４])\s*\*\*\s*(.*)', al)
                mb = re.match(r'【答】\s*([①-④1-4１-４])\s*(.*)', al)
                if ma:
                    ans = int(ma.group(1).translate(Z2H_DIGIT)); exp = ma.group(2).strip()
                elif mb:
                    t = mb.group(1)
                    ans = CIRCLE.get(t) or int(t.translate(Z2H_DIGIT)); exp = mb.group(2).strip()
            if choices and ans:
                cur_qs.append({"q": shorten(qtext), "ch": choices,
                               "ans": "ABCD"[ans - 1], "exp": exp})
                i = k + 1
                continue
            else:
                print(f"  [WARN] 解析失敗 (line {i+1}): {qtext[:30]}")
        i += 1
    if cur_name is not None:
        chapters.append((cur_name, cur_qs))
    return chapters


def short_chapter(name):
    # "第1章 子どもの心身の健康と保健の意義" -> "子どもの心身の健康と保健の意義"
    return re.sub(r'^第\d+章[　 ]*', '', name).strip()


def main(src, out):
    chapters = parse(src)
    blocks = []          # 出力セクション
    secnum = 0
    total = 0
    for cname, qs in chapters:
        if not qs:
            continue
        sizes = split_counts(len(qs))
        idx = 0
        cshort = short_chapter(cname)
        part = 1
        multi = len(sizes) > 1
        for sz in sizes:
            secnum += 1
            group = qs[idx:idx + sz]
            idx += sz
            title = f"{cshort}{('①②③④⑤⑥⑦⑧⑨⑩'[part-1] if multi and part<=10 else '')}"
            blocks.append((f"{secnum:02d}", title, group))
            part += 1
        total += len(qs)
    # 書き出し
    lines = ["# 4択クイズ\n"]
    for num, title, group in blocks:
        lines.append(f"## {num} {title}")
        for d in group:
            lines.append(f"Q: {d['q']}")
            for li, c in enumerate(d['ch']):
                lines.append(f"{'ABCD'[li]}: {c}")
            lines.append(f"答え: {d['ans']}")
            lines.append(f"解説: {d['exp']}")
            lines.append("")
        if lines[-1] == "":
            lines.pop()
        lines.append("")
    open(out, "w", encoding="utf-8").write("\n".join(lines).rstrip() + "\n")
    print(f"変換完了: {total}問 / {len(blocks)}セクション -> {out}")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
