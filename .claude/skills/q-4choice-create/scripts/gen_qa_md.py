#!/usr/bin/env python3
"""qa.md を「問題行→答え行」交互の単純形式で生成（既存理科qa.mdと同じ）

答え行は4択の正解（A/B/C/Dの選択肢）。解説は使わない。
"""
import re

CONFIGS = [
    '/workspaces/hoiku_shiken/datas/science/grade1/1-3/1vertebrate/quiz/4choice',
    '/workspaces/hoiku_shiken/datas/science/grade1/1-3/2invertebrate/quiz/4choice',
]


def parse_md(path):
    with open(path) as f:
        text = f.read()
    sections = re.split(r'^## ', text, flags=re.MULTILINE)[1:]
    all_q = []
    for sec in sections:
        lines = sec.strip().split('\n')
        blocks = []
        cur = []
        for line in lines[1:]:
            if line.strip() == '':
                if cur:
                    blocks.append(cur); cur = []
            else:
                cur.append(line)
        if cur:
            blocks.append(cur)
        for block in blocks:
            d = {}
            for line in block:
                if line.startswith('Q: '): d['question'] = line[3:]
                elif line.startswith('A: '): d['A'] = line[3:]
                elif line.startswith('B: '): d['B'] = line[3:]
                elif line.startswith('C: '): d['C'] = line[3:]
                elif line.startswith('D: '): d['D'] = line[3:]
                elif line.startswith('答え: '): d['answer'] = line[4:]
            if 'question' in d:
                all_q.append(d)
    return all_q


for base in CONFIGS:
    qs = parse_md(f"{base}/ichimondittou.md")
    out = []
    for q in qs:
        q_text = q['question'].replace('「', '').replace('」', '')
        a_text = q[q['answer']].replace('「', '').replace('」', '')
        out.append(q_text)
        out.append(a_text)
    with open(f"{base}/qa.md", 'w') as f:
        f.write('\n'.join(out) + '\n')
    print(f"updated: {base}/qa.md ({len(qs)} 問 / {len(out)} 行)")
