// 保存用ファイル - 28 現代の教育課題②
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
        question: '現在実施中の教育振興基本計画は第何期?',
        choices: ['第1期', '第4期', '第2期', '第3期'],
        correctIndex: 1,
        explanation: '第4期(2023年閣議決定)。',
        questionAudio: 'audio/explain/28-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/28-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '日本の子どもの貧困率に最も近いのは?',
        choices: ['約11%', '約5%', '約20%', '約30%'],
        correctIndex: 0,
        explanation: '2022年調査で約11.5%。',
        questionAudio: 'audio/explain/28-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/28-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '1人1台端末と高速通信網の整備を目指す構想は?',
        choices: ['アクティブ・ラーニング', 'Society5.0', 'リカレント教育', 'GIGAスクール構想'],
        correctIndex: 3,
        explanation: 'GIGAスクール構想。',
        questionAudio: 'audio/explain/28-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/28-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: 'サイバー空間と現実空間を融合させた人間中心の社会は?',
        choices: ['Society4.0', 'Society5.0', 'GIGA', 'ESD'],
        correctIndex: 1,
        explanation: 'Society5.0。',
        questionAudio: 'audio/explain/28-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/28-07-voice.wav',
        answerDuration: 90,
    },
];
