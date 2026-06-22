---
name: q-4choice-create
description: 保育士試験・社会福祉士試験などの資格対策4択クイズ動画を作成するスキル。問題配列やichimondittou.mdからセクション分割・音声準備・FourChoiceData.tsx・render.sh・紹介文を一括生成する。
allowed-tools: Read, Write, Edit, Bash
---

# 4択クイズ動画作成スキル（資格試験対策向け）

保育士試験・社会福祉士試験などの**資格対策**で `FourChoiceShorts` を使った4択クイズ動画を作るためのワークフロー。
**中学・高校の学校教育向けではなく、資格試験の合格対策**を前提に、問題・解説とも日本語で組み立てる。

## 使用タイミング

- 保育士試験・社会福祉士試験などの資格科目の4択クイズ動画を作る時
- ユーザーから問題配列（JS/JSON形式）を渡されて、それをファイル化する時
- 既存の4択ソース（ichimondittou.md）をクリーンアップ・再分割する時
- 既に投稿済みの動画があるフォルダで一部だけ再構成する時（ロック対応）

> **問題内容のレビュー・修正基準**は `CONTENT_RULES.md`（同フォルダ）を参照。選択肢の作り方・誤答の質・問題文に答えを透けさせない等の確立済み規則をまとめてある。

---

## フォルダ構成

資格科目（保育士試験 筆記9科目など）ごとに `four_choice` フォルダで管理する。

```
datas/hoiku/[科目]/four_choice/
├── ichimondittou.md            # ソース（4択形式）
├── qa.md                       # 音声収録用（問題/答え交互の単純形式）
├── audios/                     # 音声配置先
│   ├── 06-00-voice.wav         # セクション06のQ1
│   ├── 06-01-voice.wav         # セクション06のA1
│   └── ...                     # 偶数=問題、奇数=答え/解説（セクション番号-クリップ番号）
├── 06-FourChoiceData.tsx       # セクションごとのデータ
├── 06-render.sh                # レンダリングスクリプト
├── 06-output.mp4               # 出力動画
├── 06-post_instagram.txt       # Instagram紹介文
├── 07-… 08-… …
└── update_duration.py          # 音声配置後にdurationを実音声から更新するヘルパー
```

[科目] は保育士9科目スラッグ（`hoiku_genri` / `kyoiku_genri` / `shakai_teki_yogo` / `kodomo_katei_fukushi` / `shakai_fukushi` / `hoiku_shinrigaku` / `kodomo_no_hoken` / `kodomo_no_shokuto_eiyo` / `hoiku_jissen`）。社会福祉士など他資格を足す場合は `SubjectTheme`（`src/components/rhythm/IchimonIttoBoard.tsx`）に色を追加する。

**音声ファイル名のルール**: `NN-MM-voice.wav`（NN=セクション番号、MM=クリップ通し番号 00始まり、Q/A交互）。`gen_4choice.py` の CONFIGS で `'topic': 'voice'` を指定する。

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
| `〜を定めた法律は何か？` | `〜を定めた法律は？` |
| `〜は何条か？` | `〜は何条？` |
| `〜が制定されたのは何年か？` | `〜の制定は何年？` |
| `〜として正しいものはどれか？` | `〜は？` |
| `〜にあてはまるのはどれか？` | `〜にあてはまるのはどれ？` |
| `〜理由として最も適切なのはどれか？` | `〜理由は？` |
| `〜理由はなぜ？` | `〜理由は？` |
| `〜を所管する省庁はどこか？` | `〜の所管は？` |

**語尾原則**: 「○○は？」「何という？」「どれ？」「何条？」「何年？」 のいずれかで終える。「か」「なぜ」は使わない。

### 問題文の明瞭さ（不明瞭な短縮を避ける）

短縮しすぎて意味が壊れたら本末転倒。例えば「保育所を定める法律は？」を「定める法律は？」と省略すると主語が消えて意味不明になる。**主語と目的語は最低限残す**:

| ❌ NG（不明瞭） | ✅ OK |
|------|------|
| `根拠となるのは？`（主語なし） | `保育所の根拠となる法律は？` |
| `〜に該当しないものは？`（対象不明） | `児童福祉施設でないものは？` |
| `〜にあてはまる制度は？` | `この給付にあたる制度は？` |
| `〜を担う機関を何という？`（説明文長い） | `市町村に置かれる相談機関は？` |

### 重複ルール

