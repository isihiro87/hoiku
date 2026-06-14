/**
 * 人類の出現と進化 - 中学歴史 解説動画（実画像 + 音声 + 字幕版）
 *
 * - 白ベース・色分け（赤=重要 / 青=流れ / 緑=ポイント / オレンジ=注意）
 * - 上部: 章バッジ・タイトル・メイン画像・箇条書き / ポイント枠
 * - 下部: 字幕エリア（音声と同期して表示）
 * - 各シーンにナレーション音声を再生し、字幕と表示内容をマッチさせる
 */
import React from 'react';
import {
  AbsoluteFill,
  Series,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  Audio,
  staticFile,
} from 'remotion';

const FONT = '"Noto Sans JP", sans-serif';

// ==================== カラー ====================
const C = {
  bg: '#FFFFFF',
  ink: '#1F1F1F',
  inkSoft: '#5A5A5A',
  border: '#D8D8D8',
  red: '#D7263D',
  blue: '#1F6FBF',
  green: '#2E8B57',
  orange: '#E89005',
  redSoft: '#FFEBEE',
  blueSoft: '#E8F1FB',
  greenSoft: '#EAF5EE',
  orangeSoft: '#FFF6E6',
  paper: '#FFFFFF',
  yellowMarker: '#FFF59D',
};

// ==================== シーン尺（音声長 +α、30fps） ====================
const D = {
  s1: 351 + 15,   // 11.7s
  s2: 599 + 15,   // 20.0s
  s3: 410 + 15,   // 13.7s
  s4: 573 + 15,   // 19.1s
  s5: 395 + 15,   // 13.2s
  s6: 372 + 15,   // 12.4s
  s7: 590 + 15,   // 19.7s
  s8: 1317 + 30,  // 43.9s + 1s（最後だけ余韻）
};
export const TOTAL_FRAMES = Object.values(D).reduce((a, b) => a + b, 0);

// ==================== Hooks ====================
const useSpringIn = (delay: number) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 110, mass: 0.6 },
  });
};

const useFade = (start: number, length = 16) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [start, start + length], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

const useProgress = (start: number, length: number) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [start, start + length], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

// ==================== Stage（白背景+上下アクセント） ====================
const Stage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ background: C.bg, fontFamily: FONT, overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 10, background: C.green }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 10, background: C.green }} />
    {children}
  </AbsoluteFill>
);

// ==================== ヘッダー ====================
const Chip: React.FC<{ text: string; color?: string }> = ({ text, color = C.green }) => (
  <div
    style={{
      display: 'inline-block',
      background: color,
      color: '#FFFFFF',
      fontSize: 28,
      fontWeight: 900,
      padding: '6px 18px',
      borderRadius: 8,
      letterSpacing: 3,
      marginBottom: 12,
    }}
  >
    {text}
  </div>
);

const Heading: React.FC<{ text: string; underline?: string; delay?: number }> = ({
  text,
  underline = C.green,
  delay = 0,
}) => {
  const sp = useSpringIn(delay);
  const lineProgress = useProgress(delay + 8, 22);
  return (
    <div style={{ transform: `scale(${sp})`, transformOrigin: 'left center', display: 'inline-block' }}>
      <div
        style={{
          fontSize: 96,
          fontWeight: 900,
          color: C.ink,
          letterSpacing: 1,
          lineHeight: 1.05,
        }}
      >
        {text}
      </div>
      <svg width="940" height="30" viewBox="0 0 940 30" style={{ display: 'block', marginTop: 6 }}>
        <path
          d="M 6 16 Q 116 4 230 16 T 460 16 T 690 16 T 932 16"
          stroke={underline}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="940"
          strokeDashoffset={(1 - lineProgress) * 940}
        />
      </svg>
    </div>
  );
};

