// 保存用ファイル - 18 近代教育の制度史
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
        question: '「教育ニ関スル勅語(教育勅語)」が発せられたのは何年?',
        choices: ['1872年', '1890年', '1885年', '1889年'],
        correctIndex: 1,
        explanation: '1890年(明治23年)。',
        questionAudio: 'audio/explain/18-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '児童文芸雑誌『赤い鳥』を刊行したのは?',
        choices: ['芦田恵之助', '北原白秋', '倉橋惣三', '鈴木三重吉'],
        correctIndex: 3,
        explanation: '鈴木三重吉。',
        questionAudio: 'audio/explain/18-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '文部省が設置されたのは何年?',
        choices: ['1871年', '1879年', '1886年', '1890年'],
        correctIndex: 0,
        explanation: '1871年(明治4年)。',
        questionAudio: 'audio/explain/18-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-05-voice.wav',
        answerDuration: 90,
    },
];
