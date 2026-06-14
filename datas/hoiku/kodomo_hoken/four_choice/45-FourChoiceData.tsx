// 保存用ファイル - 45 子どもの健康と安全④
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
        question: '子どもの誤嚥で最も多いものは?',
        choices: ['餅', 'ピーナッツなどの豆類', 'ガム', '飴'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/45-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/45-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: 'ボタン電池の誤飲で危険なのは?',
        choices: ['窒息', '胃穿孔', '発熱', '下痢'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/45-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/45-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '乳児の誤嚥物排出に用いる方法は?',
        choices: ['腹部突き上げ法', '背部叩打法', '胸骨圧迫', '人工呼吸'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/45-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/45-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '熱中症のうち最も重症なのは?',
        choices: ['熱けいれん', '熱疲労', '熱射病', '日焼け'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/45-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/45-07-voice.wav',
        answerDuration: 90,
    },
];
