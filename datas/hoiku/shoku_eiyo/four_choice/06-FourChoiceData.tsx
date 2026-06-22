// 保存用ファイル - 06 栄養に関する基本的知識③
// フォルダ: datas/hoiku/shoku_eiyo/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　食と栄養';
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
        question: '体内で合成できず食事から摂取する必要があるアミノ酸を何という?',
        choices: ['可欠アミノ酸', '必須アミノ酸', '準必須アミノ酸', '制限アミノ酸'],
        correctIndex: 1,
        explanation: '必須アミノ酸は9種類。',
        questionAudio: 'audio/explain/06-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/06-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '常温で固体になりやすく、多くとると血中コレステロールを上昇させる脂肪酸は?',
        choices: ['飽和脂肪酸', '一価不飽和脂肪酸', '多価不飽和脂肪酸', '必須脂肪酸'],
        correctIndex: 0,
        explanation: '飽和脂肪酸（バター・牛脂・豚脂などの動物性油脂に多い）。',
        questionAudio: 'audio/explain/06-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/06-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '必須アミノ酸の数として正しいものは?',
        choices: ['5種類', '7種類', '9種類', '20種類'],
        correctIndex: 2,
        explanation: 'イソロイシン・ロイシン・リジンなど9種類。アルギニンは準必須アミノ酸。',
        questionAudio: 'audio/explain/06-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/06-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: 'アミノ酸価の低い食品に、不足するアミノ酸を多く含む食品を合わせて栄養価を高めることを何という?',
        choices: ['補足効果', '相乗効果', '相加効果', '代謝効果'],
        correctIndex: 0,
        explanation: 'たんぱく質（アミノ酸）の補足効果。',
        questionAudio: 'audio/explain/06-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/06-07-voice.wav',
        answerDuration: 90,
    },
];
