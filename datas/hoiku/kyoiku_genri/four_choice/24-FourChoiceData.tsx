// 保存用ファイル - 24 教育評価の方法
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
        question: '集団の中での個人の位置を示す評価は?',
        choices: ['絶対評価', '相対評価', 'ポートフォリオ評価', '個人内評価'],
        correctIndex: 1,
        explanation: '相対評価。',
        questionAudio: 'audio/explain/24-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '教育目標に対する個人の到達度を示す評価は?',
        choices: ['相対評価', 'パフォーマンス評価', '絶対評価', '相互評価'],
        correctIndex: 2,
        explanation: '絶対評価(到達度評価)。',
        questionAudio: 'audio/explain/24-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '学習記録や作品をファイルに整理して評価に用いる方法は?',
        choices: ['相対評価', '絶対評価', '診断的評価', 'ポートフォリオ評価'],
        correctIndex: 3,
        explanation: 'ポートフォリオ評価。',
        questionAudio: 'audio/explain/24-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: 'レポートやプレゼンなどを「ルーブリック」で採点する評価は?',
        choices: ['相対評価', 'ポートフォリオ評価', '形成的評価', 'パフォーマンス評価'],
        correctIndex: 3,
        explanation: 'パフォーマンス評価。',
        questionAudio: 'audio/explain/24-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-07-voice.wav',
        answerDuration: 90,
    },
];
