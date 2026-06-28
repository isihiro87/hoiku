// 保存用ファイル - 02 高齢者虐待防止・障害者差別解消法・消費者保護（L23・L24）
// フォルダ: datas/kaigo/fukushi_seido/05_kenri_yogo/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　権利擁護と虐待防止';
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
        question: '障害者差別解消法で、障害者の求めに応じて行政機関等に義務づけられている対応は？',
        choices: ['社会的障壁の設置', '身体障害者手帳の確認', '合理的配慮', '不当な差別的取扱い'],
        correctIndex: 2,
        explanation: '障害者差別解消法は差別の解消や社会的障壁の除去を目的とし、行政機関等に可能な限りの合理的配慮を義務づけている。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '高齢者虐待の種類は、身体的・心理的・性的虐待とネグレクトのほか何？',
        choices: ['医療的虐待', '社会的虐待', '文化的虐待', '経済的虐待'],
        correctIndex: 3,
        explanation: '高齢者虐待防止法が定める虐待は、身体的虐待・ネグレクト・心理的虐待・性的虐待・経済的虐待の5種類である。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '訪問購入のクーリング・オフ期間は？',
        choices: ['8日間', '14日間', '20日間', '30日間'],
        correctIndex: 0,
        explanation: 'クーリング・オフは一定期間内なら無条件で解約できる制度で、訪問購入や訪問販売の期間は8日間と定められている。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
