// 保存用ファイル - 01 整容・口腔ケア／衣服の着脱（生活支援技術の基本）
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
        question: '口腔ケアが予防する肺炎は？',
        choices: ['誤嚥性肺炎', 'マイコプラズマ肺炎', '細菌性肺炎', '間質性肺炎'],
        correctIndex: 0,
        explanation: '口腔ケアは、う蝕や口腔粘膜疾患、誤嚥性肺炎、口臭の予防を目的として行われる。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '点眼後に軽く押さえる目の部位は？',
        choices: ['まぶた', '目尻', 'こめかみ', '涙点（目頭）'],
        correctIndex: 3,
        explanation: '点眼後は薬の効果を高めるため、しばらく目を閉じて涙点（目頭）を軽く押さえる。複数の点眼薬は5分程度の間隔をおく。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '麻痺がある人の着脱の原則は？',
        choices: ['患側優先', '脱健着患', '左右同時', '着患脱健'],
        correctIndex: 1,
        explanation: '麻痺がある場合の着脱は脱健着患の原則に従い、脱ぐときは健側から、着るときは患側から行う。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
];
