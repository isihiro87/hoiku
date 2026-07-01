// 保存用ファイル - 05 消化器・泌尿器の仕組み（L29・L30）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/05_kokoro_to_karada/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　こころとからだの仕組み';
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
        question: '代謝・解毒・排泄などを行う臓器は？',
        choices: ['胆嚢', '膵臓', '肝臓', '腎臓'],
        correctIndex: 2,
        explanation: '肝臓では、薬剤やアルコールなど異物や、体内で産生された老廃物の代謝・解毒・排泄が行われる。',
        questionAudio: 'audio/explain/05_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/05_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '食物が気道に入るのを防いでいる、ふた状の部位は？',
        choices: ['喉頭蓋', '口蓋垂', '口蓋扁桃', '甲状軟骨'],
        correctIndex: 0,
        explanation: '喉頭蓋は反射機能により、嚥下の際に食物などが気道に入るのを防いでいる。',
        questionAudio: 'audio/explain/05_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/05_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '健康な人の尿のpHは？',
        choices: ['中性', '弱酸性', 'アルカリ性', '強酸性'],
        correctIndex: 1,
        explanation: '健康な人の尿は弱酸性（pH5〜7）である。尿の色や臭いは水分量や食べ物、薬などの影響で変化する。',
        questionAudio: 'audio/explain/05_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/05_06-voice.wav',
        answerDuration: 60,
    },
];
