// 保存用ファイル - 17 幕末〜明治の教育
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
        question: '松下村塾を主宰したのは?',
        choices: ['緒方洪庵', '広瀬淡窓', '吉田松陰', '福沢諭吉'],
        correctIndex: 2,
        explanation: '吉田松陰。',
        questionAudio: 'audio/explain/17-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '『学問のすゝめ』を刊行したのは?',
        choices: ['森有礼', '福沢諭吉', '鈴木三重吉', '芦田恵之助'],
        correctIndex: 1,
        explanation: '福沢諭吉。',
        questionAudio: 'audio/explain/17-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '「学制」が頒布されたのは何年?',
        choices: ['1872年', '1871年', '1886年', '1890年'],
        correctIndex: 0,
        explanation: '1872年(明治5年)、日本初の近代学校制度。',
        questionAudio: 'audio/explain/17-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-05-voice.wav',
        answerDuration: 90,
    },
];
