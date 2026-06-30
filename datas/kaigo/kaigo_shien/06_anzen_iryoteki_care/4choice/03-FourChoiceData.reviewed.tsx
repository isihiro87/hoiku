// 保存用ファイル - 03 経管栄養の体位・終末期（デスカンファレンス・グリーフケア）
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
        question: '経管栄養の注入時、利用者の体位として適切なのは？',
        choices: ['仰臥位', '側臥位', '腹臥位', '半座位'],
        correctIndex: 3,
        explanation: '仰臥位のまま注入すると胃食道逆流が生じやすいため、経管栄養の注入時は半座位とする。',
        questionAudio: 'audio/explain/03_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '利用者の死後にケアを振り返り、悲しみを共有する場を何という？',
        choices: ['スーパービジョン', 'デスカンファレンス', 'ケアカンファレンス', 'サービス担当者会議'],
        correctIndex: 1,
        explanation: 'デスカンファレンスは、利用者の死後にケアを振り返り、悲しみを共有して次のケアに活かす場。',
        questionAudio: 'audio/explain/03_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '遺族を支え、悲しみを乗り越えて新たな生活を送れるよう支援することを何という？',
        choices: ['エンゼルケア', 'ターミナルケア', 'グリーフケア', 'レスパイトケア'],
        correctIndex: 2,
        explanation: 'グリーフケアは「悲嘆」のケアともいわれ、利用者が亡くなった後も遺族を支える支援のこと。',
        questionAudio: 'audio/explain/03_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_06-voice.wav',
        answerDuration: 60,
    },
];
