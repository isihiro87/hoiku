// 保存用ファイル - 25 生涯学習の理論
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
        question: '1965年に「生涯教育論」を提唱したフランスの人物は?',
        choices: ['ポール・ラングラン', 'ハッチンス', 'ノールズ', 'レーン'],
        correctIndex: 0,
        explanation: 'ラングラン。',
        questionAudio: 'audio/explain/25-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'OECDが「リカレント教育」を提唱したのは何年?',
        choices: ['1965年', '1973年', '1981年', '1990年'],
        correctIndex: 1,
        explanation: '1973年(昭和48年)。',
        questionAudio: 'audio/explain/25-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '「学習社会」という概念を提唱したのは?',
        choices: ['ハッチンス', 'ノールズ', 'ラングラン', 'レーン'],
        correctIndex: 0,
        explanation: 'ハッチンス。',
        questionAudio: 'audio/explain/25-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '成人教育学「アンドラゴジー」を提唱したのは?',
        choices: ['ハッチンス', 'ラングラン', 'ノールズ', 'レーン'],
        correctIndex: 2,
        explanation: 'ノールズ。',
        questionAudio: 'audio/explain/25-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-07-voice.wav',
        answerDuration: 90,
    },
];
