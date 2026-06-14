// 保存用ファイル - 03 子どもの心身の健康と保健の意義③
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
        question: '2023(令和5)年の日本の合計特殊出生率はおよそいくつ?',
        choices: ['1.45', '1.26', '1.20', '2.07'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/03-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/03-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '合計特殊出生率とは、一人の女性が一生の間に出産する子どもの何?',
        choices: ['実数', '予測数', '平均年齢', '死亡数'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/03-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/03-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '人口の自然減につながるとされる水準は、およそ何を下回ったとき?',
        choices: ['1.20', '1.50', '2.07', '3.00'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/03-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/03-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '出生率とは、人口何人に対する出生数の割合?',
        choices: ['100人', '1,000人', '1万人', '10万人'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/03-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/03-07-voice.wav',
        answerDuration: 90,
    },
];
