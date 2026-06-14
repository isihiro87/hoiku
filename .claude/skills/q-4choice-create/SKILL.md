---
name: q-4choice-create
description: 英語以外の教科（理科・社会など）の4択クイズ動画を作成するスキル。問題配列やichimondittou.mdからセクション分割・音声準備・FourChoiceData.tsx・render.sh・紹介文を一括生成する。
allowed-tools: Read, Write, Edit, Bash
---

# 4択クイズ動画作成スキル（非英語教科向け）

英語以外の教科で `FourChoiceShorts` を使った4択クイズ動画を作るためのワークフロー。
英語grammarフォルダ構成を参考にしつつ、問題・解説とも日本語の前提で組み立てる。

## 使用タイミング

- 理科・社会・国語などの4択クイズ動画を作る時
- ユーザーから問題配列（JS/JSON形式）を渡されて、それをファイル化する時
- 既存の4択ソース（ichimondittou.md）をクリーンアップ・再分割する時
- 既に投稿済みの動画があるフォルダで一部だけ再構成する時（ロック対応）

英語文法4択は `/g-prepare`・`/g-render` を使うこと（このスキルではない）。

---

## フォルダ構成

```
datas/[教科]/[学年]/[章]/[トピック]/quiz/4choice/
├── ichimondittou.md            # ソース（4択形式）
├── qa.md                       # 音声収録用（問題/答え交互の単純形式）
├── audios/                     # 音声配置先
│   ├── 00-voice.wav            # Q1（推奨：voice 固定。topic_label は使わない）
│   ├── 01-voice.wav            # A1
│   └── ...                     # 偶数=問題、奇数=答え/解説
├── 01-FourChoiceData.tsx       # セクションごとのデータ
├── 01-render.sh                # レンダリングスクリプト
├── 01-output.mp4               # 出力動画
├── 01-post_youtube.txt         # YouTube紹介文
├── 01-post_instagram.txt       # Instagram紹介文
├── 02-… 03-… …
└── update_duration.py          # 音声配置後にdurationを実音声から更新するヘルパー
```

**音声ファイル名のルール**: `XX-voice.wav` を推奨（`XX-[topic].wav` でも可だが、ユーザーは `voice` 表記を好む）。`gen_4choice.py` の CONFIGS で `'topic': 'voice'` を指定する。

---

## ichimondittou.md の形式

```
# [タイトル] 4択クイズ

## [セクション名]
Q: [問題文]
A: [選択肢A]
B: [選択肢B]
C: [選択肢C]
D: [選択肢D]
答え: [A/B/C/D]
解説: [解説文]

Q: ...
```

- `日本語:` 行は**書かない**（英語以外では不要。`japanese` フィールドは optional 化済み）
- 問題ブロック間は空行1つ

### 問題文のスタイルルール（リズム重視）

視聴者がリズムよく見られるよう、語尾と前置きを徹底的に短くする:

| ❌ NG | ✅ OK |
|------|------|
| `次のうち、〜はどれか？` | `〜は？` または `〜はどれ？` |
| `〜とは何というか？` | `〜とは何という？` |
| `〜はどのなかまか？` | `〜のなかまは？` |
| `〜は何本か？` | `〜は何本？` |
| `〜は何で呼吸するか？` | `〜の呼吸は？` |
| `〜として正しいものはどれか？` | `〜は？` |
| `〜にあてはまるのはどれか？` | `〜にあてはまるのはどれ？` |
| `〜理由として最も適切なのはどれか？` | `〜理由は？` |
| `〜理由はなぜ？` | `〜理由は？` |
| `〜は主にどのなかま？` | `〜のなかまは？` |

**語尾原則**: 「○○は？」「何という？」「どれ？」「何本？」「何で分ける？」 のいずれかで終える。「か」「なぜ」は使わない。

### 問題文の明瞭さ（不明瞭な短縮を避ける）

短縮しすぎて意味が壊れたら本末転倒。例えば「動物を何に分ける基準か？」を「何で分ける？」と省略すると主語が消えて意味不明になる。**主語と目的語は最低限残す**:

| ❌ NG（不明瞭） | ✅ OK |
|------|------|
| `「背骨があるかどうか」は何で分ける？` | `動物を背骨の有無で分けると？` |
| `〜分類するときに使う基準でないのは？` | `〜の分類で使わない基準は？` |
| `〜にあてはまる分類は？` | `〜のなかまは？` |
| `〜の出入り口を何という？`（説明文長い） | `〜にある出入り口を何という？` |

### 重複ルール

