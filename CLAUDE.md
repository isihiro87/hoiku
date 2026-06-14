# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**保育士試験用の○×一問一答ショート動画**を生成するRemotionプロジェクト。縦型動画（1080x1920、Instagram Reels向け）を出力する。

`insta-short1`（中学生向け教材プロジェクト）の `IchimonIttoShorts` エンジンを流用して、保育士試験専用に切り出したもの。データは `datas/hoiku/` 以下に筆記試験9科目で整理する。中学生向けや他教科のデータ・スラッシュコマンドは含まない。

> セットアップと運用の詳細は `HOIKU_SETUP_GUIDE.md` を参照。

## 技術スタック

- 開発環境: devcontainer（`/workspaces/hoiku_shiken` にマウントされる前提）
- Node.js v24.x / TypeScript 5.x / npm
- Remotion 4.0.x + React 19 + Tailwind CSS 4.0

> **初回セットアップ**: `node_modules` は同梱していないため、devcontainer 起動後に `npm install` を実行する。レンダリング用の `chrome-headless-shell`（Linux版）は同梱済み。

## Commands

```bash
# 開発サーバー（Remotion Studio）起動
npm run dev

# 動画をレンダリング（通常は各quizの render.sh 経由）
npx remotion render src/index.ts IchimonIttoShorts out/video.mp4

# Lint（ESLint + TypeScript型チェック）
npm run lint
```

## スラッシュコマンド

| コマンド | 説明 |
|---------|------|
| `/q-make-quiz [quizフォルダ]` | クイズ動画作成ワークフロー（全体ガイド） |
| `/q-review [quizフォルダ]` | qas.mdの問題チェック・レビュー |
| `/q-prepare [quizフォルダ]` | qa.md生成、音声ファイルリスト作成 |
| `/q-render [quizフォルダ]` | IchimonIttoData.tsx生成、動画レンダリング、紹介文生成 |
| `/a-edit [操作]` | 音声ファイルの編集（カット/結合/分割） |
| `/add-feature [機能名]` | 新機能を追加（ステアリングファイル作成→実装→検証） |

### スキル

| スキル | 説明 |
|-------|------|
| `steering` | 作業計画・タスクリスト管理・進捗追跡 |
| `create-quiz-content` | 一問一答クイズコンテンツ作成 |
| `q-4choice-create` | 4択クイズ動画を作成（FourChoiceエンジン） |

## 保育士データの配置

筆記試験9科目を教科スラッグで区切る。

```
datas/hoiku/[科目]/[NN_トピック]/quiz/qas.md
```

科目スラッグ（`IchimonIttoBoard.tsx` の `SubjectTheme` / `themeColors` と対応・色分け）:

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

例: `datas/hoiku/kyoiku_genri/01_kyoiku_kihonho/quiz/`

### qas.md の形式（問題／答え／補足を空行区切り）

```
教育基本法が制定されたのは何年？
1947年（昭和22年）
日本国憲法の理念に基づき制定された

○か×か？　保育所は学校教育法に基づく施設である。
×
保育所は児童福祉法に基づく児童福祉施設である
```

## 一括ビルド（build_videos.py）

`datas/hoiku/build_videos.py` が各 quiz フォルダの `qas.md` + `audios/`（`N-voicepeak.wav` 連番）から
`IchimonIttoData.tsx`（durationはffprobe実測）と `render.sh`（subjectはパスから自動判定・subtitleは「○×クイズ」）を生成する。

```bash
python3 datas/hoiku/build_videos.py                # datas/hoiku配下の全quizを処理
python3 datas/hoiku/build_videos.py <quizフォルダ>  # 個別処理
```

音声が揃っていないフォルダは `render.sh` のみ生成し、tsx はスキップする。

## Architecture

### 動画生成フロー

```
Root.tsx (Composition登録)
  └─ IchimonIttoShortsVideo (メインコンポーネント)
       ├─ Series で順序制御
       │   ├─ QuestionPhase (質問表示 + 音声 + カウントダウン)
       │   └─ AnswerPhase (回答表示 + 音声 + 終了カード)
       └─ BGM (ループ再生)
```

### 主要コンポーネント

| ファイル | 役割 |
|---------|------|
| `src/Root.tsx` | Composition登録 |
| `src/IchimonIttoShorts.tsx` | 一問一答動画のメインロジック |
| `src/IchimonIttoData.tsx` | 問題データ（render.sh が各quizの tsx で上書き） |
| `src/components/rhythm/IchimonIttoBoard.tsx` | UI表示（科目別テーマカラー、レイアウト） |

> `src/` には流用元エンジンの他コンポーネント（Math/English/Trivia等）もそのまま含まれるが、保育士動画では `IchimonIttoShorts` のみ使用する。

### データ型

```typescript
interface IchimonIttoScene {
  id: string;
  question: string;           // 問題文
  answer: string;             // 答え（○ / ×）
  description?: string;       // 補足説明
  questionAudio: string;      // 質問音声パス（public/からの相対）
  questionDuration: number;   // 質問再生時間（フレーム、30fps）
  answerAudio: string;        // 回答音声パス
  answerDuration: number;     // 回答再生時間（フレーム）
}

// 教科テーマ（保育士9科目を含む）
type SubjectTheme =
  | 'history' | 'science' | 'english' | 'math'
  | 'hoiku_genri' | 'kyoiku_genri' | 'shakai_teki_yogo'
  | 'kodomo_katei_fukushi' | 'shakai_fukushi' | 'hoiku_shinrigaku'
  | 'kodomo_no_hoken' | 'kodomo_no_shokuto_eiyo' | 'hoiku_jissen';
```

### タイミング定数（IchimonIttoShorts.tsx内）

- `COUNTDOWN_DURATION`: 45フレーム（1.5秒）- 質問後の考える時間
- `ANSWER_BUFFER`: 45フレーム（1.5秒）- 回答後の間
- `END_CARD_DURATION`: 90フレーム（3秒）- 終了カード表示

## ディレクトリ構造

- `src/` - Remotionコンポーネント（流用エンジン一式）
- `public/audio/` - BGM・音声、`public/images/` - 画像
- `datas/hoiku/` - 保育士教材データ（科目/トピック）＋ `build_videos.py`
- `scripts/audio_edit.py` - 音声編集（`/a-edit` が使用）
- `.claude/` - Claude Code設定（コマンド、スキル）
- `chrome-headless-shell/` - レンダリング用Chrome（Linux版・devcontainer向け）

## 開発フロー

1. `datas/hoiku/[科目]/[NN_トピック]/quiz/qas.md` を作成
2. `/q-review` で問題チェック（任意）
3. `/q-prepare` で `qa.md` と音声ファイルリストを生成 → 音声を `audios/` に配置
4. `/q-render`（または `python3 datas/hoiku/build_videos.py`）でレンダリング
