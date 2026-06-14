// 保存用ファイル - 11 子どもの身体的発育・発達と保健⑥
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
        question: 'パーセンタイル値で中央値にあたるのは?',
        choices: ['3', '50', '75', '97'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/11-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '出生時の頭囲はおよそ何cm?',
        choices: ['30cm', '33cm', '38cm', '50cm'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/11-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '発育の偏りとして原因を探すのはどのパーセンタイル値?',
        choices: ['25未満', '3未満または97超', '50', '10〜90'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/11-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: 'カウプ指数は何から栄養状態を知る指標?',
        choices: ['身長と腹囲', '身長と体重', '体重と年齢', '頭囲と胸囲'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/11-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-07-voice.wav',
        answerDuration: 90,
    },
];
