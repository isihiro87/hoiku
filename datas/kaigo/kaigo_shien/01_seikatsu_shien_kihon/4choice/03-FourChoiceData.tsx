// 保存用ファイル - 03 褥瘡予防・杖歩行の介護技術（生活支援技術の基本）
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
        question: '仰臥位での褥瘡の好発部位は？',
        choices: ['腹部', '足趾部', '側頭部', '仙骨部'],
        correctIndex: 3,
        explanation: '褥瘡の好発部位は、仰臥位では仙骨部、側臥位では大腿骨大転子部、座位では坐骨結節部である。',
        questionAudio: 'audio/explain/03_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '枕の高さ調整で、頸部の自然な湾曲を保つ角度は？',
        choices: ['60°程度', '15°程度', '45°程度', '30°程度'],
        correctIndex: 1,
        explanation: '枕の高さは、頸部の緊張が少なく自然な湾曲を保つよう、頸部の角度が15°程度になるよう調整する。',
        questionAudio: 'audio/explain/03_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '視覚障害者の誘導で、利用者につかんでもらう場所は？',
        choices: ['利用者自身の腕', '介助者の肩', '介助者の肘の少し上', '介助者の手首'],
        correctIndex: 2,
        explanation: '視覚障害者の誘導では、利用者に介助者の肘の少し上をつかんでもらい、白杖を持つ手の反対側の半歩前に立つのが基本。',
        questionAudio: 'audio/explain/03_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_06-voice.wav',
        answerDuration: 60,
    },
];
