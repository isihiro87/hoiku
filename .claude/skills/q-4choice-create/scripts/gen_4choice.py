#!/usr/bin/env python3
"""4択クイズの全ファイル生成（qa.md, FourChoiceData.tsx, render.sh, post_*.txt）

音声は『XX-{topic}.wav』形式・Q/A交互で配置される前提。
duration はプレースホルダ（60）で生成。音声準備後に update_duration.py で更新。
"""
import os
import re
import sys

CONFIGS = {
    '1vertebrate': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/1-3/1vertebrate/quiz/4choice',
        'topic': 'voice',
        'sections': [
            ('01', '脊椎動物と無脊椎動物', 3),
            ('02', '魚類のなかま', 4),
            ('03', '両生類のなかま①', 3),
            ('04', '両生類のなかま②', 3),
            ('05', 'ハチュウ類のなかま', 4),
            ('06', '鳥類のなかま', 4),
            ('07', 'ホニュウ類のなかま', 4),
            ('08', '卵生・胎生と総合判別', 4),
        ],
        'topic_label': '脊椎動物の分類',
        'subtitle': '生物4択',
    },
    '2invertebrate': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/1-3/2invertebrate/quiz/4choice',
        'topic': 'voice',
        'sections': [
            ('01', '無脊椎動物の基本', 3),
            ('02', '節足動物の特徴', 4),
            ('03', '昆虫類のからだ', 4),
            ('04', '昆虫類のあし・呼吸', 4),
            ('05', '甲殻類とクモ', 4),
            ('06', '軟体動物のなかま', 4),
            ('07', '総合判別①', 4),
            ('08', '総合判別②', 3),
        ],
        'topic_label': '無脊椎動物の分類',
        'subtitle': '生物4択',
    },
    'observation': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/1-1/1observation_microscope/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '観察と顕微鏡',
        'subtitle': '生物4択',
    },
    'flower_structure': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/1-2/1flower_structure/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '花のつくり',
        'subtitle': '生物4択',
    },
    'seed_plant': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/1-2/2seed_plant/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '種子植物の分類',
        'subtitle': '生物4択',
    },
    'leaf_root': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/1-2/3leaf_root/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '葉と根の分類',
        'subtitle': '生物4択',
    },
    'seedless_plant': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/1-2/4seedless_plant/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '種子をつくらない植物',
        'subtitle': '生物4択',
    },
    'matter_density': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/2-1/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '身のまわりの物質と密度',
        'subtitle': '化学4択',
    },
    'gas': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/2-2/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '気体の性質',
        'subtitle': '化学4択',
    },
    'solution': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/2-3/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '水溶液の性質',
        'subtitle': '化学4択',
    },
    'state_change': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade1/2-4/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '状態変化',
        'subtitle': '化学4択',
    },
    'g3_solution_current': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-1/1solution_current/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '水溶液と電流',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_electrolysis': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-1/2electrolysis/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '電気分解',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_atomic_structure': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-1/3atomic_structure/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '原子とイオンのでき方',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_ion_formulas': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-1/4ion_formulas/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': 'イオンの化学式',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_acid_alkali_properties': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-2/1acid_alkali_properties/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '酸とアルカリの性質',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_acid_alkali_ph': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-2/2acid_alkali_ph/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': 'pHと酸・アルカリ',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_neutralization': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-2/3neutralization/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '中和',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_battery_basics': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-3/1battery_basics/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '電池の基本',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_daniell_cell': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-3/2daniell_cell/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': 'ダニエル電池',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_ionization_tendency': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-3/3ionization_tendency/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': 'イオン化傾向',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g3_battery_types': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade3/1-3/4battery_types/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '電池の種類',
        'subtitle': '化学4択',
        'grade': '中3',
    },
    'g2_substance_composition': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade2/1-1/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '物質のなり立ち',
        'subtitle': '化学4択',
        'grade': '中2',
    },
    'g2_chemical_combination': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade2/1-2/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '物質どうしの化学変化',
        'subtitle': '化学4択',
        'grade': '中2',
    },
    'g2_oxidation_reduction_mass': {
        'base': '/workspaces/hoiku_shiken/datas/science/grade2/1-3/quiz/4choice',
        'topic': 'voice',
        'sections': [],
        'topic_label': '酸化・還元と化学変化の質量',
        'subtitle': '化学4択',
        'grade': '中2',
    },
}

DEFAULT_GRADE = '中1'
PLACEHOLDER_DUR = 60


