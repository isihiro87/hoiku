// 保存用ファイル - 37 子どもの疾病の予防及び適切な対応①
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
        question: 'BCGは何の予防接種?',
        choices: ['麻疹', '結核', '風疹', '水痘'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/37-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/37-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '生ワクチンは?',
        choices: ['B型肝炎', 'BCG', '日本脳炎', 'Hib'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/37-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/37-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '不活化ワクチンは?',
        choices: ['BCG', 'MR', '日本脳炎', 'ロタウイルス'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/37-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/37-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: 'MRワクチンは何と何の混合ワクチン?',
        choices: ['麻疹と風疹', '百日咳と破傷風', 'ジフテリアと破傷風', '麻疹と水痘'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/37-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/37-07-voice.wav',
        answerDuration: 90,
    },
];
