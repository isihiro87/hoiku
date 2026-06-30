// 保存用ファイル - 01 感染症予防・医療的ケア（消毒・3原則・経管栄養・チーム医療）
// フォルダ: datas/kaigo/kaigo_shien/06_anzen_iryoteki_care/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　安全・医療的ケア・終末期';
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
        question: 'ノロウイルスの嘔吐物の消毒に使う薬剤は？',
        choices: ['逆性石けん', '次亜塩素酸ナトリウム液', 'クレゾール', 'エタノール消毒液'],
        correctIndex: 1,
        explanation: 'ノロウイルスにはエタノールが効きにくく、嘔吐物の消毒には次亜塩素酸ナトリウム液を使う。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '感染予防の3原則は、感染源の排除・感染経路の遮断とあと一つは？',
        choices: ['手指衛生の励行', '環境表面の定期消毒', '宿主の抵抗力の向上', '標準予防策の徹底'],
        correctIndex: 2,
        explanation: '感染予防の3原則は、感染源の排除、感染経路の遮断、宿主の感染に対する抵抗力の向上である。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '一定の要件を満たした介護福祉士が実施できる経管栄養の行為は？',
        choices: ['栄養剤の種類の変更', '注入速度の決定', '胃ろうカテーテルの交換', '栄養剤の注入'],
        correctIndex: 3,
        explanation: '介護福祉士が実施できるのは栄養剤の注入。種類の変更・速度の決定・カテーテルの交換は医師や看護職が行う。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '喀痰吸引や経管栄養を担う介護福祉職も加わる、医療を提供する体制を何という？',
        choices: ['チーム医療', '地域包括ケア', '多職種連携', 'チームアプローチ'],
        correctIndex: 0,
        explanation: '介護福祉職も喀痰吸引と経管栄養を担うチーム医療の一員であり、医療の倫理を守る必要がある。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
