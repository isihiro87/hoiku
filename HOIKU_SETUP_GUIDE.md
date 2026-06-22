# 保育士試験用 一問一答動画の追加ガイド

中学生向け一問一答動画（`IchimonIttoShorts`）と同じエンジンを流用して、保育士試験用の一問一答動画を作成するための指示書。

## 方針

中学生向けと**同じ一問一答エンジン（`IchimonIttoShorts`）を流用**し、`datas/` 直下に保育士カテゴリを新設する。別プロジェクトは作らない（node_modules・コンポーネント・音声生成スクリプトの二重管理を避けるため）。

既存コンテンツ（中学生向け）には一切触れない。変更は `datas/hoiku/` 以下の追加と、テーマカラー1行追記のみ。

---

## 1. データ配置場所（新規カテゴリ）

既存の `datas/history` 等と横並びで `datas/hoiku/` を新設する。保育士は学年制ではないので「教科＝筆記試験9科目」で区切る。

```
datas/hoiku/[科目]/[トピック]/quiz/qas.md
```

科目フォルダ名（推奨スラッグ）:

```
hoiku_genri            (保育原理)
kyoiku_genri           (教育原理)
shakai_teki_yogo       (社会的養護)
kodomo_katei_fukushi   (子ども家庭福祉)
shakai_fukushi         (社会福祉)
hoiku_shinrigaku       (保育の心理学)
kodomo_no_hoken        (子どもの保健)
kodomo_no_shokuto_eiyo (子どもの食と栄養)
hoiku_jissen           (保育実習理論)
```

例: `datas/hoiku/hoiku_genri/01_jido_fukushi_ho/quiz/`

---

## 2. 作成ワークフロー（既存スラッシュコマンドをそのまま使用）

中学生クイズと完全に同じ手順:

```bash
# (任意) 問題レビュー
/q-review datas/hoiku/hoiku_genri/01_jido_fukushi_ho/quiz

# 1. qa.md生成 + 必要な音声ファイル一覧を出力
/q-prepare datas/hoiku/hoiku_genri/01_jido_fukushi_ho/quiz
#   → audios/ に音声ファイルを配置

# 2. IchimonIttoData.tsx生成 → レンダリング → 紹介文生成
/q-render datas/hoiku/hoiku_genri/01_jido_fukushi_ho/quiz
```

### qas.md の形式（既存どおり：問題／答え／補足を空行区切り）

```
児童福祉法が制定されたのは何年？
1947年（昭和22年）
日本国憲法の理念に基づき制定された

保育所の根拠法は？
児童福祉法
第39条に保育所の定義が規定されている
```

---

## 3. 必要なコード変更（1か所だけ・初回のみ）

保育士専用テーマカラーを追加する。`src/components/rhythm/IchimonIttoBoard.tsx`:

```ts
// 5行目: SubjectTheme型に 'hoiku' を追加
export type SubjectTheme = 'history' | 'science' | 'english' | 'math' | 'hoiku';

// themeColors（22〜27行目のオブジェクト）内に1行追加
hoiku: { bg: '#F3E5F5', accent: '#9C27B0', text: '#333' }, // 保育士: 紫系
```

→ そのうえで **`/q-render` が `subject:'hoiku'` を渡すように**確認する。`datas/hoiku/...` のパスから subject を判定している箇所が `/q-render` コマンド側にあるはずなので、そこに `hoiku` のマッピングを追加する。無い場合は生成された `IchimonIttoData.tsx` 利用箇所 / `Root.tsx` の `subject` を `'hoiku'` にする。

> **テーマ追加が面倒なら**、暫定で既存テーマ（例 `science`＝緑）を流用してもよい。その場合コード変更ゼロで `/q-prepare`→`/q-render` だけで動く。

---

## 4. タイトル表示

動画上部のタイトルは各 `quiz/IchimonIttoData.tsx` の `titleData`（例 `'保育士　保育原理'`）で決まる。`/q-render` 生成時にこの教科名を入れる。

---

## 5. 注意（任意の整備）

- `CLAUDE.md` の Project Overview が「中学生向け」になっているので、保育士も扱う旨を1行追記しておくと混乱しない。
- 既存の中学生コンテンツには一切触れない（`datas/hoiku/` 以下と `SubjectTheme` 追記のみ）。

---

## 別PCで作業する（環境の引き継ぎ）

git 経由で同期する。生成済み音声(.wav)・データ・ソースは git に入っているので、基本は以下だけ。

```bash
git clone https://github.com/isihiro87/hoiku.git
# devcontainer で開く → 起動後に
npm install
```

注意点:

- **`chrome-headless-shell/`（約251MB）は gitignore 済みで転送されない。** ただし手動コピー不要。
  - `npm run dev`（Studio）と `npx remotion render` は remotion 同梱の Chrome を自動DLして動く（`remotion.config.ts` がフォールバック）。
  - `render.sh` / `build_videos.py` / `gen_4choice.py` も「同梱Chromeが在れば使い、無ければ自動DLを使う」よう条件分岐済み。
  - もし devcontainer 同梱の高速Chromeを別PCにも置きたい場合のみ、元PCの `chrome-headless-shell/` をそのままコピーする。
- **新規の音声生成には Voicepeak（ホストアプリ）が別PC側にも必要**。`.vpp` はプロジェクト、生成済み `.wav` のみ git 同期される。
- 作業後は `git add -A && git commit && git push` で元PCに戻す。

## 進め方の想定

1. まず1セット（例: 保育原理の児童福祉法）を `qas.md` から作って動作確認。
2. 問題なければ他科目に横展開。

### 初回の方針を1つ選んでおく

- **テーマ追加あり版**: 保育士専用の紫テーマを追加（手順3を実施）。見た目を他教科と区別できる。
- **既存テーマ流用版（コード変更ゼロ）**: `subject` に `science` 等を指定し、`/q-prepare`→`/q-render` だけで進める。
