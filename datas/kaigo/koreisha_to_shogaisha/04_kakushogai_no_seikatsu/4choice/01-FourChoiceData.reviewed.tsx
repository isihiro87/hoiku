// 保存用ファイル - 01 視覚障害者・聴覚障害者の生活（L15・L16）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/04_kakushogai_no_seikatsu/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　障害者の生活';
export const subtitleData = '介護4択';

export interface FourChoiceScene {
    id: string;
    question: string;
    japanese?: string;
    choices: [string, string, string, string];
    correctIndex: number;
    explanation: string;
    questionAudio: string;
    questionDuration: number;
    answerAudio: string;
    answerDuration: number;
}

export const fourChoiceData: FourChoiceScene[] = [
    {
        id: 'q1',
        question: '中途失聴者など手話を習得していない人とのやりとりに適した方法は？',
        choices: ['手話', '口話', '筆談', '指文字'],
        correctIndex: 2,
        explanation: '紙などに文字を書いて読み合う方法を筆談という。人名や地名など手話で表しにくい言葉は指文字で表す。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '網膜色素変性症の初期症状として現れるものは？',
        choices: ['夜盲', '硝子体出血', '眼圧上昇', '口内炎'],
        correctIndex: 0,
        explanation: '網膜色素変性症は遺伝性の指定難病で、初期には夜盲（暗い場所で見えにくい）が現れ、進行とともに視野が狭くなる。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '先天性視覚障害児にみられる、目的のない自己刺激的行動を何という？',
        choices: ['常同行動', 'ブラインディズム', 'フラッシュバック', 'クレーン現象'],
        correctIndex: 1,
        explanation: 'ブラインディズムとは、手や指を眼前でひらひらさせるなど、目的のない自己刺激的な反復行動をいう。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '老人性難聴が分類される難聴は？',
        choices: ['混合性難聴', '伝音性難聴', '感音性難聴', '機能性難聴'],
        correctIndex: 2,
        explanation: '老人性難聴は加齢を原因とする感音性難聴で、高音域から聞き取りにくくなり、語音明瞭度も低下する。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
