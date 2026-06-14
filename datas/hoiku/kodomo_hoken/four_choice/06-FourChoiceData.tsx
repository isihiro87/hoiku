// 保存用ファイル - 06 子どもの身体的発育・発達と保健①
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
        question: '出生時の身長はおよそ何cm?',
        choices: ['40cm', '50cm', '60cm', '75cm'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/06-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/06-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '出生時の体重はおよそ何g?',
        choices: ['2000g', '2500g', '3000g', '4000g'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/06-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/06-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '妊娠22週未満の分娩を何という?',
        choices: ['早産', '流産', '正期産', '死産'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/06-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/06-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '正期産は妊娠何週から何週まで?',
        choices: ['22〜37週', '37〜42週', '40〜44週', '35〜40週'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/06-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/06-07-voice.wav',
        answerDuration: 90,
    },
];
