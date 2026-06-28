// 保存用ファイル - 05 介護保険制度（地域支援事業・事業者の指定）
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
        question: '地域包括支援センターに配置が義務づけられている職種は？',
        choices: ['介護福祉士・看護師・医師', '保健師・社会福祉士・主任介護支援専門員', '社会保険労務士', '身体障害者福祉司'],
        correctIndex: 1,
        explanation: '地域包括支援センターには、常勤専従の保健師、社会福祉士、主任介護支援専門員が配置される。',
        questionAudio: 'audio/explain/05_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/05_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '介護予防・日常生活支援総合事業に含まれる事業は？',
        choices: ['第一号訪問事業', '介護給付', '予防給付', '権利擁護事業'],
        correctIndex: 0,
        explanation: '第一号訪問事業（訪問型サービス）は、地域支援事業の介護予防・日常生活支援総合事業に含まれる事業である。',
        questionAudio: 'audio/explain/05_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/05_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '地域密着型サービスの事業者の指定・指揮監督を行うのは？',
        choices: ['都道府県', '国', '保健所', '市町村'],
        correctIndex: 3,
        explanation: '地域密着型サービスの事業者指定または指揮監督を行うのは市町村である。都道府県知事が指定するのは居宅・介護予防・施設サービスの3つ。',
        questionAudio: 'audio/explain/05_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/05_06-voice.wav',
        answerDuration: 60,
    },
];
