// 保存用ファイル - 07 子どもの身体的発育・発達と保健②
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
        question: '低出生体重児とされるのは出生体重が何g未満?',
        choices: ['3000g', '2500g', '2000g', '1500g'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/07-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '受精卵が「胎児」と呼ばれるのは妊娠およそ何週から?',
        choices: ['4週', '8〜10週', '14週', '22週'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/07-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '新生児の身体のバランスはおよそ何頭身?',
        choices: ['2頭身', '4頭身', '6頭身', '8頭身'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/07-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '出生時、頭囲と胸囲ではどちらが大きい?',
        choices: ['頭囲', '胸囲', '同じ', '測れない'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/07-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-07-voice.wav',
        answerDuration: 90,
    },
];
