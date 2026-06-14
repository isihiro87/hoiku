#!/usr/bin/env python3
"""ichimondittou.md の問題文をリズム重視で短く言い換え、重複も削除。"""
import re

PATHS = [
    '/workspaces/hoiku_shiken/datas/science/grade1/1-3/1vertebrate/quiz/4choice/ichimondittou.md',
    '/workspaces/hoiku_shiken/datas/science/grade1/1-3/2invertebrate/quiz/4choice/ichimondittou.md',
]

# 言い換えルール（順番依存：長いマッチを先に）
TRANSFORMS = [
    # 「〜にあてはまるなかまはどれか？」
    (r'にあてはまるなかまはどれか？$', 'のなかまは？'),
    (r'にあてはまる動物はどれか？$', 'にあてはまる動物は？'),
    (r'にあてはまる分類はどれか？$', 'にあてはまる分類は？'),
    (r'に最もあてはまるのはどれか？$', 'にあてはまるのはどれ？'),
    (r'にあてはまるものはどれか？$', 'にあてはまるのはどれ？'),
    (r'にあてはまるのはどれか？$', 'にあてはまるのはどれ？'),
    # 「〜として正しいものはどれか？」
    (r'として正しいものはどれか？$', 'は？'),
    (r'として最も適切なのはどれか？$', 'はなぜ？'),
    (r'として最も適切なものはどれか？$', 'はどれ？'),
    (r'基準として適切でないものはどれか？$', '基準でないのは？'),
    # 「〜はどのなかまか？」「〜はどのなかまに分類されるか？」
    (r'はどのなかまに分類されるか？$', 'のなかまは？'),
    (r'はどのなかまか？$', 'のなかまは？'),
    # 「〜は主に何で呼吸するか？」
    (r'は主に何で呼吸するか？$', 'の呼吸は？'),
    (r'は何で呼吸するか？$', 'の呼吸は？'),
    # 「〜はどの部分についているか？」
    (r'はどの部分についているか？$', 'はどの部分？'),
    # 「〜はどの3つに分かれるか？」
    (r'はどの3つに分かれるか？$', 'はどの3つ？'),
    # 「〜何に分ける基準か？」
    (r'は、動物を何に分ける基準か？$', 'は何で分ける？'),
    # 「〜は何本か？」
    (r'は何本か？$', 'は何本？'),
    # 「〜は何というか？」
    (r'は何というか？$', 'は何という？'),
    # 一般 「〜はどれか？」 → 「〜は？」
    (r'はどれか？$', 'は？'),
    # 末尾 「〜か？」 → 「〜？」
    (r'か？$', '？'),
]


def reword(q):
    for pat, repl in TRANSFORMS:
        new = re.sub(pat, repl, q)
        if new != q:
            return new
    return q


def process(path):
    with open(path) as f:
        text = f.read()
    # ヘッダ部
    head_match = re.match(r'^(#[^\n]+\n\n)', text)
    head = head_match.group(1) if head_match else ''
    rest = text[len(head):]

    # セクションごとに分割
    section_parts = re.split(r'^(## [^\n]+\n)', rest, flags=re.MULTILINE)
    # section_parts: ['', '## sec1\n', 'body1', '## sec2\n', 'body2', ...]
    new_sections = []
    seen_questions = set()  # 全体での重複検出
    removed = []
    reworded = []

    i = 1
    while i < len(section_parts):
        sec_header = section_parts[i]
        body = section_parts[i + 1] if i + 1 < len(section_parts) else ''
        i += 2

        # 各問ブロックを抽出（空行で区切る）
        blocks = re.split(r'\n\s*\n', body.strip())
        new_blocks = []
        for blk in blocks:
            lines = blk.split('\n')
            q_idx = None
            for j, ln in enumerate(lines):
                if ln.startswith('Q: '):
                    q_idx = j
                    break
            if q_idx is None:
                continue
            orig_q = lines[q_idx][3:]
            new_q = reword(orig_q)
            if new_q != orig_q:
                reworded.append((orig_q, new_q))
            # 重複チェック（言い換え後の問題文＋セクションで判定）
            key = (sec_header.strip(), new_q)
            if key in seen_questions:
                removed.append(new_q)
                continue
            seen_questions.add(key)
            lines[q_idx] = 'Q: ' + new_q
            # 「日本語: 」行は削除
            lines = [ln for ln in lines if not ln.startswith('日本語: ')]
            new_blocks.append('\n'.join(lines))
        new_sections.append(sec_header + '\n'.join(new_blocks) + '\n')

    new_text = head + '\n'.join(new_sections)
    with open(path, 'w') as f:
        f.write(new_text)
    return reworded, removed


for p in PATHS:
    print(f'\n=== {p.split("/")[-3]} ===')
    rw, rm = process(p)
    print(f'  reworded: {len(rw)}')
    for orig, new in rw[:5]:
        print(f'    "{orig}" → "{new}"')
    if len(rw) > 5:
        print(f'    ... ({len(rw) - 5} more)')
    print(f'  removed (duplicate): {len(rm)}')
    for q in rm:
        print(f'    "{q}"')
