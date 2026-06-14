// 保存用ファイル - 16 子どもの身体的発育・発達と保健
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
        question: '人見知りがみられ始めるのはおよそいつ?',
        choices: ['生後2か月', '生後7〜8か月', '2歳', '3歳'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/16-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '生後10か月頃の、話しているような発声を何という?',
        choices: ['喃語', 'クーイング', 'ジャルゴン', '初語'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/16-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '物の永続性を覚え始めるのはおよそいつ?',
        choices: ['生後5か月', '1歳', '2歳', '3歳'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/16-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '「並行遊び」がみられるのはおよそ何歳?',
        choices: ['1歳', '2歳', '4歳', '5歳'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/16-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-07-voice.wav',
        answerDuration: 90,
    },
];
