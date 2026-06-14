// 保存用ファイル - 21 現代教育論と教育方法
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
        question: '『脱学校の社会』で学校の解体を主張したのは?',
        choices: ['パウロ・フレイレ', 'イヴァン・イリイチ', 'デューイ', 'ブルーム'],
        correctIndex: 1,
        explanation: 'イリイチ。',
        questionAudio: 'audio/explain/21-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '「銀行型教育」を批判し問題提起型学習を唱えたのは?',
        choices: ['イリイチ', 'レイヴ', 'オーズベル', 'パウロ・フレイレ'],
        correctIndex: 3,
        explanation: 'フレイレ。',
        questionAudio: 'audio/explain/21-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '「モニトリアル・システム」と関係が深いのは?',
        choices: ['ペーターゼン', 'ケッペル', 'パーカースト', 'ベル・ランカスター'],
        correctIndex: 3,
        explanation: 'ベル・ランカスター(助教法)。',
        questionAudio: 'audio/explain/21-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '「イエナ・プラン」を考案したのは?',
        choices: ['ケッペル', 'ペーターゼン', 'モリソン', 'パーカースト'],
        correctIndex: 1,
        explanation: 'ペーターゼン。',
        questionAudio: 'audio/explain/21-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-07-voice.wav',
        answerDuration: 90,
    },
];
