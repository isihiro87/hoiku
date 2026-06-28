// 保存用ファイル - 02 衣服の着脱・移動の介護技術（生活支援技術の基本）
// フォルダ: datas/kaigo/kaigo_shien/01_seikatsu_shien_kihon/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　生活支援技術の基本';
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
        question: '支持基底面や重心移動、てこの原理を活用する技術は？',
        choices: ['ボディメカニクス', 'エンパワメント', 'ノーマライゼーション', 'リハビリテーション'],
        correctIndex: 0,
        explanation: '移動の介護では、支持基底面を広くとる、重心を近づけ低くする、大きな筋群を活用するなどボディメカニクスを活用する。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '前開きの上着を着せるとき、最初に袖を通すのは？',
        choices: ['健側', 'どちらでもよい', '患側', '両方同時'],
        correctIndex: 2,
        explanation: '脱健着患の原則に従い、着せるときは患側の袖から通す。麻痺がある人には残存機能を活用し、自立支援の介護を行う。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '仰臥位から側臥位にするとき、膝を曲げて倒す順番は？',
        choices: ['足→膝', '膝→肩', '肩→膝', '腰→肩'],
        correctIndex: 1,
        explanation: '体位変換は身体の自然な動きに従い、膝→肩の順に倒すと骨盤が回転し、上体も自然に回転しやすくなる。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