def parse_md(path):
    """ichimondittou.md を解析。
    返り値: (all_q, section_info)
      all_q: 全問題の辞書リスト
      section_info: [(連番, セクション名, 問題数), ...]
    """
    with open(path) as f:
        text = f.read()
    sections = re.split(r'^## ', text, flags=re.MULTILINE)[1:]
    all_q = []
    section_info = []
    for s_idx, sec in enumerate(sections, start=1):
        lines = sec.split('\n')
        sec_name = lines[0].strip()
        # 各問のブロックを Q: 行ベースで抽出
        blocks = []
        cur = []
        for line in lines[1:]:
            if line.startswith('Q: '):
                if cur:
                    blocks.append(cur)
                cur = [line]
            elif cur:
                if line.strip() or any('解説:' in c for c in cur):
                    cur.append(line)
        if cur:
            blocks.append(cur)
        count = 0
        for block in blocks:
            d = {}
            for line in block:
                if line.startswith('Q: '): d['question'] = line[3:]
                elif line.startswith('日本語: '): d['japanese'] = line[5:]
                elif line.startswith('A: '): d['A'] = line[3:]
                elif line.startswith('B: '): d['B'] = line[3:]
                elif line.startswith('C: '): d['C'] = line[3:]
                elif line.startswith('D: '): d['D'] = line[3:]
                elif line.startswith('答え: '): d['answer'] = line[4:]
                elif line.startswith('解説: '): d['explanation'] = line[4:]
            if 'question' in d and 'answer' in d:
                all_q.append(d)
                count += 1
        section_info.append((f'{s_idx:02d}', sec_name, count))
    return all_q, section_info


def gen_qa_md(cfg, all_q):
    """qa.md: 問題/答え交互のシンプル形式（既存理科qa.mdと同じ）"""
    base = cfg['base']
    out_lines = []
    for q in all_q:
        q_text = q['question'].replace('「', '').replace('」', '')
        a_text = q[q['answer']].replace('「', '').replace('」', '')
        out_lines.append(q_text)
        out_lines.append(a_text)
    out = f"{base}/qa.md"
    with open(out, 'w') as f:
        f.write('\n'.join(out_lines) + '\n')
    print(f"  qa.md: {out} ({len(all_q)}問)")


def gen_tsx(cfg, all_q):
    base, topic = cfg['base'], cfg['topic']
    grade = cfg.get('grade', DEFAULT_GRADE)
    title = f'{grade}　理科'
    audio_idx = 0
    for num, name, count in cfg['sections']:
        section_q = all_q[audio_idx:audio_idx + count]
        scenes_str = ''
        for i, q in enumerate(section_q):
            global_i = audio_idx + i
            q_aud_idx = global_i * 2
            a_aud_idx = global_i * 2 + 1
            ans_idx = ord(q['answer']) - ord('A')
            choices = [q['A'], q['B'], q['C'], q['D']]
            ch = ', '.join(f"'{c}'" for c in choices)
            scenes_str += f"""    {{
        id: 'q{i+1}',
        question: '{q['question']}',
        choices: [{ch}],
        correctIndex: {ans_idx},
        explanation: '{q['explanation']}',
        questionAudio: 'audio/explain/{q_aud_idx:02d}-{topic}.wav',
        questionDuration: {PLACEHOLDER_DUR},
        answerAudio: 'audio/explain/{a_aud_idx:02d}-{topic}.wav',
        answerDuration: {PLACEHOLDER_DUR},
    }},
"""
        body = f"""// 保存用ファイル - {num} {name}
// フォルダ: {base.replace('/workspaces/hoiku_shiken/', '')}
// 生成日: 2026-05-10
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '{title}';
export const subtitleData = '{cfg["subtitle"]}';

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
{scenes_str}];
"""
        out = f"{base}/{num}-FourChoiceData.tsx"
        with open(out, 'w') as f:
            f.write(body)
        audio_idx += count
    print(f"  tsx: {len(cfg['sections'])} files")


def gen_render(cfg):
    base, topic = cfg['base'], cfg['topic']
    audio_idx = 0
    for num, name, count in cfg['sections']:
        cp_lines = []
        for i in range(count):
            global_i = audio_idx + i
            q_aud_idx = global_i * 2
            a_aud_idx = global_i * 2 + 1
            cp_lines.append(f'cp {base}/audios/{q_aud_idx:02d}-{topic}.wav "$TEMP_DIR/audio/explain/"')
            cp_lines.append(f'cp {base}/audios/{a_aud_idx:02d}-{topic}.wav "$TEMP_DIR/audio/explain/"')
        cp_block = '\n'.join(cp_lines)
        content = f"""#!/bin/bash
set -e

# レンダリングスクリプト: {num}-FourChoiceData.tsx
# 生成日: 2026-05-10

TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"

# 音声をコピー（Q/A交互の通し番号）
{cp_block}

cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"

# データファイルをsrcにコピー
cp {base}/{num}-FourChoiceData.tsx /workspaces/hoiku_shiken/src/FourChoiceData.tsx

echo "=== {num} レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts FourChoiceShorts \\
  {base}/{num}-output.mp4 \\
  --public-dir "$TEMP_DIR" \\
  --browser-executable /workspaces/hoiku_shiken/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell \\
  --props '{{"subject":"science"}}' \\
  --disable-chrome-sandbox \\
  --concurrency 4 \\
  --gl swiftshader

echo "=== {num} 完了 ==="
rm -rf "$TEMP_DIR"
"""
        out = f"{base}/{num}-render.sh"
        with open(out, 'w') as f:
            f.write(content)
        os.chmod(out, 0o755)
        audio_idx += count
    print(f"  render.sh: {len(cfg['sections'])} files")


