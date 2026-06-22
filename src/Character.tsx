import React from 'react';
import { Img, useCurrentFrame } from 'remotion';
// 女性キャラ（保育士）
import womanOpenOpen from './assets/char_woman/open_open.png';
import womanOpenClose from './assets/char_woman/open_close.png';
import womanHalfOpen from './assets/char_woman/half_open.png';
import womanHalfClose from './assets/char_woman/half_close.png';
import womanCloseOpen from './assets/char_woman/close_open.png';
import womanCloseClose from './assets/char_woman/close_close.png';
// 男性キャラ（社会福祉士）
import manOpenOpen from './assets/char_man/open_open.png';
import manOpenClose from './assets/char_man/open_close.png';
import manHalfOpen from './assets/char_man/half_open.png';
import manHalfClose from './assets/char_man/half_close.png';
import manCloseOpen from './assets/char_man/close_open.png';
import manCloseClose from './assets/char_man/close_close.png';

type EyeState = 'open' | 'half' | 'close';
type MouthState = 'open' | 'close';
export type Gender = 'man' | 'woman';

const CHAR_IMAGES: Record<Gender, Record<string, string>> = {
  woman: {
    'open_open': womanOpenOpen,
    'open_close': womanOpenClose,
    'half_open': womanHalfOpen,
    'half_close': womanHalfClose,
    'close_open': womanCloseOpen,
    'close_close': womanCloseClose,
  },
  man: {
    'open_open': manOpenOpen,
    'open_close': manOpenClose,
    'half_open': manHalfOpen,
    'half_close': manHalfClose,
    'close_open': manCloseOpen,
    'close_close': manCloseClose,
  },
};

/**
 * 資格名（titleData）から登場キャラの性別を決める。
 * 社会福祉士・介護福祉士 → 男性、それ以外（保育士など）→ 女性。
 */
export const genderForTitle = (title?: string): Gender =>
  title && (title.includes('社会福祉士') || title.includes('介護福祉士')) ? 'man' : 'woman';

export const Character: React.FC<{
  isTalking?: boolean;
  gender?: Gender;
}> = ({ isTalking = true, gender = 'woman' }) => {
  const frame = useCurrentFrame();

  // --- まばたきの処理（修正版：half状態を削除） ---
  const blinkCycle = 120;
  const blinkFrame = frame % blinkCycle;

  let eyeState: EyeState = 'open';

  // 110～115フレームの間（5フレーム）を目を閉じる状態にする
  if (blinkFrame > 110 && blinkFrame < 116) {
    eyeState = 'close';
  }

  // --- 口パクの処理 ---
  let mouthState: MouthState = 'close';

  if (isTalking) {
    const baseWave = Math.sin(frame * 0.8);
    const noiseWave = Math.sin(frame * 0.3);
    mouthState = (baseWave + noiseWave) > 0 ? 'open' : 'close';
  }

  // --- 画像の決定 ---
  const imageKey = `${eyeState}_${mouthState}`;

  const images = CHAR_IMAGES[gender];
  const imageSrc = images[imageKey] || images['open_close'];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    }}>
      <Img
        src={imageSrc}
        style={{
          width: '85%',
          height: '85%',
          objectFit: 'contain',
          transform: 'scaleX(-1)',
          filter: 'drop-shadow(5px 5px 15px rgba(0,0,0,0.2))'
        }}
      />
    </div>
  );
};