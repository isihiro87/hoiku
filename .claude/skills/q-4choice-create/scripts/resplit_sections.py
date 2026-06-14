#!/usr/bin/env python3
"""1vertebrate ichimondittou.md を「教科横断・分散配置」のセクション構成に再分割。
Section 01 はロックして触らない（既に動画投稿済み）。
"""
import re

PATH = '/workspaces/hoiku_shiken/datas/science/grade1/1-3/1vertebrate/quiz/4choice/ichimondittou.md'

# Section 01 はロック - そのまま残す
LOCKED_SEC1_QUESTIONS = [
    '背骨をもつ動物を何という？',
    '背骨をもたない動物を何という？',
    '動物を背骨の有無で分けると？',
]

# 各セクションは異なる動物分類のなかま分けが混在するように設計
PLAN = [
    ('脊椎動物と無脊椎動物', LOCKED_SEC1_QUESTIONS),  # Section 01 ロック
    ('動物のなかま分け①', [
        '魚類の呼吸のしかたは？',
        'カエルやイモリのなかまは？',
        '鳥類の特徴は？',
    ]),
    ('動物のなかま分け②', [
        'トカゲやヘビのなかまは？',
        'ホニュウ類の特徴は？',
        '卵生の動物はどれ？',
    ]),
    ('動物のなかま分け③', [
        'メダカやフナのなかまは？',
        '両生類の幼生に多い呼吸のしかたは？',
        'ハトやニワトリのなかまは？',
    ]),
    ('動物のなかま分け④', [
        'ハチュウ類の体表の特徴は？',
        'イヌやクジラのなかまは？',
        '「肺で呼吸し、羽毛をもち、卵生である」にあてはまる動物は？',
    ]),
    ('5つの分類の特徴', [
        '「水中で生活し、えらで呼吸し、卵生である」にあてはまるのはどれ？',
        '両生類の成体の呼吸は？',
        '鳥類の体表の特徴は？',
        '「肺で呼吸し、体表が毛でおおわれ、胎生が多い」にあてはまるのはどれ？',
    ]),
    ('総合判別', [
        '「幼生は水中、成体は陸上や水辺で生活する」にあてはまるのはどれ？',
        '「体表が毛、母乳で育てる、胎生が多い」のなかまは？',
        '「肺で呼吸し、羽毛をもち、からのある卵を産む」にあてはまるのはどれ？',
        '胎生が多いなかまは？',
    ]),
]


def parse_blocks(path):
    with open(path) as f:
        text = f.read()
    head_match = re.match(r'^(#[^\n]+\n)', text)
    head = head_match.group(1) if head_match else ''
    rest = text[len(head):]
    blocks = {}
    pattern = re.compile(r'(Q: ([^\n]+)\n(?:[^\n]+\n)*?解説: [^\n]+\n?)', re.MULTILINE)
    for m in pattern.finditer(rest):
        blk = m.group(1).rstrip('\n')
        q_text = m.group(2)
        blocks[q_text] = blk
    return head, blocks


head, blocks = parse_blocks(PATH)
print(f'parsed {len(blocks)} blocks')

out = [head.strip(), '']
missing = []
for sec_name, qs in PLAN:
    out.append(f'## {sec_name}')
    for q in qs:
        if q in blocks:
            out.append(blocks[q])
            out.append('')
        else:
            missing.append((sec_name, q))

text = '\n'.join(out).rstrip() + '\n'
with open(PATH, 'w') as f:
    f.write(text)

leftover = [q for q in blocks if not any(q in qs for _, qs in PLAN)]
print(f'missing: {missing}')
print(f'leftover (unused): {leftover}')
print(f'total questions: {sum(len(qs) for _, qs in PLAN)}')
