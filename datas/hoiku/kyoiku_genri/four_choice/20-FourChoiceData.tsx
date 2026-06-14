// 保存用ファイル - 20 学習理論と教授法②
// フォルダ: datas/hoiku/kyoiku_genri/four_choice
// 自動生成 (gen.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　教育原理';
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
        question: '「発見学習」を提唱したのは?',
        choices: ['デューイ', 'ブルーナー', 'ブルーム', 'キルパトリック'],
        correctIndex: 1,
        explanation: 'ブルーナー。',
        questionAudio: 'audio/explain/20-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '「完全習得学習」(診断的・形成的・総括的評価)を提唱したのは?',
        choices: ['オーズベル', 'ブルーナー', 'ブルーム', 'スキナー'],
        correctIndex: 2,
        explanation: 'ブルーム。',
        questionAudio: 'audio/explain/20-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '「先行オーガナイザー」「有意味受容学習」を提唱したのは?',
        choices: ['オーズベル', 'ブルーム', 'ブルーナー', 'レイヴ'],
        correctIndex: 0,
        explanation: 'オーズベル。',
        questionAudio: 'audio/explain/20-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '「正統的周辺参加(LPP)」を提唱したのは?',
        choices: ['レイヴとウェンガー', 'イリイチ', 'フレイレ', 'ペーターゼン'],
        correctIndex: 0,
        explanation: 'レイヴとウェンガー。',
        questionAudio: 'audio/explain/20-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-07-voice.wav',
        answerDuration: 90,
    },
];
