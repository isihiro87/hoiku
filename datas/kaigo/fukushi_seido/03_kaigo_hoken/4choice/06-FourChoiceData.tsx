// 保存用ファイル - 06 介護保険制度（情報の公表・国と都道府県と市町村の責務）
// フォルダ: datas/kaigo/fukushi_seido/03_kaigo_hoken/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　介護保険制度';
export const subtitleData = '介護4択';

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
        question: '介護支援専門員（ケアマネジャー）の登録を行うのは？',
        choices: ['地域包括支援センター', '都道府県', '国', '市町村'],
        correctIndex: 1,
        explanation: '介護支援専門員（ケアマネジャー）の登録は、都道府県が行う事務である。',
        questionAudio: 'audio/explain/06_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/06_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '事業者から介護サービス情報の報告を受け、その内容を公表する義務があるのは？',
        choices: ['都道府県知事', '市町村長', '指定情報公表センター', '厚生労働大臣'],
        correctIndex: 0,
        explanation: '介護サービス事業者から報告を受けた都道府県知事は、その報告内容を公表しなければならない。',
        questionAudio: 'audio/explain/06_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/06_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '都道府県が策定する介護保険の計画は？',
        choices: ['市町村介護保険事業計画', '地域福祉計画', '介護保険事業計画', '介護保険事業支援計画'],
        correctIndex: 3,
        explanation: '介護保険事業計画は市町村が策定し、都道府県が策定するのは介護保険事業支援計画である。',
        questionAudio: 'audio/explain/06_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/06_06-voice.wav',
        answerDuration: 60,
    },
];
