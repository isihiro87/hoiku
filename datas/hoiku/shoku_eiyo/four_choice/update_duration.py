#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""音声配置後、各 NN-FourChoiceData.tsx の duration を実音声(ffprobe)で更新する。

audios/NN-voice.wav を ffprobe で計測し、30fps のフレーム数(切り上げ)へ変換して
questionDuration / answerDuration を書き換える。devcontainer 等 ffprobe のある環境で実行。

使い方:
  python3 update_duration.py
"""
import os, re, glob, math, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
AUDIOS = os.path.join(HERE, "audios")


def frames(wav):
    out = subprocess.check_output(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "csv=p=0", wav]).decode().strip()
    return max(1, math.ceil(float(out) * 30))


def dur_for(audio_rel):
    # audio_rel 例: audio/explain/04-voice.wav -> audios/04-voice.wav
    fname = os.path.basename(audio_rel)
    path = os.path.join(AUDIOS, fname)
    if not os.path.exists(path):
        return None
    return frames(path)


PAT_Q = re.compile(r"(questionAudio: '([^']+)',\s*\n\s*questionDuration: )\d+")
PAT_A = re.compile(r"(answerAudio: '([^']+)',\s*\n\s*answerDuration: )\d+")


def update_file(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    miss = []

    def repl(m):
        d = dur_for(m.group(2))
        if d is None:
            miss.append(os.path.basename(m.group(2)))
            return m.group(0)
        return m.group(1) + str(d)

    text = PAT_Q.sub(repl, text)
    text = PAT_A.sub(repl, text)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    return miss


def main():
    miss_all = []
    files = sorted(glob.glob(os.path.join(HERE, "[0-9][0-9]-FourChoiceData.tsx")))
    for path in files:
        miss = update_file(path)
        status = "OK" if not miss else f"未配置 {len(miss)}: {miss}"
        print(f"  {os.path.basename(path)}: {status}")
        miss_all += miss
    print(f"更新完了 {len(files)} ファイル。未配置音声 {len(miss_all)} 件。")


if __name__ == "__main__":
    main()
