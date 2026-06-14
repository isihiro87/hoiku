#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""voice_01_05.wav を 36 発話へ分割し、セクション別名(01-00-voice.wav 等)で保存する。

無音検出で得た speech ブロックを、各発話の想定長(文字数ベース)に最も合うように
DP で 36 グループへ連続分割する（単純な無音長しきい値より頑健）。
- 想定テキストは qa_01_05.md（36行 = Q/A 交互）。
- セクション内訳: 01=8, 02=8, 03=8, 04=6, 05=6 発話。
analyze（既定）で案のみ表示。--write で audios/ へ書き出し。
"""
import os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "voice_01_05.wav")
OUTDIR = os.path.join(HERE, "audios")
QA = os.path.join(HERE, "qa_01_05.md")
SECTIONS = [("01", 8), ("02", 8), ("03", 8), ("04", 6), ("05", 6)]  # (番号, 発話数)
NOISE, DMIN = "-30dB", "0.25"


def duration(path):
    return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries",
        "format=duration", "-of", "csv=p=0", path]).decode().strip())


def speech_blocks(path):
    p = subprocess.run(["ffmpeg", "-i", path, "-af",
        f"silencedetect=noise={NOISE}:d={DMIN}", "-f", "null", "-"],
        stderr=subprocess.PIPE, stdout=subprocess.DEVNULL)
    txt = p.stderr.decode("utf-8", "ignore")
    starts = [float(m) for m in re.findall(r'silence_start:\s*([0-9.]+)', txt)]
    ends = [float(a) for a, _ in re.findall(
        r'silence_end:\s*([0-9.]+)\s*\|\s*silence_duration:\s*([0-9.]+)', txt)]
    n = min(len(starts), len(ends))
    total = duration(path)
    # speech ブロック = 無音の間。前後端も含める。
    blocks = []
    prev = 0.0
    for i in range(n):
        if starts[i] - prev > 0.02:
            blocks.append([prev, starts[i]])
        prev = ends[i]
    if total - prev > 0.02:
        blocks.append([prev, total])
    return blocks, total


def mora(text):
    t = re.sub(r'[、。，．\s\(\)?？「」『』…・→＝]', '', text)
    return max(1, len(t))


def expected_durations():
    lines = [l.rstrip("\n") for l in open(QA, encoding="utf-8") if l.strip()]
    return [mora(l) for l in lines]


def dp_align(blocks, exp):
    M, K = len(blocks), len(exp)
    d = [b[1] - b[0] for b in blocks]
    pref = [0.0]
    for x in d:
        pref.append(pref[-1] + x)
    # 絶対長モデル（日本語: 約0.15秒/字 + 0.3）。総和正規化はしない（短い発話を過大評価し
    # 隣接ブロックを誤結合するため）。
    E = [0.15 * e + 0.3 for e in exp]
    INF = float("inf")
    dp = [[INF] * (M + 1) for _ in range(K + 1)]
    par = [[-1] * (M + 1) for _ in range(K + 1)]
    dp[0][0] = 0.0
    for k in range(1, K + 1):
        for i in range(k, M - (K - k) + 1):
            best, bj = INF, -1
            for j in range(k - 1, i):
                c = dp[k - 1][j] + abs((pref[i] - pref[j]) - E[k - 1])
                if c < best:
                    best, bj = c, j
            dp[k][i], par[k][i] = best, bj
    # 復元: 各グループの [block開始index, block終了index)
    cuts_block = []
    i = M
    for k in range(K, 0, -1):
        j = par[k][i]
        cuts_block.append((j, i))
        i = j
    cuts_block.reverse()
    return cuts_block


def main(write=False):
    blocks, total = speech_blocks(SRC)
    exp = expected_durations()
    texts = [l.rstrip("\n") for l in open(QA, encoding="utf-8") if l.strip()]
    assert len(exp) == 36, f"qa_01_05.md は36行必要 (現在 {len(exp)})"
    groups = dp_align(blocks, exp)
    # グループ -> 時間境界
    seg_times = []
    for (a, b) in groups:
        seg_times.append((blocks[a][0], blocks[b - 1][1]))
    # 隣接グループ間は無音の中点で割る
    bounds = [0.0]
    for g in range(len(groups) - 1):
        end_prev = blocks[groups[g][1] - 1][1]
        start_next = blocks[groups[g + 1][0]][0]
        bounds.append((end_prev + start_next) / 2)
    bounds.append(total)

    # セクション別の名前を割り当て
    names = []
    for num, cnt in SECTIONS:
        for li in range(cnt):
            names.append(f"{num}-{li:02d}-voice.wav")
    assert len(names) == 36

    print(f"total={total:.2f}s  blocks={len(blocks)}  -> 36 発話\n")
    print("file               len(実測) 想定比  テキスト")
    for k in range(36):
        a, b = bounds[k], bounds[k + 1]
        print(f"{names[k]:18s} {b-a:5.2f}s  {exp[k]:3d}   {texts[k]}")

    if not write:
        print("\n[analyze] 書き出しなし。問題なければ --write で実行。")
        return
    os.makedirs(OUTDIR, exist_ok=True)
    for k in range(36):
        a, b = bounds[k], bounds[k + 1]
        out = os.path.join(OUTDIR, names[k])
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", SRC,
            "-ss", f"{a:.3f}", "-to", f"{b:.3f}", "-c", "copy", out], check=True)
    print(f"\n書き出し完了: 36 ファイル -> {OUTDIR}")


if __name__ == "__main__":
    main(write=("--write" in sys.argv))
