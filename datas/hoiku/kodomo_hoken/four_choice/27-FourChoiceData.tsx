// 保存用ファイル - 27 子どもの心身の健康状態とその把握④
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
        question: '接触感染の最も重要な対策は?',
        choices: ['予防接種', '手洗い', '換気', '隔離'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/27-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/27-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: 'ノロウイルスや腸管出血性大腸菌の主な感染経路は?',
        choices: ['空気感染', '経口感染', '接触感染', '飛沫感染'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/27-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/27-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '麻疹で頬粘膜にみられる白い斑点を何という?',
        choices: ['コプリック斑', '苺舌', '紅斑', '水疱'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/27-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/27-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '妊娠初期の罹患で先天性風疹症候群を起こすのは?',
        choices: ['麻疹', '風疹', '水痘', '突発性発疹'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/27-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/27-07-voice.wav',
        answerDuration: 90,
    },
];
