// 保存用ファイル - 04 介護保険制度（保険給付・施設・地域密着型サービス）
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
        question: '訪問・通所・短期宿泊を組み合わせて提供する地域密着型サービスは？',
        choices: ['認知症対応型共同生活介護', '小規模多機能型居宅介護', '定期巡回・随時対応型訪問介護看護', '認知症対応型通所介護'],
        correctIndex: 1,
        explanation: '小規模多機能型居宅介護は、居宅への訪問、通所、短期間の宿泊を組み合わせて提供されるサービスである。',
        questionAudio: 'audio/explain/04_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '入浴や排泄に使う福祉用具は貸与に向かないため、何の対象となる？',
        choices: ['福祉用具貸与', '居宅介護住宅改修', '施設サービス', '特定福祉用具販売'],
        correctIndex: 3,
        explanation: '入浴や排泄に使用するものは貸与に向かないため、福祉用具貸与ではなく特定福祉用具販売の対象種目とされている。',
        questionAudio: 'audio/explain/04_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '介護医療院を開設しようとする者が許可を受ける相手は？',
        choices: ['市町村長', '厚生労働大臣', '都道府県知事', '保健所長'],
        correctIndex: 2,
        explanation: '介護保険法において、介護医療院を開設しようとする者は都道府県知事の許可を受けなければならないと規定されている。',
        questionAudio: 'audio/explain/04_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_06-voice.wav',
        answerDuration: 60,
    },
];