const PageNum: React.FC<{ n: number; total: number }> = ({ n, total }) => (
  <div
    style={{
      position: 'absolute',
      top: 44,
      right: 70,
      fontSize: 36,
      fontWeight: 700,
      color: C.inkSoft,
      letterSpacing: 3,
    }}
  >
    {String(n).padStart(2, '0')} / {String(total).padStart(2, '0')}
  </div>
);

// ==================== マーカー・箇条書き ====================
const Mark: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = C.yellowMarker,
}) => (
  <span style={{ background: `linear-gradient(transparent 60%, ${color} 60%)`, padding: '0 4px' }}>
    {children}
  </span>
);

const BulletItem: React.FC<{
  bullet?: string;
  bulletColor?: string;
  children: React.ReactNode;
  delay?: number;
}> = ({ bullet = '・', bulletColor = C.ink, children, delay = 0 }) => {
  const fade = useFade(delay);
  return (
    <div
      style={{
        opacity: fade,
        transform: `translateX(${(1 - fade) * 16}px)`,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 18,
        fontSize: 52,
        fontWeight: 700,
        color: C.ink,
        lineHeight: 1.5,
      }}
    >
      <span style={{ color: bulletColor, fontWeight: 900, flexShrink: 0 }}>{bullet}</span>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

const PointFrame: React.FC<{
  label?: string;
  color?: string;
  bg?: string;
  children: React.ReactNode;
  delay?: number;
}> = ({ label = 'ポイント', color = C.green, bg = C.greenSoft, children, delay = 0 }) => {
  const sp = useSpringIn(delay);
  return (
    <div
      style={{
        transform: `scale(${sp})`,
        transformOrigin: 'left center',
        background: bg,
        border: `3px solid ${color}`,
        borderRadius: 12,
        padding: '40px 26px 26px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -22,
          left: 22,
          background: color,
          color: '#FFFFFF',
          fontSize: 32,
          fontWeight: 900,
          padding: '8px 22px',
          borderRadius: 10,
          letterSpacing: 3,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 50, fontWeight: 700, color: C.ink, lineHeight: 1.35 }}>
        {children}
      </div>
    </div>
  );
};

// ==================== シーン共通フレーム ====================
type SceneFrameProps = {
  no: number;
  audio: string;
  chip: string;
  chipColor?: string;
  heading: string;
  underlineColor?: string;
  children: React.ReactNode;
};

const SceneFrame: React.FC<SceneFrameProps> = ({
  no,
  audio,
  chip,
  chipColor = C.green,
  heading,
  underlineColor = C.green,
  children,
}) => (
  <Stage>
    <Audio src={staticFile(audio)} />
    <PageNum n={no} total={8} />
    <div style={{ position: 'absolute', top: 90, left: 60, right: 60 }}>
      <Chip text={chip} color={chipColor} />
      <Heading text={heading} underline={underlineColor} delay={6} />
    </div>
    {/* メインコンテンツ */}
    <div style={{ position: 'absolute', top: 410, left: 50, right: 50, bottom: 60 }}>
      {children}
    </div>
  </Stage>
);

// ==================== 画像 ====================
const sImg = (name: string) => staticFile(`explain/human_origins/images/${name}`);

// ==================== シーン1: 導入 ====================
const Scene1: React.FC = () => {
  const img = useSpringIn(8);
  const point = useSpringIn(240); // 8s 「長い進化の歴史」
  return (
    <SceneFrame
      no={1}
      audio="explain/human_origins/audio/s1.wav"
      chip="導入"
      heading="人類の出現と進化"
      underlineColor={C.green}
    >
      {/* 画像（1448×790、アスペクト比1.83） */}
      <div style={{ width: '100%', transform: `scale(${img})`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Img
          src={sImg('s1_africa_map.png')}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            border: `2px solid ${C.border}`,
            borderRadius: 14,
          }}
        />
      </div>
      {/* 箇条書き */}
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <BulletItem bulletColor={C.blue} delay={45}>
          約 <span style={{ color: C.red, fontWeight: 900 }}>700万年前</span>、
          <Mark>アフリカ</Mark> で人類が誕生
        </BulletItem>
        <BulletItem bulletColor={C.blue} delay={150}>
          最古の人類は <span style={{ color: C.red, fontWeight: 900 }}>「猿人」</span>
        </BulletItem>
      </div>
      {/* ポイント */}
      <div style={{ marginTop: 76, transform: `scale(${point})`, transformOrigin: 'left top' }}>
        <PointFrame>
          ここから <Mark>長い進化の歴史</Mark> が始まった！
        </PointFrame>
      </div>
    </SceneFrame>
  );
};

// ==================== シーン2: 進化の流れ ====================
const Scene2: React.FC = () => {
  const img = useSpringIn(8);
  return (
    <SceneFrame
      no={2}
      audio="explain/human_origins/audio/s2.wav"
      chip="人類の進化"
      chipColor={C.red}
      heading="猿人 → 原人 → 新人"
      underlineColor={C.red}
    >
      <div style={{ width: '100%', transform: `scale(${img})`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Img
          src={sImg('s2_human_evolution.png')}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 30 }}>
        <BulletItem bulletColor={C.red} delay={105}>
          <span style={{ color: C.red, fontWeight: 900 }}>猿人</span>：<Mark>二足歩行</Mark>を始めた
        </BulletItem>
        <BulletItem bulletColor={C.red} delay={240}>
          <span style={{ color: C.red, fontWeight: 900 }}>原人</span>：<Mark>火を使う</Mark>ようになった
        </BulletItem>
        <BulletItem bulletColor={C.red} delay={360}>
          <span style={{ color: C.red, fontWeight: 900 }}>新人</span>：<Mark>現代人</Mark>につながる
        </BulletItem>
      </div>
    </SceneFrame>
  );
};

// ==================== シーン3: 旧石器時代 ====================
const Scene3: React.FC = () => {
  const img = useSpringIn(8);
  const point = useSpringIn(300); // 10s 「とる生活」
  return (
    <SceneFrame
      no={3}
      audio="explain/human_origins/audio/s3.wav"
      chip="旧石器時代"
      chipColor={C.blue}
      heading="旧石器時代の生活"
      underlineColor={C.blue}
    >
      <div style={{ width: '100%', transform: `scale(${img})`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Img
          src={sImg('s3_paleo_life.png')}
          style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 14, border: `2px solid ${C.border}` }}
        />
      </div>
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <BulletItem bulletColor={C.blue} delay={105}>
          <Mark><span style={{ color: C.red, fontWeight: 900 }}>打製石器</span></Mark>を使う
        </BulletItem>
        <BulletItem bulletColor={C.blue} delay={195}>
          <Mark>狩猟・採集</Mark> の生活
        </BulletItem>
      </div>
      <div style={{ marginTop: 76, transform: `scale(${point})`, transformOrigin: 'left top' }}>
        <PointFrame>
          食料を <span style={{ color: C.red, fontWeight: 900 }}>「とる」</span> 生活！
        </PointFrame>
      </div>
    </SceneFrame>
  );
};

// ==================== シーン4: 打製石器 + 洞窟壁画 ====================
const Scene4: React.FC = () => {
  const stone = useSpringIn(8);
  const cave = useSpringIn(210);  // 7s  「ラスコー洞窟壁画」
  return (
    <SceneFrame
      no={4}
      audio="explain/human_origins/audio/s4.wav"
      chip="代表的な遺物"
      chipColor={C.red}
      heading="打製石器と洞窟壁画"
      underlineColor={C.red}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <div
          style={{
            transform: `scale(${stone})`,
            transformOrigin: 'left top',
            background: '#FFFFFF',
            border: `2px solid ${C.border}`,
            borderRadius: 12,
            padding: 14,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 900, color: C.red, marginBottom: 6 }}>打製石器</div>
          <div style={{ fontSize: 22, color: C.inkSoft, marginBottom: 8 }}>だせいせっき</div>
          <Img
            src={sImg('s4_chipped_stone.png')}
            style={{ width: '100%', height: 380, objectFit: 'contain' }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, color: C.ink, marginTop: 8 }}>
            石を <Mark>打ち欠いて</Mark> 作る
          </div>
        </div>
        <div
          style={{
            transform: `scale(${cave})`,
            transformOrigin: 'right top',
            background: '#FFFFFF',
            border: `2px solid ${C.border}`,
            borderRadius: 12,
            padding: 14,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 900, color: C.red, marginBottom: 6 }}>洞窟壁画</div>
          <div style={{ fontSize: 22, color: C.inkSoft, marginBottom: 8 }}>フランス・ラスコー</div>
          <Img
            src={sImg('s4_cave_painting.png')}
            style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 6 }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, color: C.ink, marginTop: 8 }}>
            旧石器時代の <Mark>芸術</Mark>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <BulletItem bulletColor={C.blue} delay={30}>
          打製石器＝石を<Mark>打って</Mark>形を作る、<span style={{ color: C.red, fontWeight: 900 }}>粗い石器</span>
        </BulletItem>
        <BulletItem bulletColor={C.blue} delay={330}>
          ラスコー洞窟は <Mark>フランス</Mark> にある
        </BulletItem>
      </div>
    </SceneFrame>
  );
};