def gen_posts(cfg, all_q):
    base = cfg['base']
    # ジャンルは subtitle から抽出（'生物4択' → '生物'、'化学4択' → '化学'）
    genre = cfg['subtitle'].replace('4択', '').strip() or '生物'
    grade = cfg.get('grade', DEFAULT_GRADE)
    grade_full = grade.replace('中', '中学') + '年' if grade.startswith('中') else grade
    audio_idx = 0
    for num, name, count in cfg['sections']:
        yt = f"""【タイトル】
全問正解できる？理科4択クイズ{count}問｜{grade}理科

【説明文】
{grade_full}理科「{cfg['topic_label']}」より「{name}」を{count}問の4択クイズでチェック！
定期テスト前の確認にぴったりです。

詰まった問題があれば→復習のチャンス
全問スラスラ答えられたら→テスト準備OK

答えは動画で確認 → 一時停止しながらでOK！

【タグ】
中学生,{grade},理科,{genre},4択クイズ,定期テスト対策,テスト勉強,ショート動画,{cfg['topic_label']}
"""
        ig = f"""{grade}理科　4択クイズ {count}問

{cfg['topic_label']}「{name}」
パッと答えられる？

詰まった問題は保存して復習しよう
今のうちに覚えれば本番で自信がつく

#中学生 #理科 #{genre} #定期テスト対策 #勉強垢
"""
        with open(f"{base}/{num}-post_youtube.txt", 'w') as f:
            f.write(yt)
        with open(f"{base}/{num}-post_instagram.txt", 'w') as f:
            f.write(ig)
        audio_idx += count
    print(f"  post: {len(cfg['sections']) * 2} files")


def gen_update_script(cfg):
    """音声配置後に各 tsx の duration を実音声に合わせて更新するスクリプト"""
    base, topic = cfg['base'], cfg['topic']
    sections_repr = repr(cfg['sections'])
    content = f"""#!/usr/bin/env python3
\"\"\"音声配置後、各 FourChoiceData.tsx の duration を実音声から計算して更新する\"\"\"
import os, re, subprocess, math

BASE = "{base}"
TOPIC = "{topic}"
SECTIONS = {sections_repr}


def get_frames(path):
    dur = subprocess.check_output(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", path]
    ).decode().strip()
    return math.ceil(float(dur) * 30)


def main():
    audio_idx = 0
    for num, name, count in SECTIONS:
        path = f"{{BASE}}/{{num}}-FourChoiceData.tsx"
        if not os.path.exists(path):
            print(f"skip: {{path}}")
            audio_idx += count
            continue
        with open(path) as f:
            text = f.read()
        # 各シーンの questionDuration / answerDuration を順番に置き換え
        for i in range(count):
            global_i = audio_idx + i
            q_aud = f"{{BASE}}/audios/{{global_i*2:02d}}-{{TOPIC}}.wav"
            a_aud = f"{{BASE}}/audios/{{global_i*2+1:02d}}-{{TOPIC}}.wav"
            if not (os.path.exists(q_aud) and os.path.exists(a_aud)):
                print(f"  missing audio for q{{i+1}} in {{num}}")
                continue
            q_dur = get_frames(q_aud)
            a_dur = get_frames(a_aud)
            # シーン id='q{{i+1}}' の questionDuration / answerDuration を置換
            scene_pat = rf"(id: 'q{{i+1}}',.*?questionDuration: )\\d+(,.*?answerDuration: )\\d+"
            text = re.sub(scene_pat, lambda m: f"{{m.group(1)}}{{q_dur}}{{m.group(2)}}{{a_dur}}", text, count=1, flags=re.DOTALL)
        with open(path, 'w') as f:
            f.write(text)
        print(f"updated: {{num}}-FourChoiceData.tsx")
        audio_idx += count


if __name__ == '__main__':
    main()
"""
    out = f"{base}/update_duration.py"
    with open(out, 'w') as f:
        f.write(content)
    os.chmod(out, 0o755)
    print(f"  update_duration.py: {out}")


def main():
    target = sys.argv[1] if len(sys.argv) > 1 else None
    for key, cfg in CONFIGS.items():
        if target and key != target:
            continue
        print(f"\n=== {key} ===")
        all_q, section_info = parse_md(f"{cfg['base']}/ichimondittou.md")
        # 自動検出したセクション情報で上書き
        cfg['sections'] = section_info
        print(f"  questions: {len(all_q)}")
        for num, name, count in section_info:
            print(f"    {num} {name}: {count}問")
        # 既存の連番tsx/render.sh/post を全削除（セクション数変動で残骸が出るため）
        # ※ .mp4 や .py は消さない
        for f in os.listdir(cfg['base']):
            if re.match(r'^\d{2}-', f) and (f.endswith('.tsx') or f.endswith('.sh') or f.endswith('.txt')):
                os.remove(f"{cfg['base']}/{f}")
        os.makedirs(f"{cfg['base']}/audios", exist_ok=True)
        gen_qa_md(cfg, all_q)
        gen_tsx(cfg, all_q)
        gen_render(cfg)
        gen_posts(cfg, all_q)
        gen_update_script(cfg)


if __name__ == '__main__':
    main()
