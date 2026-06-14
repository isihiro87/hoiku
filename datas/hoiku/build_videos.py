# -*- coding: utf-8 -*-
"""
保育士○×動画ビルダー。
各 quiz フォルダの qas.md + audios/(N-voicepeak.wav 連番) から
IchimonIttoData.tsx（Q1のみ「○か×か？」直前で改行・durationはffprobe実測）と
render.sh（subjectはパスから自動判定・subtitleは「○×クイズ」）を生成する。

使い方:
  python3 datas/hoiku/build_videos.py                # datas/hoiku配下の全quizを処理
  python3 datas/hoiku/build_videos.py <quizフォルダ>  # 個別処理
音声が揃っていないフォルダは render.sh のみ生成し tsx はスキップ。
"""
import os, sys, glob, math, subprocess

REPO = "/workspaces/hoiku_shiken"
HOIKU = os.path.join(REPO, "datas", "hoiku")
CHROME = os.path.join(REPO, "chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell")

SUBJECT_TITLE = {
    "hoiku_genri": "保育原理",
    "kyoiku_genri": "教育原理",
    "shakai_teki_yogo": "社会的養護",
    "kodomo_katei_fukushi": "子ども家庭福祉",
    "shakai_fukushi": "社会福祉",
    "hoiku_shinrigaku": "保育の心理学",
    "kodomo_no_hoken": "子どもの保健",
    "kodomo_no_shokuto_eiyo": "子どもの食と栄養",
    "hoiku_jissen": "保育実習理論",
}


def subject_of(quizdir):
    # .../datas/hoiku/<subject>/<topic>/quiz
    parts = os.path.relpath(quizdir, HOIKU).split(os.sep)
    return parts[0]


def parse_qas(quizdir):
    with open(os.path.join(quizdir, "qas.md"), encoding="utf-8") as f:
        text = f.read().strip()
    qs = []
    for block in [b for b in text.split("\n\n") if b.strip()]:
        lines = block.split("\n")
        qs.append((lines[0], lines[1], "\n".join(lines[2:]).strip()))
    return qs


def frames(wav):
    out = subprocess.check_output(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "csv=p=0", wav]).decode().strip()
    return math.ceil(float(out) * 30)


def jsstr(s):
    return s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")


def write_render_sh(quizdir, subject):
    abs_q = quizdir
    sh = f"""#!/bin/bash
set -e
cd {REPO}
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"
QUIZ_DIR="{abs_q}"

cp "$QUIZ_DIR"/audios/*.wav "$TEMP_DIR/audio/explain/"
cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"
cp "$QUIZ_DIR/IchimonIttoData.tsx" src/IchimonIttoData.tsx

echo "=== {os.path.basename(os.path.dirname(quizdir))} レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts IchimonIttoShorts \\
  "$QUIZ_DIR/output.mp4" \\
  --public-dir "$TEMP_DIR" \\
  --browser-executable {CHROME} \\
  --props '{{"subject":"{subject}","subtitle":"○か×クイズ"}}' \\
  --disable-chrome-sandbox \\
  --concurrency 4 \\
  --gl swiftshader

echo "=== 完了: $QUIZ_DIR/output.mp4 ==="
rm -rf "$TEMP_DIR"
"""
    # subtitle: 「○×クイズ」（記号は○×）
    sh = sh.replace("○か×クイズ", "○×クイズ")
    with open(os.path.join(quizdir, "render.sh"), "w", encoding="utf-8") as f:
        f.write(sh)


def write_tsx(quizdir, subject, qs, wavs):
    title = "保育士　" + SUBJECT_TITLE.get(subject, subject)
    topic = os.path.basename(os.path.dirname(quizdir))
    scenes = []
    for i, (disp, ans, hosoku) in enumerate(qs):
        qa, aa = wavs[2 * i], wavs[2 * i + 1]
        q_text = disp
        if i == 0:
            q_text = q_text.replace("○か×か？", "\n○か×か？")
        scenes.append("""    {{
        id: 'q{idx}',
        question: '{q}',
        answer: '{a}',
        description: '{d}',
        questionAudio: 'audio/explain/{qf}',
        questionDuration: {qd},
        answerAudio: 'audio/explain/{af}',
        answerDuration: {ad},
    }},""".format(
            idx=i + 1, q=jsstr(q_text), a=jsstr(ans), d=jsstr(hosoku),
            qf=os.path.basename(qa), qd=frames(qa),
            af=os.path.basename(aa), ad=frames(aa)))
    body = """// 自動生成 (build_videos.py) - qas.md
// フォルダ: {rel}
// 保育士試験 {sub} ○×クイズ

export const titleData = '{title}';

export interface IchimonIttoScene {{
    id: string;
    question: string;
    answer: string;
    description?: string;
    questionAudio: string;
    questionDuration: number;
    answerAudio: string;
    answerDuration: number;
}}

export const ichimonIttoData: IchimonIttoScene[] = [
{scenes}
];
""".format(rel=os.path.relpath(quizdir, REPO), sub=SUBJECT_TITLE.get(subject, subject),
           title=title, scenes="\n".join(scenes))
    with open(os.path.join(quizdir, "IchimonIttoData.tsx"), "w", encoding="utf-8") as f:
        f.write(body)


def process(quizdir):
    subject = subject_of(quizdir)
    qs = parse_qas(quizdir)
    n = len(qs)
    write_render_sh(quizdir, subject)
    wavs = sorted(glob.glob(os.path.join(quizdir, "audios", "*.wav")),
                  key=lambda p: int(os.path.basename(p).split("-")[0]))
    rel = os.path.relpath(quizdir, HOIKU)
    if len(wavs) == 2 * n:
        write_tsx(quizdir, subject, qs, wavs)
        return f"OK  {rel}  ({n}問, tsx生成)"
    return f"--  {rel}  ({n}問, 音声待ち: {len(wavs)}/{2*n})"


def main():
    if len(sys.argv) > 1:
        targets = [os.path.abspath(sys.argv[1])]
    else:
        targets = sorted(glob.glob(os.path.join(HOIKU, "*", "*", "quiz")))
    for t in targets:
        if os.path.exists(os.path.join(t, "qas.md")):
            print(process(t))


if __name__ == "__main__":
    main()
