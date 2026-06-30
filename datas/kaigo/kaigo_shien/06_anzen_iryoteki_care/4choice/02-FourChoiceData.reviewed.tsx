// 保存用ファイル - 02 喀痰吸引・経管栄養（吸引範囲・手洗い）
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
        question: '経管栄養の感染予防として適切なのは？',
        choices: ['栄養剤を作り置きする', '容器は水洗いで再使用', '実施前に手を洗う', '栄養剤を常温で放置'],
        correctIndex: 2,
        explanation: '実施前は石けんと流水で丁寧に手を洗う。栄養剤の作り置き・常温放置や、容器を水洗いのみで再使用するのは細菌繁殖や汚染の原因となり不適切。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '介護福祉士が行える気管カニューレ内部の喀痰吸引の範囲は？',
        choices: ['範囲の制限はない', '気管分岐部まで', '喉頭まで', '気管カニューレを越えない'],
        correctIndex: 3,
        explanation: '介護福祉士の気管カニューレ内部の喀痰吸引は、気管カニューレを越えてはならない。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '介護福祉士が行える鼻腔内吸引の範囲は？',
        choices: ['喉頭まで', '咽頭の手前まで', '気管まで', '範囲の制限はない'],
        correctIndex: 1,
        explanation: '介護福祉士が行える鼻腔内吸引の範囲は咽頭の手前まで。鼻腔入口は出血しやすいので注意する。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
