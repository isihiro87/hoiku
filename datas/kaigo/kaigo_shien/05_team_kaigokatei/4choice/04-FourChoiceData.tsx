// 保存用ファイル - 04 チームアプローチ・互助・地域ケア会議
// フォルダ: datas/kaigo/kaigo_shien/05_team_kaigokatei/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　チームケアと介護過程';
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
        question: 'チームアプローチで大切なことは？',
        choices: ['専門職以外は除く', '連携せず独自に動く', 'チーム全員が共通認識をもつ', '他職種の理解は不要'],
        correctIndex: 2,
        explanation: '職種により関わり方が異なるため、チーム全員が共通認識をもち、互いの専門性や立場を尊重することが大切。',
        questionAudio: 'audio/explain/04_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: 'ボランティア活動や住民の支え合いが位置づけられるのは？',
        choices: ['公助', '互助', '自助', '共助'],
        correctIndex: 1,
        explanation: '地域包括ケアシステムでは、住民の支え合いやボランティア活動は「互助」に位置づけられる。',
        questionAudio: 'audio/explain/04_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '地域包括ケアシステムの実現に向けて設置される会議は？',
        choices: ['サービス担当者会議', 'デスカンファレンス', '介護認定審査会', '地域ケア会議'],
        correctIndex: 3,
        explanation: '地域包括ケアシステムの実現に向けて地域ケア会議が設置される。構成員には介護支援専門員などが含まれる。',
        questionAudio: 'audio/explain/04_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_06-voice.wav',
        answerDuration: 60,
    },
];