- 全く同じ問題文（選択肢の順序のみ違うバリアント含む）は**1つだけ残す**
- 言い換え後に重複が判明したら追加で削除（rewording 前後で確認）
- セクション内・セクション跨ぎ問わず重複を排除
- ほぼ同義の問題（例: 「〜の特徴は？」と「〜の大きな特徴は？」）も統合候補

### 誤答（distractor）の質ルール

**問われている分野（法律・制度・人物・年号など）と別カテゴリの語を誤答に混ぜない**。誤答は同じドメイン内の「もっともらしい誤り」にする:

| ❌ NG（ドメイン混在） | ✅ OK |
|------|------|
| 法律を問うのに誤答が `厚生労働省`/`保育士`（法律でない） | 同種の法律名（`児童福祉法`/`母子保健法`/`教育基本法` 等） |
| 年号を問うのに誤答が `第11条`/`30条`（条文番号） | 近接する別の年号（`1947年`/`1951年`/`1989年` 等） |
| 制度名を問うのに誤答が人名（カテゴリ違い） | 紛らわしい別制度名でそろえる |
| 所管省庁を問うのに誤答が `児童相談所`（機関であり省庁でない） | `内閣府`/`文部科学省`/`厚生労働省` 等の省庁 |
| 人物を問うのに誤答が著作名 | 同時代・同分野の別人物名でそろえる |

「不正解だが惜しい」誤答ほど良問になる。**同カテゴリで受験者が混同しやすい用語**を選ぶ。

### 選択肢のかっこ書き禁止（原則）

**選択肢（A/B/C/D）の中にかっこ書き（補足・言い換え）を入れない**。読みやすさを損ない、表示と音声がずれる原因になる（音声＝qa.md は補足なしで読み上げるため、tsx 側だけかっこが残ると不一致になる）。補足が必要なら **解説（`解説:` / `explanation`）側に書く**。

| ❌ NG（選択肢にかっこ） | ✅ OK |
|------|------|
| `4週(28日)未満` | `4週未満` |
| `IQ(知能指数)` | `IQ` |
| `室温・遮光(15〜30℃)` | `室温・遮光` |
| `アルコール(消毒用エタノール)` | `アルコール` |
| `脱臼(肩)` | `脱臼` |

- かっこは半角 `()`・全角 `（）` の両方が対象。
- 問題文（`Q:`）や解説（`解説:`）のかっこは可（必要な補足はそちら側に寄せる）。
- `gen_4choice.py` は選択肢（および qa.md の答え）からかっこ書きを自動除去する（下記「重要な実装ポイント」参照）。手書きで ichimondittou.md を作る時もこの原則を守る。

### セクション分割ルール

- **1セクション 3〜4問**（2問は少ない、5問以上は多い）
- 問題数が合わない場合は隣接トピックを統合 or 再分割
- セクション名は具体的に（例: 「児童福祉法の基礎」「世界人権宣言と国際条約」）

### セクション内の話題分散（連続同類を避ける）

1つの動画（セクション）内で**同じ形式・同じ論点の問題が連続しないようにする**。例えば年号当てが3問連続するセクションは単調。各セクションは問い方（年号・条文・制度名・人物など）が混在するように設計する:

| ❌ NG（同カテゴリ連続） | ✅ OK（論点分散） |
|------|------|
| Section 06: 年号当て×3問 | Section 06: 採択年, 条文数, 条約名, 子どもの権利条約の年 (論点混在) |

複数セクションを設計する時は、似た問題（基本問題、年号問題、人物問題、制度判別問題）が**異なるセクションに分散**されるよう配置する。

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
- `XX-render.sh`（`--props '{"subject":"kyoiku_genri"}'` 等、科目スラッグを指定）
- `XX-post_instagram.txt`
- `update_duration.py`

### ステップ3: 音声をユーザーが収録

- VOICEPEAK等で `qa.md` を読み上げ
- `audios/` に `XX-voice.wav` 形式で保存（Q/A交互、00から通し番号）

### ステップ4: durationを更新

```bash
python3 [four_choiceフォルダ]/update_duration.py
```

各 `XX-FourChoiceData.tsx` の `questionDuration` / `answerDuration` を実音声から計算して書き換える。

### ステップ5: レンダリング

**プロジェクトルートから実行する**（`render.sh` 内の `cp public/audio/bgm.mp3` が相対パスのため）:

