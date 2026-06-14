// 保存用ファイル - 04 学校教育法①
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
        question: '学校教育法第1条の「学校」に含まれないのは?',
        choices: ['幼稚園', '義務教育学校', '保育所', '高等専門学校'],
        correctIndex: 2,
        explanation: '保育所は児童福祉施設で、第1条の学校には含まれない。',
        questionAudio: 'audio/explain/04-00-voice.wav',
        questionDuration: 104,
        answerAudio: 'audio/explain/04-01-voice.wav',
        answerDuration: 29,
    },
    {
        id: 'q2',
        question: '学校教育法が敷いた学校体系は?',
        choices: ['複線型', '分岐型', '二元型', '六・三・三・四制の単線型'],
        correctIndex: 3,
        explanation: '単線型の六・三・三・四制。',
        questionAudio: 'audio/explain/04-02-voice.wav',
        questionDuration: 82,
        answerAudio: 'audio/explain/04-03-voice.wav',
        answerDuration: 95,
    },
    {
        id: 'q3',
        question: '学校教育法が公布されたのは何年?',
        choices: ['1890年', '1947年', '1946年', '1956年'],
        correctIndex: 1,
        explanation: '1947年。教育基本法と同時に公布。',
        questionAudio: 'audio/explain/04-04-voice.wav',
        questionDuration: 84,
        answerAudio: 'audio/explain/04-05-voice.wav',
        answerDuration: 63,
    },
];
