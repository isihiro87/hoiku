#!/bin/bash
set -e
cd /workspaces/hoiku_shiken
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"
BASE="/workspaces/hoiku_shiken/datas/hoiku/kodomo_hoken/four_choice"

cp "$BASE/audios/36-00-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/36-01-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/36-02-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/36-03-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/36-04-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/36-05-voice.wav" "$TEMP_DIR/audio/explain/"
cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"
[ -f public/audio/finish.wav ] && cp public/audio/finish.wav "$TEMP_DIR/audio/explain/" || true
cp "$BASE/36-FourChoiceData.tsx" src/FourChoiceData.tsx

echo "=== 36 子どもの心身の健康状態とその把握 (4択) レンダリング開始 ==="
# 同梱Chromeが在る環境（devcontainer）ではそれを使い、無い環境（別PC等）では
# remotion同梱のChromeを自動利用する。これで環境ごとの手動切替が不要。
CHROME="/workspaces/hoiku_shiken/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell"
BROWSER_FLAG=""
if [ -x "$CHROME" ]; then BROWSER_FLAG="--browser-executable $CHROME"; fi

PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts FourChoiceShorts \
  "$BASE/36-output.mp4" \
  --public-dir "$TEMP_DIR" \
  $BROWSER_FLAG \
  --props '{"subject":"kodomo_no_hoken"}' \
  --disable-chrome-sandbox \
  --concurrency 4 \
  --gl swiftshader

echo "=== 完了: $BASE/36-output.mp4 ==="
rm -rf "$TEMP_DIR"