```bash
cd /workspaces/hoiku_shiken
for i in 01 02 03 04 05 06 07; do
  bash datas/hoiku/[科目]/four_choice/${i}-render.sh
done
```

長時間タスクは `run_in_background: true` で投げ、`Monitor` または ScheduleWakeup で完了確認する。

---

## 既存セクションのロック（投稿済み動画の保護）

**「このセクションは投稿済みなので触らないで」と言われたケースの正しい手順**:

```bash
# 1. ロック対象をバックアップ
mkdir -p /tmp/locked_NN
cp [four_choiceフォルダ]/NN-* /tmp/locked_NN/

# 2. ichimondittou.md を編集（ロック対象セクションの問題は変えない）

# 3. gen_4choice.py を実行
python3 .claude/skills/q-4choice-create/scripts/gen_4choice.py [topic_key]

# 4. ロック対象が変わっていないか確認
diff /tmp/locked_NN/NN-FourChoiceData.tsx [four_choiceフォルダ]/NN-FourChoiceData.tsx
diff /tmp/locked_NN/NN-render.sh [four_choiceフォルダ]/NN-render.sh

# 5. 差分があればバックアップから復元
cp /tmp/locked_NN/NN-* [four_choiceフォルダ]/
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

資格科目では `japanese`（英単語の和訳欄）が不要なため省略する。interface と board を以下の通り改修済み:

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

### 選択肢のかっこ書き自動除去（実施済み）

`gen_4choice.py` に `strip_paren()` を実装。`gen_tsx` の `choices` と `gen_qa_md` の答え（正解の選択肢）から半角 `()`・全角 `（）` のかっこ書きを除去する。これにより「選択肢のかっこ書き禁止（原則）」が再生成のたびに自動で担保される。問題文（`question`）・解説（`explanation`）のかっこは除去対象外。

### 音声ファイル命名

`XX-voice.wav`（Q/A交互、00からの通し番号、フラット構造）

### qa.md（音声収録用ファイル）

**他の科目フォルダのqa.mdと同じシンプル形式**:
- コメント・見出しなし
- 1行目=問題1、2行目=答え1、3行目=問題2、…
- 鍵カッコ「」は除去（VOICEPEAK読み上げで余分な間が出るため）
- 答え行は4択の正解（`answer:` で示された選択肢の中身。**解説ではない**）

### subject prop（科目色）

`render.sh` の `--props` で科目色を切り替え。保育士9科目のスラッグを指定する:
- `'{"subject":"hoiku_genri"}'` → 保育原理（紫）
- `'{"subject":"kyoiku_genri"}'` → 教育原理（藍）
- `'{"subject":"shakai_teki_yogo"}'` → 社会的養護（ティール）
- `'{"subject":"kodomo_katei_fukushi"}'` → 子ども家庭福祉（オレンジ）
- `'{"subject":"shakai_fukushi"}'` → 社会福祉（赤）
- `'{"subject":"hoiku_shinrigaku"}'` → 保育の心理学（濃ピンク）
- `'{"subject":"kodomo_no_hoken"}'` → 子どもの保健（緑）
- `'{"subject":"kodomo_no_shokuto_eiyo"}'` → 子どもの食と栄養（黄緑）
- `'{"subject":"hoiku_jissen"}'` → 保育実習理論（水色青）

`themeColors` / `SubjectTheme` 定義は `src/components/rhythm/IchimonIttoBoard.tsx`。社会福祉士など他資格を追加する場合はここに新スラッグと色を足す。

### titleData / subtitleData

- `titleData = '[資格名]　[科目]'`（例: `'保育士　教育原理'`）
- `subtitleData = '4択クイズ'`

> **登場キャラの性別は `titleData` で自動判定**（`src/Character.tsx` の `genderForTitle`）。`社会福祉士` を含むと**男性**（`assets/char_man`）、それ以外（保育士など）は**女性**（`assets/char_woman`）。資格名の表記を変える際は注意。

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

- 教育原理4択（本スキルで作成済みの実例）: `datas/hoiku/kyoiku_genri/four_choice/`
- 子どもの保健4択: `datas/hoiku/kodomo_hoken/four_choice/`
- 子どもの食と栄養4択: `datas/hoiku/shoku_eiyo/four_choice/`
- ○×一問一答（同じ音声命名・qa.md形式の参考）: `datas/hoiku/[科目]/[NN_トピック]/quiz/`
