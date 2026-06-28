// 保存用ファイル - 01 コミュニケーションの基本（ラポール・バイステック・非言語）
// フォルダ: datas/kaigo/kaigo_shien/04_communication_kiroku/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　コミュニケーションと記録';
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
        question: '表情やしぐさ、動作など言葉以外で伝える伝達を何という？',
        choices: ['フィードバック', '言語的コミュニケーション', '非言語的コミュニケーション', '準言語'],
        correctIndex: 2,
        explanation: 'コミュニケーションの基本は、言葉だけでなく表情やしぐさなど非言語的コミュニケーションにも注意して聞くこと。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '利用者と介護職の間に築く信頼関係を何という？',
        choices: ['ラポール', 'インフォームドコンセント', 'コンプライアンス', 'アカウンタビリティ'],
        correctIndex: 0,
        explanation: 'ラポールとは利用者との信頼関係のこと。形成には受容・共感・傾聴の3つの態度が重要。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '利用者の行動や態度をあるがままに受け入れる、バイステックの7原則の一つは？',
        choices: ['秘密保持', '受容', '非審判的態度', '個別化'],
        correctIndex: 1,
        explanation: '受容とは、利用者をあるがままに受け入れて信頼関係を築くこと。バイステックの7原則の一つ。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
];