- 全く同じ問題文（選択肢の順序のみ違うバリアント含む）は**1つだけ残す**
- 言い換え後に重複が判明したら追加で削除（rewording 前後で確認）
- セクション内・セクション跨ぎ問わず重複を排除
- ほぼ同義の問題（例: 「〜の特徴は？」と「〜の大きな特徴は？」）も統合候補

### 誤答（distractor）の質ルール

**動物の問題に植物用語を混ぜない**。逆も同様。誤答は同じドメイン内の用語にする:

| ❌ NG（ドメイン混在） | ✅ OK |
|------|------|
| 動物分類問題に `胚珠`/`胞子`/`子房`/`花粉` | 動物の体の部位（`鼻孔`/`口`/`えら`等） |
| 動物の体構造に `頭・根・葉` | 動物の体の組合せ（`頭・腹・足` 等） |
| 動物分類の選択肢に `合弁花類`/`単子葉類` | 動物分類軸（`卵生と胎生`/`恒温と変温` 等） |
| 呼吸法に `外骨格`（呼吸じゃない） | `肺だけ`/`気門だけ`/`皮ふだけ` 等 |
| 鳥類の体表に `貝がら`（軟体動物） | `毛`/`うろこ`/`湿った皮ふ` |

「不正解だが惜しい」誤答ほど良問になる。**他カテゴリの紛らわしい用語**を選ぶ。

### セクション分割ルール

- **1セクション 3〜4問**（2問は少ない、5問以上は多い）
- 問題数が合わない場合は隣接トピックを統合 or 再分割
- セクション名は具体的に（例: 「両生類のからだ」）

### セクション内の話題分散（連続同類を避ける）

1つの動画（セクション）内で**同じカテゴリの問題が連続しないようにする**。例えば「ホニュウ類」が3問連続するセクションは退屈。各セクションは異なる動物分類のなかま分けが混在するように設計する:

| ❌ NG（同カテゴリ連続） | ✅ OK（カテゴリ分散） |
|------|------|
| Section 06: ホニュウ類×3問 | Section 06: 魚類, 両生類, 鳥類, ホニュウ類 (4分類混在) |

複数セクションを設計する時は、似た問題（基本問題、例で問う問題、特徴判別問題）が**異なるセクションに分散**されるよう配置する。

---

## ワークフロー

### ステップ1: ソース ichimondittou.md を作成

ユーザーから問題配列（JS/JSON形式）を受け取った場合:
1. セクション分けを設計（3〜4問/セクション、カテゴリ分散）
2. 各問の `correctIndex` から `答え: A/B/C/D` を導出
3. 「問題文のスタイルルール」を適用
4. 「誤答の質ルール」を適用
5. 重複を削除
6. ichimondittou.md に保存

### ステップ2: ファイル一式を生成

`scripts/gen_4choice.py` を実行（CONFIGS を編集してから）:

```bash
python3 .claude/skills/q-4choice-create/scripts/gen_4choice.py [topic_key]
```

生成されるもの:
- `qa.md`（音声収録用、問題/答え交互、シンプル形式）
- `XX-FourChoiceData.tsx`（durationはプレースホルダ60、`japanese` なし）
- `XX-render.sh`（`--props '{"subject":"science"}'` 等）
- `XX-post_youtube.txt` / `XX-post_instagram.txt`
- `update_duration.py`

### ステップ3: 音声をユーザーが収録

- VOICEPEAK等で `qa.md` を読み上げ
- `audios/` に `XX-voice.wav` 形式で保存（Q/A交互、00から通し番号）

### ステップ4: durationを更新

```bash
python3 [4choice_folder]/update_duration.py
```

各 `XX-FourChoiceData.tsx` の `questionDuration` / `answerDuration` を実音声から計算して書き換える。

### ステップ5: レンダリング

**プロジェクトルートから実行する**（`render.sh` 内の `cp public/audio/bgm.mp3` が相対パスのため）:

```bash
cd /workspaces/hoiku_shiken
for i in 01 02 03 04 05 06 07; do
  bash datas/.../4choice/${i}-render.sh
done
```

長時間タスクは `run_in_background: true` で投げ、`Monitor` または ScheduleWakeup で完了確認する。

---

## 既存セクションのロック（投稿済み動画の保護）

**「このセクションは投稿済みなので触らないで」と言われたケースの正しい手順**:

```bash
# 1. ロック対象をバックアップ
mkdir -p /tmp/locked_NN
cp [4choice_folder]/NN-* /tmp/locked_NN/

# 2. ichimondittou.md を編集（ロック対象セクションの問題は変えない）

# 3. gen_4choice.py を実行
python3 .claude/skills/q-4choice-create/scripts/gen_4choice.py [topic_key]

# 4. ロック対象が変わっていないか確認
diff /tmp/locked_NN/NN-FourChoiceData.tsx [4choice_folder]/NN-FourChoiceData.tsx
diff /tmp/locked_NN/NN-render.sh [4choice_folder]/NN-render.sh

# 5. 差分があればバックアップから復元
cp /tmp/locked_NN/NN-* [4choice_folder]/
```

