// 保存用ファイル - 02 傾聴の基本姿勢・サービス担当者会議・記録
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
        question: '話を聴く際の基本姿勢として適切なのは？',
        choices: ['相手の真横に位置する', '視線を適切に合わせる', '腕や足を組む', '身体をまっすぐにする'],
        correctIndex: 1,
        explanation: '話を聴く際は相手と視線を適切に合わせ、相手が気持ちよく話せるようにすることが大切。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: 'サービス担当者会議を招集するのは？',
        choices: ['市町村長', '主治医', '介護福祉士', '介護支援専門員'],
        correctIndex: 3,
        explanation: 'サービス担当者会議の招集は介護支援専門員（ケアマネジャー）の職務。専門用語を避けわかりやすく説明する。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '介護記録の取り扱いとして正しいのは？',
        choices: ['本人や家族に開示しない', '誤記は修正液で消す', '多職種で情報共有する', '主観を中心に書く'],
        correctIndex: 2,
        explanation: '記録は多職種間の情報共有や現任教育に活用する。客観的事実を中心に書き、誤記は二重線で訂正（修正液は不可）、利用者本人の開示請求の対象にもなる。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
