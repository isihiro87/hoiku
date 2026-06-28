// 保存用ファイル - 03 介護保険制度（利用者負担・居宅サービス）
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
        question: '利用者がいったん費用全額を支払い、後で保険給付分の払い戻しを受ける方式は？',
        choices: ['現物給付', '償還払い', '現金給付', '法定代理受領'],
        correctIndex: 1,
        explanation: '福祉用具購入費や住宅改修費などは、利用者が全額を支払った後に保険給付分の払い戻しを受ける償還払いとされている。',
        questionAudio: 'audio/explain/03_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '2018年8月から年金収入等340万円以上の第1号被保険者に導入された自己負担割合は？',
        choices: ['3割', '5割', '1割', '2割'],
        correctIndex: 0,
        explanation: '2018年8月から一定以上の所得のある利用者に3割負担が導入され、自己負担割合は1割・2割・3割の3段階となった。',
        questionAudio: 'audio/explain/03_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '通所サービス・短期入所サービス等で実施が義務づけられている訓練は？',
        choices: ['身体拘束適正化研修', '感染症対策訓練', '認知症対応訓練', '非常災害対策訓練'],
        correctIndex: 3,
        explanation: '通所サービス、短期入所サービス、特定施設入居者生活介護では、非常災害対策訓練の実施が義務づけられている。',
        questionAudio: 'audio/explain/03_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_06-voice.wav',
        answerDuration: 60,
    },
];
