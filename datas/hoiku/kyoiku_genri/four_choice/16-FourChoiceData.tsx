// 保存用ファイル - 16 江戸の私塾・心学
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
        question: '京都で心学(石門心学)の講義を始めたのは?',
        choices: ['石田梅岩', '中江藤樹', '伊藤仁斎', '緒方洪庵'],
        correctIndex: 0,
        explanation: '石田梅岩。',
        questionAudio: 'audio/explain/16-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '豊後日田に私塾「咸宜園」を開いたのは?',
        choices: ['吉田松陰', '緒方洪庵', '福沢諭吉', '広瀬淡窓'],
        correctIndex: 3,
        explanation: '広瀬淡窓。',
        questionAudio: 'audio/explain/16-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '大阪に「適々斎塾(適塾)」を開いたのは?',
        choices: ['広瀬淡窓', '吉田松陰', '緒方洪庵', '林羅山'],
        correctIndex: 2,
        explanation: '緒方洪庵。',
        questionAudio: 'audio/explain/16-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-05-voice.wav',
        answerDuration: 90,
    },
];
