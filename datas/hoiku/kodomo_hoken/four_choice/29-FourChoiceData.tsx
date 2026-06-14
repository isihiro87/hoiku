// 保存用ファイル - 29 子どもの心身の健康状態とその把握⑥
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
        question: '「プール熱」とも呼ばれ、アデノウイルスが原因のものは?',
        choices: ['ヘルパンギーナ', '咽頭結膜熱', '手足口病', 'りんご病'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/29-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/29-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '手足口病の原因として正しいものは?',
        choices: ['アデノウイルス', 'コクサッキー・エンテロウイルス', '溶連菌', 'パルボウイルス'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/29-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/29-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '苺舌が特徴的な感染症は?',
        choices: ['麻疹', '溶連菌感染症', '水痘', 'インフルエンザ'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/29-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/29-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '連続した咳(スタッカート)とレプリーゼがみられるのは?',
        choices: ['百日咳', 'マイコプラズマ', 'RSウイルス', 'インフルエンザ'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/29-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/29-07-voice.wav',
        answerDuration: 90,
    },
];
