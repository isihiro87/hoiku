// 保存用ファイル - 07 子どもの権利条約
// フォルダ: datas/hoiku/kyoiku_genri/four_choice
// 自動生成 (gen.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　教育原理';
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
        question: '日本が子どもの権利条約を批准したのは何年?',
        choices: ['1989年', '1991年', '2006年', '1994年'],
        correctIndex: 3,
        explanation: '1994年(平成6年)に批准。',
        questionAudio: 'audio/explain/07-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '子どもの権利条約の「児童」は何歳未満?',
        choices: ['12歳未満', '18歳未満', '15歳未満', '20歳未満'],
        correctIndex: 1,
        explanation: '18歳未満を児童と定義。',
        questionAudio: 'audio/explain/07-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '子どもの権利条約で「意見表明権」を定めるのは何条?',
        choices: ['第12条', '第1条', '第26条', '第29条'],
        correctIndex: 0,
        explanation: '意見表明権は第12条。',
        questionAudio: 'audio/explain/07-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: 'ユネスコの本部はどこ?',
        choices: ['ニューヨーク', 'ジュネーブ', 'パリ', 'ローマ'],
        correctIndex: 2,
        explanation: 'ユネスコ本部はパリ。',
        questionAudio: 'audio/explain/07-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-07-voice.wav',
        answerDuration: 90,
    },
];
