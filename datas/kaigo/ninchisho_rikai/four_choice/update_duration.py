#!/usr/bin/env python3
"""音声配置後、各 FourChoiceData.tsx の duration を実音声から計算して更新する"""
import os, re, subprocess, math

BASE = "/workspaces/hoiku_shiken/datas/kaigo/ninchisho_rikai/four_choice"
TOPIC = "voice"
# (セクション番号, セクション名, 問題数)
SECTIONS = [
    ('01', '認知症の行動・心理症状（BPSD）', 3),
    ('02', '認知症のある人の生活への理解', 3),
]


def get_frames(path):
    dur = subprocess.check_output(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", path]
    ).decode().strip()
    return math.ceil(float(dur) * 30)


def main():
    for num, name, count in SECTIONS:
        path = f"{BASE}/{num}-FourChoiceData.tsx"
        if not os.path.exists(path):
            print(f"skip: {path}")
            continue
        with open(path) as f:
            text = f.read()
        # セクション内クリップは NN-MM-voice.wav（MM=00始まり、Q/A交互）
        for i in range(count):
            q_aud = f"{BASE}/audios/{num}-{i*2:02d}-{TOPIC}.wav"
            a_aud = f"{BASE}/audios/{num}-{i*2+1:02d}-{TOPIC}.wav"
            if not (os.path.exists(q_aud) and os.path.exists(a_aud)):
                print(f"  missing audio for q{i+1} in {num}")
                continue
            q_dur = get_frames(q_aud)
            a_dur = get_frames(a_aud)
            scene_pat = rf"(id: 'q{i+1}',.*?questionDuration: )\d+(,.*?answerDuration: )\d+"
            text = re.sub(scene_pat, lambda m: f"{m.group(1)}{q_dur}{m.group(2)}{a_dur}", text, count=1, flags=re.DOTALL)
        with open(path, 'w') as f:
            f.write(text)
        print(f"updated: {num}-FourChoiceData.tsx")


if __name__ == '__main__':
    main()
