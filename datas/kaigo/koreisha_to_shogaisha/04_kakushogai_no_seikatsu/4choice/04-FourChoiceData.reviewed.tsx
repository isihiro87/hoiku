// 保存用ファイル - 04 精神障害者・高次脳機能障害者の生活（L20・L21）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/04_kakushogai_no_seikatsu/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　障害者の生活';
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
        question: '内因性精神障害に分類される疾患は？',
        choices: ['アルコール依存症', 'パニック障害', '認知症', '統合失調症'],
        correctIndex: 3,
        explanation: '精神障害は内因性・外因性・心因性に大別される。統合失調症は内因性精神障害の代表的な疾患である。',
        questionAudio: 'audio/explain/04_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '統合失調症の幻覚・妄想・興奮などの症状を何という？',
        choices: ['陰性症状', '陽性症状', '中核症状', '周辺症状'],
        correctIndex: 1,
        explanation: '統合失調症の症状は、幻覚・妄想・興奮などの陽性症状と、無関心・意欲欠如などの陰性症状に分けられる。',
        questionAudio: 'audio/explain/04_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '感情をコントロールできず怒りを爆発させる、高次脳機能障害の症状は？',
        choices: ['注意障害', '記憶障害', '社会的行動障害', '遂行機能障害'],
        correctIndex: 2,
        explanation: '社会的行動障害では感情を適切にコントロールできず、興奮して衝動的になったり極端に消極的になったりする。',
        questionAudio: 'audio/explain/04_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_06-voice.wav',
        answerDuration: 60,
    },
];
