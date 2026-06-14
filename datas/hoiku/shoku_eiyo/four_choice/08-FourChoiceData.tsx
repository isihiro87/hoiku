// 保存用ファイル - 08 栄養に関する基本的知識⑤
// フォルダ: datas/hoiku/shoku_eiyo/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　食と栄養';
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
        question: '欠乏すると夜盲症や角膜乾燥症を起こすビタミンは?',
        choices: ['ビタミンA', 'ビタミンD', 'ビタミンB1', 'ビタミンC'],
        correctIndex: 0,
        explanation: 'ビタミンAの欠乏症。',
        questionAudio: 'audio/explain/08-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: 'ビタミンと欠乏症の組み合わせとして、誤っているものは?',
        choices: ['ビタミンD ― くる病', 'ビタミンB1 ― 脚気', 'ビタミンC ― 壊血病', 'ナイアシン ― 夜盲症'],
        correctIndex: 3,
        explanation: 'ナイアシンの欠乏症はペラグラ。夜盲症はビタミンA欠乏。',
        questionAudio: 'audio/explain/08-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '胎児の神経管閉鎖障害のリスク低減に関わる、水溶性ビタミンは?',
        choices: ['ビタミンK', '葉酸', 'ビタミンE', 'ビタミンB2'],
        correctIndex: 1,
        explanation: '葉酸は造血作用があり、神経管閉鎖障害リスクを低減する。',
        questionAudio: 'audio/explain/08-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '体重に占める水分量の割合として、正しい組み合わせは?',
        choices: ['乳児60%・成人80%', '乳児80%・成人60%', '乳児50%・成人70%', '乳児70%・成人50%'],
        correctIndex: 1,
        explanation: '乳児はおよそ80%、成人は60%。',
        questionAudio: 'audio/explain/08-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-07-voice.wav',
        answerDuration: 90,
    },
];
