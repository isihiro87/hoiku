// 保存用ファイル - 03 排泄・失禁・便秘・下痢の介護技術（食事・入浴・排泄の介護）
// フォルダ: datas/kaigo/kaigo_shien/02_shokuji_nyuyoku_haisetsu/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　食事・入浴・排泄の介護';
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
        question: '陰部清拭で、尿路感染を防ぐ拭く方向は？',
        choices: ['後ろから前', '外から中心', '前から後ろ', '中心から外'],
        correctIndex: 2,
        explanation: '陰部清拭は、大腸菌による尿路感染症を防ぐため、必ず尿道口から肛門部に向かって（前から後ろへ）一方向に拭く。',
        questionAudio: 'audio/explain/03_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: 'おむつの長期使用でみられるのは？',
        choices: ['尿意・便意の後退', '自立の促進', '便秘の改善', '感染の予防'],
        correctIndex: 0,
        explanation: 'おむつを長期使用すると常時排尿態勢をとるようになり、尿意・便意が後退しやすいため、安易な使用は避ける。',
        questionAudio: 'audio/explain/03_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '直腸性便秘の人に、排便を習慣づけるため誘導するのはいつ？',
        choices: ['起床直後', '就寝前', '夕食前', '朝食後'],
        correctIndex: 3,
        explanation: '直腸性便秘では規則的な排便を習慣づけることが大切で、朝食後にトイレへ誘導する。水分や食物繊維も多く摂る。',
        questionAudio: 'audio/explain/03_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_06-voice.wav',
        answerDuration: 60,
    },
];
