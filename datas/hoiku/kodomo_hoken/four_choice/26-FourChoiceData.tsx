// 保存用ファイル - 26 子どもの心身の健康状態とその把握③
// フォルダ: datas/hoiku/kodomo_hoken/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　子どもの保健';
export const subtitleData = '4択クイズ';

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
        question: '飛沫が飛び散る範囲はおよそどのくらい?',
        choices: ['1〜2m', '5m', '10m', '空間全域'],
        correctIndex: 0,
        explanation: '飛沫は1〜2m程度の範囲に飛び散る。',
        questionAudio: 'audio/explain/26-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/26-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '児童福祉施設での健康診断は入所時とあと何回行うか(年)',
        choices: ['年1回', '年2回', '年4回', '毎月'],
        correctIndex: 1,
        explanation: '児童福祉施設の健康診断は入所時と年2回。',
        questionAudio: 'audio/explain/26-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/26-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '新生児マススクリーニングの採血はおよそ生後いつ?',
        choices: ['当日', '4〜5日目', '1か月', '3か月'],
        correctIndex: 1,
        explanation: '新生児マススクリーニングの採血は生後4〜5日目。',
        questionAudio: 'audio/explain/26-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/26-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '麻疹・水痘・結核の主な感染経路は?',
        choices: ['飛沫感染', '空気感染', '経口感染', '血液媒介'],
        correctIndex: 1,
        explanation: '麻疹・水痘・結核は空気感染する。',
        questionAudio: 'audio/explain/26-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/26-07-voice.wav',
        answerDuration: 90,
    },
];
