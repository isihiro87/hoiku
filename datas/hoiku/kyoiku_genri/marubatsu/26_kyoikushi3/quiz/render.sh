#!/bin/bash
set -e
cd /workspaces/hoiku_shiken
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"
QUIZ_DIR="/workspaces/hoiku_shiken/datas/hoiku/kyoiku_genri/26_kyoikushi3/quiz"

cp "$QUIZ_DIR"/audios/*.wav "$TEMP_DIR/audio/explain/"
cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"
cp "$QUIZ_DIR/IchimonIttoData.tsx" src/IchimonIttoData.tsx

echo "=== 26_kyoikushi3 レンダリング開始 ==="
# 同梱Chromeが在る環境（devcontainer）ではそれを使い、無い環境（別PC等）では
# remotion同梱のChromeを自動利用する。これで環境ごとの手動切替が不要。
CHROME="/workspaces/hoiku_shiken/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell"
BROWSER_FLAG=""
if [ -x "$CHROME" ]; then BROWSER_FLAG="--browser-executable $CHROME"; fi

PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts IchimonIttoShorts \
  "$QUIZ_DIR/output.mp4" \
  --public-dir "$TEMP_DIR" \
  $BROWSER_FLAG \
  --props '{"subject":"kyoiku_genri","subtitle":"○×クイズ"}' \
  --disable-chrome-sandbox \
  --concurrency 4 \
  --gl swiftshader

echo "=== 完了: $QUIZ_DIR/output.mp4 ==="
rm -rf "$TEMP_DIR"
