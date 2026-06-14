// 保存用ファイル - 10 子どもの身体的発育・発達と保健⑤
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
        question: '大泉門とは何?',
        choices: ['後方の骨のすき間', '前方の骨のすき間', '耳の穴', '背骨のすき間'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/10-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '身長が出生時の約3倍になるのはおよそ何歳?',
        choices: ['4歳', '8歳', '12歳', '15歳'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/10-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '2歳未満の身長測定の姿勢は?',
        choices: ['立位', '仰臥位', '腹臥位', '座位'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/10-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '大泉門が閉鎖するのはおよそいつ?',
        choices: ['生後3か月', '1歳半頃', '3歳', '6歳'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/10-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-07-voice.wav',
        answerDuration: 90,
    },
];
