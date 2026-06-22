// 保存用ファイル - 48 子どもの健康と安全⑦
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
        question: '避難訓練・消火訓練の頻度の目安は?',
        choices: ['年1回', '学期に1回', '毎月1回', '毎週'],
        correctIndex: 2,
        explanation: '避難・消火訓練は毎月1回が目安。',
        questionAudio: 'audio/explain/48-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/48-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '災害弱者を表すCWAPに含まれないのは?',
        choices: ['子ども', '女性', '高齢者', '医師'],
        correctIndex: 3,
        explanation: '災害弱者CWAPは子ども・女性・高齢者などで医師は含まれない。',
        questionAudio: 'audio/explain/48-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/48-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '災害に備えた必需品の備蓄は最低何日分?',
        choices: ['1日', '3日', '1週間', '1か月'],
        correctIndex: 1,
        explanation: '災害用の備蓄は最低3日分。',
        questionAudio: 'audio/explain/48-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/48-05-voice.wav',
        answerDuration: 90,
    },
];
