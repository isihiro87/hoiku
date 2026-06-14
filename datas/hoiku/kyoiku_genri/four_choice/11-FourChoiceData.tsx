// 保存用ファイル - 11 西洋の教育思想家②
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
        question: '世界最初の幼稚園を創設し「恩物」を考案したのは?',
        choices: ['ペスタロッチ', 'ルソー', 'フレーベル', 'エレン・ケイ'],
        correctIndex: 2,
        explanation: 'フレーベル。世界初の幼稚園を創設。',
        questionAudio: 'audio/explain/11-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '「恩物」とは?',
        choices: ['評価方法', '教科書', '幼児のための教育遊具', '教員免許'],
        correctIndex: 2,
        explanation: 'フレーベルが考案した教育遊具。',
        questionAudio: 'audio/explain/11-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '『児童の世紀』を著したスウェーデンの女性思想家は?',
        choices: ['モンテッソーリ', '松野クララ', 'ノールズ', 'エレン・ケイ'],
        correctIndex: 3,
        explanation: 'エレン・ケイ。20世紀を「児童の世紀」と提唱。',
        questionAudio: 'audio/explain/11-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '『学校と社会』『民主主義と教育』を著し経験主義を唱えたのは?',
        choices: ['デューイ', 'ブルーナー', 'キルパトリック', 'オーズベル'],
        correctIndex: 0,
        explanation: 'デューイ。',
        questionAudio: 'audio/explain/11-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-07-voice.wav',
        answerDuration: 90,
    },
];
