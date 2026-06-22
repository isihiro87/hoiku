// 保存用ファイル - 04 栄養に関する基本的知識①
// フォルダ: datas/hoiku/shoku_eiyo/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　食と栄養';
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
        question: '1gあたり約9kcalのエネルギーを産生する栄養素は?',
        choices: ['炭水化物', 'たんぱく質', '脂質', 'ビタミン'],
        correctIndex: 2,
        explanation: '脂質は9kcal/g。炭水化物とたんぱく質は4kcal/g。',
        questionAudio: 'audio/explain/04-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/04-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '五大栄養素に**含まれない**ものは?',
        choices: ['炭水化物', '脂質', '水分', 'ビタミン'],
        correctIndex: 2,
        explanation: '五大栄養素は炭水化物・脂質・たんぱく質・無機質（ミネラル）・ビタミン。水分は含まない。',
        questionAudio: 'audio/explain/04-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/04-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '炭水化物について、正しいものは?',
        choices: ['1gあたり約9kcalのエネルギーを産生する', '体内で合成されるため摂取の必要はない', '全エネルギーの約60%を占める', '脂溶性の栄養素である'],
        correctIndex: 2,
        explanation: '糖質は全エネルギーの約60%を占める主要なエネルギー源。',
        questionAudio: 'audio/explain/04-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/04-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '単糖類に分類されるものは?',
        choices: ['麦芽糖', 'ショ糖', '乳糖', 'ぶどう糖'],
        correctIndex: 3,
        explanation: 'ぶどう糖・果糖・ガラクトースが単糖類。麦芽糖・ショ糖・乳糖は二糖類（少糖類）。',
        questionAudio: 'audio/explain/04-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/04-07-voice.wav',
        answerDuration: 90,
    },
];
