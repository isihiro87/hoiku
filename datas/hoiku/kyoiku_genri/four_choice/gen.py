#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""保育士 教育原理 4択クイズ ファイル一式生成。

ichimondittou.md（## セクション + Q/A/B/C/D/答え/解説 ブロック）から
各セクションの NN-FourChoiceData.tsx と NN-render.sh、収録用 qa.md、
update_duration.py を生成する。

- ローカル(Windows等)でもdevcontainerでも実行可。ファイルはこのスクリプトと
  同じフォルダ(WRITE_DIR)に出力し、render.sh内のパスは常にdevcontainer用(DC_*)で書く。
- 音声は audios/ に NN-voice.wav（Q/A交互・00からの通し番号）で配置する前提。
- duration はプレースホルダ。音声配置後に update_duration.py で実測へ更新する。

使い方:
  python3 gen.py
"""
import os, re

WRITE_DIR = os.path.dirname(os.path.abspath(__file__))
DC_REPO = "/workspaces/hoiku_shiken"
DC_BASE = "/workspaces/hoiku_shiken/datas/hoiku/kyoiku_genri/four_choice"
CHROME = f"{DC_REPO}/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell"

TITLE = "保育士　教育原理"
SUBTITLE = "4択クイズ"
SUBJECT = "kyoiku_genri"
TOPIC = "voice"
PLACEHOLDER_DUR = 90


def jsstr(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")


def parse(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    sections = re.split(r'^## ', text, flags=re.MULTILINE)[1:]
    out = []
    for sec in sections:
        lines = sec.split('\n')
        header = lines[0].strip()
        m = re.match(r'(\S+)\s+(.*)', header)
        num, name = (m.group(1), m.group(2)) if m else (header, header)
        blocks, cur = [], []
        for line in lines[1:]:
            if line.startswith('Q: '):
                if cur:
                    blocks.append(cur)
                cur = [line]
            elif cur:
                cur.append(line)
        if cur:
            blocks.append(cur)
        qs = []
        for block in blocks:
            d = {}
            for line in block:
                if line.startswith('Q: '): d['q'] = line[3:].strip()
                elif line.startswith('A: '): d['A'] = line[3:].strip()
                elif line.startswith('B: '): d['B'] = line[3:].strip()
                elif line.startswith('C: '): d['C'] = line[3:].strip()
                elif line.startswith('D: '): d['D'] = line[3:].strip()
                elif line.startswith('答え: '): d['ans'] = line[4:].strip()
                elif line.startswith('解説: '): d['exp'] = line[4:].strip()
            if 'q' in d and 'ans' in d:
                qs.append(d)
        out.append((num, name, qs))
    return out


def strip_brackets(s):
    for ch in '「」『』':
        s = s.replace(ch, '')
    return s


def gen():
    sections = parse(os.path.join(WRITE_DIR, "ichimondittou.md"))
    qa_lines = []
    g = 0  # global question index
    total = sum(len(qs) for _, _, qs in sections)
    for num, name, qs in sections:
        scenes = ""
        for i, d in enumerate(qs):
            # 音声はセクションごとの連番（例: 01-00=01の0番目）。Q/A交互。
            q_local = i * 2
            a_local = i * 2 + 1
            ci = ord(d['ans']) - ord('A')
            choices = ', '.join(f"'{jsstr(d[k])}'" for k in 'ABCD')
            scenes += (
                "    {\n"
                f"        id: 'q{i+1}',\n"
                f"        question: '{jsstr(d['q'])}',\n"
                f"        choices: [{choices}],\n"
                f"        correctIndex: {ci},\n"
                f"        explanation: '{jsstr(d.get('exp',''))}',\n"
                f"        questionAudio: 'audio/explain/{num}-{q_local:02d}-{TOPIC}.wav',\n"
                f"        questionDuration: {PLACEHOLDER_DUR},\n"
                f"        answerAudio: 'audio/explain/{num}-{a_local:02d}-{TOPIC}.wav',\n"
                f"        answerDuration: {PLACEHOLDER_DUR},\n"
                "    },\n"
            )
            # 収録用 qa.md: 問題 → 正解の選択肢
            qa_lines.append(strip_brackets(d['q']))
            qa_lines.append(strip_brackets(d[d['ans']]))
        tsx = f"""// 保存用ファイル - {num} {name}
// フォルダ: datas/hoiku/kyoiku_genri/four_choice
// 自動生成 (gen.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '{TITLE}';
export const subtitleData = '{SUBTITLE}';

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
        with open(os.path.join(WRITE_DIR, f"{num}-FourChoiceData.tsx"), "w", encoding="utf-8") as f:
            f.write(tsx)

        # render.sh（devcontainer用パス）
        cp_lines = []
        for i in range(len(qs)):
            cp_lines.append(f'cp "$BASE/audios/{num}-{i*2:02d}-{TOPIC}.wav" "$TEMP_DIR/audio/explain/"')
            cp_lines.append(f'cp "$BASE/audios/{num}-{i*2+1:02d}-{TOPIC}.wav" "$TEMP_DIR/audio/explain/"')
        cp_block = "\n".join(cp_lines)
        sh = f"""#!/bin/bash
set -e
cd {DC_REPO}
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"
BASE="{DC_BASE}"

{cp_block}
cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"
[ -f public/audio/finish.wav ] && cp public/audio/finish.wav "$TEMP_DIR/audio/explain/" || true
cp "$BASE/{num}-FourChoiceData.tsx" src/FourChoiceData.tsx

echo "=== {num} {name} (4択) レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts FourChoiceShorts \\
  "$BASE/{num}-output.mp4" \\
  --public-dir "$TEMP_DIR" \\
  --browser-executable {CHROME} \\
  --props '{{"subject":"{SUBJECT}"}}' \\
  --disable-chrome-sandbox \\
  --concurrency 4 \\
  --gl swiftshader

echo "=== 完了: $BASE/{num}-output.mp4 ==="
rm -rf "$TEMP_DIR"
"""
        with open(os.path.join(WRITE_DIR, f"{num}-render.sh"), "w", encoding="utf-8", newline="\n") as f:
            f.write(sh)
        g += len(qs)
        print(f"  {num} {name}: {len(qs)}問 (audio {2*(g-len(qs)):02d}-{2*g-1:02d})")

    with open(os.path.join(WRITE_DIR, "qa.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(qa_lines) + "\n")
    print(f"qa.md: {total}問 / 音声 {2*total} ファイル想定")
    print(f"セクション数: {len(sections)}")


if __name__ == "__main__":
    gen()
