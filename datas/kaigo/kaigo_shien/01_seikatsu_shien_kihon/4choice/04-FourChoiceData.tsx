// 保存用ファイル - 04 杖歩行・車いすの介護技術（生活支援技術の基本）
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
        question: 'ベッドから車いすへの移乗介護で、最初に行うことは？',
        choices: ['ベッドの高さ調節', '衣服の着替え', '車いすの位置調整', '目的を説明して同意を得る'],
        correctIndex: 3,
        explanation: '移乗介護ではまず利用者に介護の目的を説明し、理解・同意を得てから行う。あわせて気分や体調の確認も行う。',
        questionAudio: 'audio/explain/04_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '上腕のカフとグリップの2か所で支える杖は？',
        choices: ['ロフストランドクラッチ', '多点杖', 'T字杖', 'ウォーカーケイン'],
        correctIndex: 0,
        explanation: 'ロフストランドクラッチは上腕のカフとグリップの2か所で支える杖で、把持力が低下した人でも上肢の力を有効に利用できる。',
        questionAudio: 'audio/explain/04_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '車いすで溝を越えるとき、キャスターを上げるために踏むのは？',
        choices: ['ブレーキ', 'ハンドグリップ', 'ティッピングレバー', 'フットサポート'],
        correctIndex: 2,
        explanation: '溝を越えるときはティッピングレバーを踏んでキャスター（前輪）を上げ、前進して越える。一定時間停止する場合はブレーキをかける。',
        questionAudio: 'audio/explain/04_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_06-voice.wav',
        answerDuration: 60,
    },
];