// ==================== シーン5: 旧→新石器時代 ====================
const Scene5: React.FC = () => {
  const img = useSpringIn(8);
  return (
    <SceneFrame
      no={5}
      audio="explain/human_origins/audio/s5.wav"
      chip="時代のうつりかわり"
      chipColor={C.blue}
      heading="旧石器時代 → 新石器時代"
      underlineColor={C.blue}
    >
      <div style={{ width: '100%', height: 600, transform: `scale(${img})`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Img
          src={sImg('s5_stone_tools_compare.png')}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </div>
      <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <BulletItem bulletColor={C.orange} delay={15}>
          約 <span style={{ color: C.red, fontWeight: 900 }}>1万年前</span>、氷河時代が終わる
        </BulletItem>
        <BulletItem bulletColor={C.orange} delay={105}>
          気候が <Mark>温暖</Mark> になり、暮らしが変わる
        </BulletItem>
        <BulletItem bulletColor={C.orange} delay={285}>
          <Mark>磨製石器</Mark> ・ <Mark>土器</Mark> が登場
        </BulletItem>
      </div>
    </SceneFrame>
  );
};

// ==================== シーン6: 気候温暖化 ====================
const Scene6: React.FC = () => {
  const img = useSpringIn(8);
  const point = useSpringIn(240); // 8s 「新石器時代」
  return (
    <SceneFrame
      no={6}
      audio="explain/human_origins/audio/s6.wav"
      chip="新石器時代へ"
      heading="気候温暖化と暮らしの変化"
      underlineColor={C.green}
    >
      <div style={{ width: '100%', height: 660, transform: `scale(${img})`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Img
          src={sImg('s6_climate_shift.png')}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 12, border: `2px solid ${C.border}` }}
        />
      </div>
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <BulletItem bulletColor={C.blue} delay={15}>
          <Mark>氷河時代</Mark> が終わり、地球が暖かく
        </BulletItem>
        <BulletItem bulletColor={C.blue} delay={135}>
          植物・動物が増え、<Mark>食料が豊かに</Mark>
        </BulletItem>
      </div>
      <div style={{ marginTop: 18, transform: `scale(${point})`, transformOrigin: 'left top' }}>
        <PointFrame>
          ここから <span style={{ color: C.red, fontWeight: 900 }}>新石器時代</span> が始まる！
        </PointFrame>
      </div>
    </SceneFrame>
  );
};

// ==================== シーン7: 農耕・牧畜・定住 ====================
const Scene7: React.FC = () => {
  const img = useSpringIn(8);
  const point = useSpringIn(435); // 14.5s 「つくる生活」
  return (
    <SceneFrame
      no={7}
      audio="explain/human_origins/audio/s7.wav"
      chip="新石器時代の暮らし"
      heading="農耕・牧畜・土器・定住"
      underlineColor={C.green}
    >
      <div style={{ width: '100%', height: 660, transform: `scale(${img})`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Img
          src={sImg('s7_neolithic_village.png')}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 12, border: `2px solid ${C.border}` }}
        />
      </div>
      <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <BulletItem bulletColor={C.green} delay={15}>
          <Mark><span style={{ color: C.red, fontWeight: 900 }}>農耕</span>と<span style={{ color: C.red, fontWeight: 900 }}>牧畜</span></Mark> が始まる
        </BulletItem>
        <BulletItem bulletColor={C.green} delay={135}>
          <span style={{ color: C.red, fontWeight: 900 }}>土器</span> で <Mark>煮炊き・貯蔵</Mark>
        </BulletItem>
        <BulletItem bulletColor={C.green} delay={285}>
          人々は <span style={{ color: C.red, fontWeight: 900 }}>定住生活</span> を始める
        </BulletItem>
      </div>
      <div style={{ marginTop: 16, transform: `scale(${point})`, transformOrigin: 'left top' }}>
        <PointFrame>
          食料を <span style={{ color: C.red, fontWeight: 900 }}>「つくる」</span> 生活へ大転換！
        </PointFrame>
      </div>
    </SceneFrame>
  );
};

// ==================== シーン8: まとめ＋確認問題 ====================
const Scene8: React.FC = () => {
  const r1 = useSpringIn(90);    // 3s    「700万年前 猿人/二足歩行」
  const r2 = useSpringIn(210);   // 7s    「240万年前 原人/火を使う」
  const r3 = useSpringIn(360);   // 12s   「20万年前 新人/現代人」
  const r4 = useSpringIn(510);   // 17s   「1万年前 新石器時代」
  const quiz = useSpringIn(720); // 24s   クイズ（07-voice終了→1秒silence→08-voice）
  const showAns = useFade(1170, 18); // 39s 答え表示（08-voice終了→silence→09-voice内の「答えは①」）
  return (
    <SceneFrame
      no={8}
      audio="explain/human_origins/audio/s8.wav"
      chip="まとめ"
      heading="人類史の流れ＋確認"
      underlineColor={C.green}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <TimelineRow delay={r1} year="約700万年前" event="猿人 が出現／二足歩行" color={C.red} />
        <TimelineRow delay={r2} year="約240万年前" event="原人 が出現／火を使う" color={C.red} />
        <TimelineRow delay={r3} year="約20万年前" event="新人 が出現／現代人へ" color={C.red} />
        <TimelineRow delay={r4} year="約1万年前〜" event="新石器時代／農耕・牧畜・定住" color={C.green} highlight />
      </div>
      <div style={{ marginTop: 30, transform: `scale(${quiz})`, transformOrigin: 'left top' }}>
        <QuizBox
          question="新石器時代に始まったことは？"
          choices={[
            { label: '1', text: '農耕と牧畜' },
            { label: '2', text: '火の使用' },
            { label: '3', text: '二足歩行' },
          ]}
          answerIdx={0}
          showAnswer={showAns}
        />
      </div>
    </SceneFrame>
  );
};

const TimelineRow: React.FC<{
  delay: number;
  year: string;
  event: string;
  color: string;
  highlight?: boolean;
}> = ({ delay, year, event, color, highlight }) => (
  <div
    style={{
      transform: `scale(${delay})`,
      transformOrigin: 'left center',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '11px 0',
      borderBottom: `1px dashed ${C.border}`,
    }}
  >
    <div style={{ width: 22, height: 22, borderRadius: '50%', background: color, flexShrink: 0 }} />
    <div style={{ fontSize: 34, fontWeight: 900, color: C.inkSoft, minWidth: 250 }}>{year}</div>
    <div
      style={{
        fontSize: 38,
        fontWeight: 900,
        color: highlight ? C.green : C.ink,
        background: highlight ? C.greenSoft : 'transparent',
        padding: highlight ? '6px 16px' : 0,
        borderRadius: 8,
      }}
    >
      {event}
    </div>
  </div>
);

const QuizBox: React.FC<{
  question: string;
  choices: { label: string; text: string }[];
  answerIdx: number;
  showAnswer: number;
}> = ({ question, choices, answerIdx, showAnswer }) => (
  <div
    style={{
      background: '#FFFFFF',
      border: `3px solid ${C.orange}`,
      borderRadius: 12,
      padding: '18px 22px',
      position: 'relative',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: -20,
        left: 22,
        background: C.orange,
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 900,
        padding: '6px 22px',
        borderRadius: 8,
        letterSpacing: 2,
      }}
    >
      確認問題
    </div>
    <div style={{ fontSize: 40, fontWeight: 900, color: C.ink, marginTop: 10, marginBottom: 16 }}>
      {question}
    </div>
    {choices.map((c, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontSize: 36,
          fontWeight: 700,
          color: i === answerIdx && showAnswer > 0.5 ? C.red : C.ink,
          padding: '6px 0',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 56,
            height: 56,
            border: `4px solid ${i === answerIdx && showAnswer > 0.5 ? C.red : C.ink}`,
            borderRadius: '50%',
            fontSize: 36,
            fontWeight: 900,
            flexShrink: 0,
            background: i === answerIdx && showAnswer > 0.5 ? C.red : '#FFF',
            color: i === answerIdx && showAnswer > 0.5 ? '#FFF' : C.ink,
          }}
        >
          {c.label}
        </span>
        <span>{c.text}</span>
        {i === answerIdx && showAnswer > 0.5 && (
          <span
            style={{
              opacity: showAnswer,
              fontSize: 30,
              fontWeight: 900,
              color: C.red,
              marginLeft: 8,
            }}
          >
            ← 答え
          </span>
        )}
      </div>
    ))}
  </div>
);

