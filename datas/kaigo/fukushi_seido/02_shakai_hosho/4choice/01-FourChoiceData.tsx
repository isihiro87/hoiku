// 保存用ファイル - 01 社会保障制度（基本的な考え方・仕組み）
// フォルダ: datas/kaigo/fukushi_seido/02_shakai_hosho/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　社会保障制度';
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
        question: '部門別社会保障給付費で構成割合が最も大きいのは？',
        choices: ['福祉その他', '医療', '年金', '介護'],
        correctIndex: 2,
        explanation: '部門別にみた社会保障給付費の構成割合は、大きい順に年金、医療、福祉その他。年金の割合が最も大きい。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '国家が国民に保障する最低限度の生活水準を表す用語は？',
        choices: ['ウェルビーイング', 'ソーシャルインクルージョン', 'リハビリテーション', 'ナショナルミニマム'],
        correctIndex: 3,
        explanation: 'ナショナル・ミニマムは、国家が国民に保障する最低限度の生活水準のこと。最低生活保障とも訳される。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: 'すべての人を社会の構成員として包み支え合うという考え方を表す用語は？',
        choices: ['エンパワメント', 'ソーシャルインクルージョン', 'ナショナルミニマム', 'ノーマライゼーション'],
        correctIndex: 1,
        explanation: 'ソーシャル・インクルージョンは社会的排除に対する用語で、人々を孤独や孤立、排除から援護し、社会の構成員として包み支え合う考え方。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '社会保障の体系を財源の拠出方法から大別すると、社会保険ともう一つは？',
        choices: ['社会扶助', '公衆衛生', '私保険', '社会手当'],
        correctIndex: 0,
        explanation: '社会保障の体系は財源の拠出方法から、社会保険と社会扶助（公的扶助・社会手当・社会サービス）に大別される。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