**重要**: `gen_4choice.py` は連番tsx/sh/txtを全削除して再生成する。.mp4 と .py は保護対象。スクリプトの該当箇所:

```python
if re.match(r'^\d{2}-', f) and (f.endswith('.tsx') or f.endswith('.sh') or f.endswith('.txt')):
    os.remove(f"{cfg['base']}/{f}")
```

ロック対象のセクションは:
- `NN-output.mp4` は触らない（既に投稿済み）
- `NN-FourChoiceData.tsx` の duration が再生成でプレースホルダ60に戻ることに注意 → 復元必須
- 質問文・選択肢が変わっていなければ tsx の duration 以外は同じ内容で再生成される

---

## 質問の修正と音声の再録判断

ichimondittou.md を後から修正したとき、音声の再録が必要なケース:

| 変更内容 | 音声再録必要？ |
|---|---|
| 問題文（Q）を変更 | **質問音声のみ** 再録 |
| 正解の選択肢の文言変更 | **解説音声**（answerAudio）再録 |
| 誤答（distractor）の文言のみ変更 | 不要（音声は変わらない） |
| 質問削除 | 該当audio番号を削除→以降をシフト |
| セクション間で並び替え | 音声インデックスが変わる→全体再録 or 既存音声をリネーム |

正解は `answer:` で示された選択肢の中身。誤答だけ変更している限り、音声は再利用可能。

---

## 重要な実装ポイント

### `japanese` フィールドの optional 化（実施済み）

理科などで `japanese` を省略するため、interface と board を以下の通り改修:

`src/FourChoiceData.tsx` の interface:
```typescript
japanese?: string;
```

`src/components/rhythm/FourChoiceBoard.tsx` の rendering:
```tsx
{japanese && (
    <div style={{ fontSize: '36px', ... }}>
        {japanese}
    </div>
)}
```

各セクションの `XX-FourChoiceData.tsx` 内の interface も `japanese?: string` に揃える必要あり（`gen_4choice.py` で生成済み）。

### 音声ファイル命名

`XX-voice.wav`（Q/A交互、00からの通し番号、フラット構造）

### qa.md（音声収録用ファイル）

**他の理科/社会フォルダのqa.mdと同じシンプル形式**:
- コメント・見出しなし
- 1行目=問題1、2行目=答え1、3行目=問題2、…
- 鍵カッコ「」は除去（VOICEPEAK読み上げで余分な間が出るため）
- 答え行は4択の正解（`answer:` で示された選択肢の中身。**解説ではない**）

### subject prop（教科色）

`render.sh` の `--props` で教科色を切り替え:
- `'{"subject":"science"}'` → 薄緑+緑系
- `'{"subject":"history"}'` → クリーム+オレンジ
- `'{"subject":"english"}'` → 薄青+青
- `'{"subject":"math"}'` → 薄紫+紫

`themeColors` 定義は `src/components/rhythm/IchimonIttoBoard.tsx`。

### titleData / subtitleData

- `titleData = '中[学年]　[教科]'`（例: `'中1　理科'`）
- `subtitleData = '[ジャンル]4択'`（例: `'生物4択'`）

### レンダリングの実行ディレクトリ

`render.sh` 内の `cp public/audio/bgm.mp3` は相対パス。**プロジェクトルートから bash を起動する**:

```bash
cd /workspaces/hoiku_shiken && bash datas/.../NN-render.sh
```

---

## scripts/

- `gen_4choice.py`: ichimondittou.md からファイル一式を生成（auto-detect セクション、.mp4保護）
- `reword_questions.py`: 既存ichimondittou.md に「次のうち、」削除＋語尾統一＋重複削除＋日本語行削除を一括適用
- `resplit_sections.py`: セクションを設計プランに沿って再分割（3〜4問に整え、トピック分散）

スクリプトは編集してから使う前提。CONFIGS／プランを対象フォルダに合わせて書き換える。

---

## 既存実装の参照

- 英語grammar（参考元）: `datas/english/grade1/unit_01/quiz/grammar/`
- 理科一問一答（音声命名・qa.md形式の参考元）: `datas/science/grade1/1-3/1vertebrate/quiz/`
- 本スキルで作成した例:
  - `datas/science/grade1/1-3/1vertebrate/quiz/4choice/`（7セクション、Section 01投稿済みでロック）
  - `datas/science/grade1/1-3/2invertebrate/quiz/4choice/`（7セクション、未着手）
