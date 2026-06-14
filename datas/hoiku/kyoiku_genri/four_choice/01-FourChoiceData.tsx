// 保存用ファイル - 01 日本国憲法の基礎
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
        question: '日本の最高法規は?',
        choices: ['教育基本法', '学校教育法', '児童福祉法', '日本国憲法'],
        correctIndex: 3,
        explanation: '日本国憲法は国の最高法規(第98条)。',
        questionAudio: 'audio/explain/01-00-voice.wav',
        questionDuration: 59,
        answerAudio: 'audio/explain/01-01-voice.wav',
        answerDuration: 49,
    },
    {
        id: 'q2',
        question: '日本国憲法の三大原理に含まれないのは?',
        choices: ['国民主権', '平和主義', '義務教育の無償', '基本的人権の尊重'],
        correctIndex: 2,
        explanation: '三大原理は国民主権・平和主義・基本的人権の尊重。',
        questionAudio: 'audio/explain/01-02-voice.wav',
        questionDuration: 98,
        answerAudio: 'audio/explain/01-03-voice.wav',
        answerDuration: 52,
    },
    {
        id: 'q3',
        question: '日本国憲法が制定(公布)されたのは何年?',
        choices: ['1946年', '1889年', '1947年', '1951年'],
        correctIndex: 0,
        explanation: '1946年(昭和21年)公布。施行は翌1947年。',
        questionAudio: 'audio/explain/01-04-voice.wav',
        questionDuration: 88,
        answerAudio: 'audio/explain/01-05-voice.wav',
        answerDuration: 62,
    },
    {
        id: 'q4',
        question: '「学問の自由」を定めた憲法の条文は?',
        choices: ['第13条', '第23条', '第25条', '第26条'],
        correctIndex: 1,
        explanation: '学問の自由は日本国憲法第23条。',
        questionAudio: 'audio/explain/01-06-voice.wav',
        questionDuration: 93,
        answerAudio: 'audio/explain/01-07-voice.wav',
        answerDuration: 47,
    },
];
