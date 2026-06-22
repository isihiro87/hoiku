// 保存用ファイル - 08 子どもの身体的発育・発達と保健③
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
        question: '児童福祉法で「児童」とは何歳未満?',
        choices: ['15歳', '18歳', '20歳', '12歳'],
        correctIndex: 1,
        explanation: '児童福祉法では18歳未満を児童とする。',
        questionAudio: 'audio/explain/08-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '発育区分で「新生児」は生後何未満?',
        choices: ['7日未満', '28日未満', '1年未満', '3か月未満'],
        correctIndex: 1,
        explanation: '新生児は生後28日未満をいう。',
        questionAudio: 'audio/explain/08-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '発育区分で「乳児」はいつまで?',
        choices: ['1歳未満', '3歳未満', '就学前', '6か月未満'],
        correctIndex: 0,
        explanation: '乳児は生後1歳未満をいう。',
        questionAudio: 'audio/explain/08-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '生理的体重減少は出生体重のおよそ何%?',
        choices: ['5〜10%', '15〜20%', '20〜30%', '1〜2%'],
        correctIndex: 0,
        explanation: '生理的体重減少は出生体重の約5〜10%。',
        questionAudio: 'audio/explain/08-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-07-voice.wav',
        answerDuration: 90,
    },
];
