// 保存用ファイル - 05 学校教育法②
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
        question: '学校教育法第11条で認められるのは?',
        choices: ['体罰', '出席停止', '補導', '懲戒'],
        correctIndex: 3,
        explanation: '懲戒は認められるが体罰は禁止(第11条但書)。出席停止は第35条の措置。',
        questionAudio: 'audio/explain/05-00-voice.wav',
        questionDuration: 99,
        answerAudio: 'audio/explain/05-01-voice.wav',
        answerDuration: 30,
    },
    {
        id: 'q2',
        question: '「幼稚園の目的」を定める学校教育法の条文は?',
        choices: ['第22条', '第1条', '第11条', '第72条'],
        correctIndex: 0,
        explanation: '幼稚園の目的は第22条。',
        questionAudio: 'audio/explain/05-02-voice.wav',
        questionDuration: 112,
        answerAudio: 'audio/explain/05-03-voice.wav',
        answerDuration: 43,
    },
    {
        id: 'q3',
        question: '「特別支援学校の目的」を定める学校教育法の条文は?',
        choices: ['第22条', '第72条', '第31条', '第81条'],
        correctIndex: 1,
        explanation: '特別支援学校の目的は第72条。',
        questionAudio: 'audio/explain/05-04-voice.wav',
        questionDuration: 134,
        answerAudio: 'audio/explain/05-05-voice.wav',
        answerDuration: 46,
    },
];
