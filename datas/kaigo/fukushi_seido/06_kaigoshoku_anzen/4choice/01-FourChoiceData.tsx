// 保存用ファイル - 01 介護職の安全・労働環境整備（L25・L26）
// フォルダ: datas/kaigo/fukushi_seido/06_kaigoshoku_anzen/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　介護職の安全と労働環境';
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
        question: '腰痛予防のため、身体の構造や力学を活用した介護技術を何という？',
        choices: ['ストレングス', 'コンプライアンス', 'ボディメカニクス', 'リハビリテーション'],
        correctIndex: 2,
        explanation: '腰痛予防には、福祉用具の積極的な使用やボディメカニクスの活用、静的ストレッチングなどが有効である。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '労働者が自分のストレス状態を把握し、メンタルの不調を未然に防ぐために行う検査は？',
        choices: ['健康診断', '人間ドック', '特定保健指導', 'ストレスチェック'],
        correctIndex: 3,
        explanation: 'ストレスチェックは労働者が自分のストレス状態を知り対処するための検査。面接指導の結果は事業所が5年間保存する。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '介護休業は、対象家族1人につき通算何日を限度に取得できる？',
        choices: ['93日', '103日', '63日', '83日'],
        correctIndex: 0,
        explanation: '介護休業は育児・介護休業法に基づき、対象家族1人につき通算93日を限度に、3回まで分割して取得できる。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
];
