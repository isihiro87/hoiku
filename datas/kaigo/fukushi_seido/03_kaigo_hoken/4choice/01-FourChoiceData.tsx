// 保存用ファイル - 01 介護保険制度（創設・被保険者）
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
        question: '介護保険制度の第1号被保険者の年齢は？',
        choices: ['40歳以上65歳未満', '75歳以上', '20歳以上', '65歳以上'],
        correctIndex: 3,
        explanation: '65歳以上の者が第1号被保険者。40歳以上65歳未満で医療保険に加入している者が第2号被保険者である。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '2018年施行の介護保険制度改正で創設された、医療と生活機能を兼ね備えた施設は？',
        choices: ['介護医療院', '介護療養型医療施設', '介護老人保健施設', '地域包括支援センター'],
        correctIndex: 0,
        explanation: '介護医療院は介護保険施設の一つで、日常的な医学管理や看取り・ターミナルなどの医療機能と生活施設としての機能を兼ね備える。2018年4月に創設された。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '介護保険制度が採用している利用者負担の方式は？',
        choices: ['応能負担', '無償負担', '応益負担', '定額負担'],
        correctIndex: 2,
        explanation: '介護保険制度では、利用者が受けたサービスの量に応じて負担額を決定する応益負担を採用している。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
];
