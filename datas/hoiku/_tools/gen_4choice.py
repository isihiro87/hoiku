#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""保育士4択 各セクションファイル生成（汎用・科目を引数で指定）。

<dir>/ichimondittou.md から NN-FourChoiceData.tsx / NN-render.sh / qa.md を生成。
- 音声はセクション別連番（例 01-00-voice.wav = 01の0番目, Q/A交互）。
- render.sh は devcontainer 用パスで出力（FourChoiceShorts・指定subject）。
- duration はプレースホルダ。音声配置後 update_duration.py（各dirにコピー）で更新。

使い方:
  python gen_4choice.py <four_choice_dir> <subject> <title> [subtitle]
例:
  python gen_4choice.py datas/hoiku/shoku_eiyo/four_choice kodomo_no_shokuto_eiyo "保育士　食と栄養"
"""
import os, re, sys

REPO_LOCAL = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
DC_REPO = "/workspaces/hoiku_shiken"
CHROME = f"{DC_REPO}/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell"
TOPIC = "voice"
PLACEHOLDER_DUR = 90


def jsstr(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")


def strip_brackets(s):
    for ch in "「」『』":
        s = s.replace(ch, "")
    return s


def parse(path):
    text = open(path, encoding="utf-8").read()
    sections = re.split(r'^## ', text, flags=re.MULTILINE)[1:]
    out = []
    for sec in sections:
        lines = sec.split("\n")
        m = re.match(r'(\S+)\s+(.*)', lines[0].strip())
        num, name = (m.group(1), m.group(2)) if m else (lines[0].strip(), lines[0].strip())
        blocks, cur = [], []
        for line in lines[1:]:
            if line.startswith("Q: "):
                if cur:
                    blocks.append(cur)
                cur = [line]
            elif cur:
                cur.append(line)
        if cur:
            blocks.append(cur)
        qs = []
        for b in blocks:
            d = {}
            for line in b:
                if line.startswith("Q: "): d["q"] = line[3:].strip()
                elif line.startswith("A: "): d["A"] = line[3:].strip()
                elif line.startswith("B: "): d["B"] = line[3:].strip()
                elif line.startswith("C: "): d["C"] = line[3:].strip()
                elif line.startswith("D: "): d["D"] = line[3:].strip()
                elif line.startswith("答え: "): d["ans"] = line[4:].strip()
                elif line.startswith("解説: "): d["exp"] = line[4:].strip()
            if "q" in d and "ans" in d:
                qs.append(d)
        out.append((num, name, qs))
    return out


def gen(dir_, subject, title, subtitle):
    write_dir = os.path.abspath(dir_)
    dc_base = DC_REPO + "/" + os.path.relpath(write_dir, REPO_LOCAL).replace("\\", "/")
    sections = parse(os.path.join(write_dir, "ichimondittou.md"))
    qa_lines = []
    total = 0
    for num, name, qs in sections:
        scenes = ""
        for i, d in enumerate(qs):
            ql, al = i * 2, i * 2 + 1
            ci = ord(d["ans"]) - ord("A")
            choices = ", ".join(f"'{jsstr(d[k])}'" for k in "ABCD")
            scenes += (
                "    {\n"
                f"        id: 'q{i+1}',\n"
                f"        question: '{jsstr(d['q'])}',\n"
                f"        choices: [{choices}],\n"
                f"        correctIndex: {ci},\n"
                f"        explanation: '{jsstr(d.get('exp',''))}',\n"
                f"        questionAudio: 'audio/explain/{num}-{ql:02d}-{TOPIC}.wav',\n"
                f"        questionDuration: {PLACEHOLDER_DUR},\n"
                f"        answerAudio: 'audio/explain/{num}-{al:02d}-{TOPIC}.wav',\n"
                f"        answerDuration: {PLACEHOLDER_DUR},\n"
                "    },\n"
            )
            qa_lines.append(strip_brackets(d["q"]))
            qa_lines.append(strip_brackets(d[d["ans"]]))
        tsx = f"""// 保存用ファイル - {num} {name}
// フォルダ: {os.path.relpath(write_dir, REPO_LOCAL).replace(os.sep,'/')}
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '{title}';
export const subtitleData = '{subtitle}';

export interface FourChoiceScene {{
    id: string;
    question: string;
    japanese?: string;
    choices: [string, string, string, string];
    correctIndex: number;
    explanation: string;
    questionAudio: string;
    questionDuration: number;
    answerAudio: string;
    answerDuration: number;
}}

export const fourChoiceData: FourChoiceScene[] = [
{scenes}];
"""
        open(os.path.join(write_dir, f"{num}-FourChoiceData.tsx"), "w", encoding="utf-8").write(tsx)

        cp = []
        for i in range(len(qs)):
            cp.append(f'cp "$BASE/audios/{num}-{i*2:02d}-{TOPIC}.wav" "$TEMP_DIR/audio/explain/"')
            cp.append(f'cp "$BASE/audios/{num}-{i*2+1:02d}-{TOPIC}.wav" "$TEMP_DIR/audio/explain/"')
        sh = f"""#!/bin/bash
set -e
cd {DC_REPO}
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"
BASE="{dc_base}"

{chr(10).join(cp)}
cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"
[ -f public/audio/finish.wav ] && cp public/audio/finish.wav "$TEMP_DIR/audio/explain/" || true
cp "$BASE/{num}-FourChoiceData.tsx" src/FourChoiceData.tsx

echo "=== {num} {name} (4択) レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts FourChoiceShorts \\
  "$BASE/{num}-output.mp4" \\
  --public-dir "$TEMP_DIR" \\
  --browser-executable {CHROME} \\
  --props '{{"subject":"{subject}"}}' \\
  --disable-chrome-sandbox \\
  --concurrency 4 \\
  --gl swiftshader

echo "=== 完了: $BASE/{num}-output.mp4 ==="
rm -rf "$TEMP_DIR"
"""
        with open(os.path.join(write_dir, f"{num}-render.sh"), "w", encoding="utf-8", newline="\n") as f:
            f.write(sh)
        total += len(qs)
        print(f"  {num} {name}: {len(qs)}問")

    open(os.path.join(write_dir, "qa.md"), "w", encoding="utf-8").write("\n".join(qa_lines) + "\n")
    print(f"完了: {total}問 / {len(sections)}セクション / 音声 {2*total} ファイル想定")
    print(f"subject={subject}  title={title}  base={dc_base}")


if __name__ == "__main__":
    d, subject, title = sys.argv[1], sys.argv[2], sys.argv[3]
    subtitle = sys.argv[4] if len(sys.argv) > 4 else "4択クイズ"
    gen(d, subject, title, subtitle)
