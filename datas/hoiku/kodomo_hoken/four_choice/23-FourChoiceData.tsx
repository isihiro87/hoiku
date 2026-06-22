// 保存用ファイル - 23 子どもの身体的発育・発達と保健
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
        question: '乳歯は生えそろうと何本?',
        choices: ['16本', '20本', '28本', '32本'],
        correctIndex: 1,
        explanation: '乳歯は全部で20本。',
        questionAudio: 'audio/explain/23-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '永久歯は生えそろうと何本?',
        choices: ['20本', '28本', '32本', '24本'],
        correctIndex: 2,
        explanation: '永久歯は全部で32本。',
        questionAudio: 'audio/explain/23-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '押し出し反射が消失するのはおよそ生後何か月?',
        choices: ['2か月', '4か月', '6か月', '1歳'],
        correctIndex: 1,
        explanation: '押し出し反射は生後4か月頃に消失する。',
        questionAudio: 'audio/explain/23-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-05-voice.wav',
        answerDuration: 90,
    },
];
