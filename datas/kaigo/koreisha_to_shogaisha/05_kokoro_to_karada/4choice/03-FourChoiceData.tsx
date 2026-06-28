// 保存用ファイル - 03 感覚器・循環器の仕組み（L26・L27）
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
        question: '凸レンズのように光を屈折させ、網膜に焦点を合わせる目の部分は？',
        choices: ['角膜', '虹彩', '網膜', '水晶体'],
        correctIndex: 3,
        explanation: '水晶体は凸レンズのように光を屈折させ、厚さを変えて網膜に像の焦点を合わせる。',
        questionAudio: 'audio/explain/03_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '老化に伴う感音性難聴で聞き取りにくくなるのは？',
        choices: ['低音', '子音', '大きな声', '母音'],
        correctIndex: 1,
        explanation: '老化に伴う感音性難聴では、母音は聞き取れても子音が聞き取りにくくなり、聞き間違いが増える。高音域ほど聞こえにくい。',
        questionAudio: 'audio/explain/03_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '肺動脈に流れている血液は？',
        choices: ['動脈血', '血漿', '静脈血', 'リンパ液'],
        correctIndex: 2,
        explanation: '肺動脈は右心室から肺へ向かう血管で、酸素が少なく二酸化炭素が多い静脈血が流れている。',
        questionAudio: 'audio/explain/03_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_06-voice.wav',
        answerDuration: 60,
    },
];
