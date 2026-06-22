// 保存用ファイル - 33 子どもの心身の健康状態とその把握⑩
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
        question: '自閉スペクトラム症への支援として適切なのは?',
        choices: ['口頭のみで指示する', '絵や写真で示す', '大きな音で慣れさせる', 'こだわりを禁止する'],
        correctIndex: 1,
        explanation: '自閉スペクトラム症には絵や写真など視覚的に示すとよい。',
        questionAudio: 'audio/explain/33-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/33-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '先天性心疾患で最も多いのは?',
        choices: ['ファロー四徴症', '心室中隔欠損症', '動脈管開存', '川崎病'],
        correctIndex: 1,
        explanation: '先天性心疾患で最も多いのは心室中隔欠損症。',
        questionAudio: 'audio/explain/33-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/33-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: 'てんかんの発病が最も多いのは?',
        choices: ['3歳以下', '学童期', '思春期', '成人期'],
        correctIndex: 0,
        explanation: 'てんかんの発病は3歳以下に最も多い。',
        questionAudio: 'audio/explain/33-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/33-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '知的障害(精神遅滞)の診断基準とされる知能指数(IQ)は?',
        choices: ['70以下', '90以下', '100以下', '50以下'],
        correctIndex: 0,
        explanation: '知的障害の目安はIQ70以下。',
        questionAudio: 'audio/explain/33-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/33-07-voice.wav',
        answerDuration: 90,
    },
];
