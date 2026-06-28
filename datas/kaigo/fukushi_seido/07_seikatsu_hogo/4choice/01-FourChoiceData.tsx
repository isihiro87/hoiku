// 保存用ファイル - 01 生活保護制度・生活困窮者自立支援制度（L28・L29）
// フォルダ: datas/kaigo/fukushi_seido/07_seikatsu_hogo/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　生活保護と生活困窮者支援';
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
        question: '生活保護の費用のうち、国が負担する割合は？',
        choices: ['2分の1', '3分の2', '4分の3', '全額'],
        correctIndex: 2,
        explanation: '生活保護の費用はすべて公費負担で、国が4分の3を負担し、残りの4分の1を地方公共団体が負担する。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '生活保護の扶助のうち、医療扶助とともに現物給付を原則とするのは？',
        choices: ['介護扶助', '教育扶助', '住宅扶助', '生活扶助'],
        correctIndex: 0,
        explanation: '生活保護の8つの扶助のうち、医療扶助と介護扶助は現物給付を原則とし、それ以外の扶助は金銭給付を原則とする。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '生活困窮者自立支援法の必須事業は、自立相談支援事業と何？',
        choices: ['就労準備支援事業', '一時生活支援事業', '住居確保給付金', '子どもの学習支援'],
        correctIndex: 2,
        explanation: '生活困窮者自立支援制度は生活保護に至る前の第2のセーフティネットで、必須事業は自立相談支援事業と住居確保給付金である。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '住居のない生活困窮者に、一定期間、宿泊場所や食事を提供する事業は？',
        choices: ['住居確保給付金', '自立相談支援事業', '子どもの学習支援事業', '一時生活支援事業'],
        correctIndex: 3,
        explanation: '一時生活支援事業は、住居のない生活困窮者に一定期間、宿泊場所の供与や食事提供などを行う事業である。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
