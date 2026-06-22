#!/bin/bash
set -e
cd /workspaces/hoiku_shiken
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"
BASE="/workspaces/hoiku_shiken/datas/hoiku/kyoiku_genri/four_choice"

cp "$BASE/audios/25-00-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/25-01-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/25-02-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/25-03-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/25-04-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/25-05-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/25-06-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/25-07-voice.wav" "$TEMP_DIR/audio/explain/"
cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"
[ -f public/audio/finish.wav ] && cp public/audio/finish.wav "$TEMP_DIR/audio/explain/" || true
cp "$BASE/25-FourChoiceData.tsx" src/FourChoiceData.tsx

echo "=== 25 生涯学習の理論 (4択) レンダリング開始 ==="
# 同梱Chromeが在る環境（devcontainer）ではそれを使い、無い環境（別PC等）では
# remotion同梱のChromeを自動利用する。これで環境ごとの手動切替が不要。
CHROME="/workspaces/hoiku_shiken/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell"
BROWSER_FLAG=""
if [ -x "$CHROME" ]; then BROWSER_FLAG="--browser-executable $CHROME"; fi

PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts FourChoiceShorts \
  "$BASE/25-output.mp4" \
  --public-dir "$TEMP_DIR" \
  $BROWSER_FLAG \
  --props '{"subject":"kyoiku_genri"}' \
  --disable-chrome-sandbox \
  --concurrency 4 \
  --gl swiftshader

echo "=== 完了: $BASE/25-output.mp4 ==="
rm -rf "$TEMP_DIR"
