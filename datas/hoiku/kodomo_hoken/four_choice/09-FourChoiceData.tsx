// 保存用ファイル - 09 子どもの身体的発育・発達と保健④
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
        question: '体重が出生時の約3倍になるのはおよそいつ?',
        choices: ['3か月', '6か月', '1年', '2年'],
        correctIndex: 2,
        explanation: '体重は生後1年で出生時の約3倍になる。',
        questionAudio: 'audio/explain/09-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/09-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '体重が出生時の約2倍になるのはおよそ生後いつ?',
        choices: ['1か月', '3か月', '6か月', '1年'],
        correctIndex: 1,
        explanation: '体重は生後3〜4か月で出生時の約2倍になる。',
        questionAudio: 'audio/explain/09-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/09-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '身長が出生時の約1.5倍になるのはおよそいつ?',
        choices: ['生後6か月', '生後1年', '4歳', '12歳'],
        correctIndex: 1,
        explanation: '身長は生後1年で出生時の約1.5倍になる。',
        questionAudio: 'audio/explain/09-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/09-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '身長が出生時の約2倍になるのはおよそ何歳?',
        choices: ['2歳', '4歳', '6歳', '12歳'],
        correctIndex: 1,
        explanation: '身長は4歳頃に出生時の約2倍になる。',
        questionAudio: 'audio/explain/09-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/09-07-voice.wav',
        answerDuration: 90,
    },
];
