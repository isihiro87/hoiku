#!/bin/bash
set -e
cd /workspaces/hoiku_shiken
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"
BASE="/workspaces/hoiku_shiken/datas/hoiku/shoku_eiyo/four_choice"

cp "$BASE/audios/23-00-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/23-01-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/23-02-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/23-03-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/23-04-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/23-05-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/23-06-voice.wav" "$TEMP_DIR/audio/explain/"
cp "$BASE/audios/23-07-voice.wav" "$TEMP_DIR/audio/explain/"
cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"
[ -f public/audio/finish.wav ] && cp public/audio/finish.wav "$TEMP_DIR/audio/explain/" || true
cp "$BASE/23-FourChoiceData.tsx" src/FourChoiceData.tsx

echo "=== 23 特別な配慮を要する子どもの食と栄養③ (4択) レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts FourChoiceShorts \
  "$BASE/23-output.mp4" \
  --public-dir "$TEMP_DIR" \
  --browser-executable /workspaces/hoiku_shiken/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell \
  --props '{"subject":"kodomo_no_shokuto_eiyo"}' \
  --disable-chrome-sandbox \
  --concurrency 4 \
  --gl swiftshader

echo "=== 完了: $BASE/23-output.mp4 ==="
rm -rf "$TEMP_DIR"
