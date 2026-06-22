// 保存用ファイル - 21 特別な配慮を要する子どもの食と栄養①
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
        question: '発熱時の食生活について、誤っているものは?',
        choices: ['発汗により水分や電解質を失う', '体温が1℃上昇するとエネルギー必要量が増す', 'たんぱく質やビタミンの消費が増える', '水分は与えず安静にする'],
        correctIndex: 3,
        explanation: '発熱時は水分・電解質飲料を与えることが大切。',
        questionAudio: 'audio/explain/21-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '胎児が母親から胎盤を介して受け取り、生後3〜6か月で最も少なくなる免疫物質は?',
        choices: ['免疫グロブリンIgG', '免疫グロブリンIgA', 'ラクトフェリン', 'インスリン'],
        correctIndex: 0,
        explanation: 'IgGは妊娠7か月頃から胎盤を介して送られ、生後3〜6か月で最少になる。',
        questionAudio: 'audio/explain/21-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '下痢の急性期の対応として、まず行うことは?',
        choices: ['牛乳を多めに与える', '絶食する', '食物繊維を多く与える', '脂肪の多い料理を与える'],
        correctIndex: 1,
        explanation: '急性期はまず絶食し、落ち着いたら水分補給する。',
        questionAudio: 'audio/explain/21-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '脱水症について、正しいものは?',
        choices: ['体内の水分が増えた状態である', '尿量が増える', '水分とナトリウムの両方が不足することがある', '唇や口内が湿る'],
        correctIndex: 2,
        explanation: '脱水症は尿量が減少し、唇・口内の乾燥などの症状が出る。',
        questionAudio: 'audio/explain/21-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-07-voice.wav',
        answerDuration: 90,
    },
];