// ==================== Root（全8シーン） ====================
export const HumanOriginsExplainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: FONT }}>
      <Series>
        <Series.Sequence durationInFrames={D.s1}>
          <Scene1 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D.s2}>
          <Scene2 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D.s3}>
          <Scene3 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D.s4}>
          <Scene4 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D.s5}>
          <Scene5 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D.s6}>
          <Scene6 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D.s7}>
          <Scene7 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D.s8}>
          <Scene8 />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// ==================== Part1（シーン1〜3：人類の出現〜旧石器時代） ====================
export const PART1_FRAMES = D.s1 + D.s2 + D.s3;
export const HumanOriginsExplainPart1: React.FC = () => (
  <AbsoluteFill style={{ background: C.bg, fontFamily: FONT }}>
    <Series>
      <Series.Sequence durationInFrames={D.s1}>
        <Scene1 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={D.s2}>
        <Scene2 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={D.s3}>
        <Scene3 />
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);

// ==================== Part2（シーン4〜6：石器・洞窟壁画〜温暖化） ====================
export const PART2_FRAMES = D.s4 + D.s5 + D.s6;
export const HumanOriginsExplainPart2: React.FC = () => (
  <AbsoluteFill style={{ background: C.bg, fontFamily: FONT }}>
    <Series>
      <Series.Sequence durationInFrames={D.s4}>
        <Scene4 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={D.s5}>
        <Scene5 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={D.s6}>
        <Scene6 />
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);

// ==================== Part3（シーン7〜8：定住生活〜まとめ） ====================
export const PART3_FRAMES = D.s7 + D.s8;
export const HumanOriginsExplainPart3: React.FC = () => (
  <AbsoluteFill style={{ background: C.bg, fontFamily: FONT }}>
    <Series>
      <Series.Sequence durationInFrames={D.s7}>
        <Scene7 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={D.s8}>
        <Scene8 />
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);
