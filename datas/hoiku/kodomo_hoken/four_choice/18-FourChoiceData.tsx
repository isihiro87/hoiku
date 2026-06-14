// 保存用ファイル - 18 子どもの身体的発育・発達と保健
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
        question: '乳児で主となる呼吸は?',
        choices: ['胸式呼吸', '腹式呼吸', '肩呼吸', '口呼吸'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/18-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '乳児の安静時の呼吸数はおよそ1分間に何回?',
        choices: ['20回', '40回', '60回', '80回'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/18-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '乳児の呼吸で主なのは?',
        choices: ['口呼吸', '鼻呼吸', '胸式', '肩呼吸'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/18-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '安静時の乳児の脈拍数はおよそ1分間にいくつ?',
        choices: ['60', '80', '120', '180'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/18-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-07-voice.wav',
        answerDuration: 90,
    },
];
