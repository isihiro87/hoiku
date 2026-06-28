// 保存用ファイル - 03 社会保障制度（医療保険・労働保険）
// フォルダ: datas/kaigo/fukushi_seido/02_shakai_hosho/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　社会保障制度';
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
        question: '労働者災害補償保険（労災保険）の保険料を負担するのは？',
        choices: ['労働者のみ', '国のみ', '事業主と労働者で折半', '全額事業主'],
        correctIndex: 3,
        explanation: '労災保険の保険料は全額事業主が負担する（若干の国庫負担あり）。労働者の負担はない。',
        questionAudio: 'audio/explain/03_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '国民健康保険のように、地域を単位として運営される保険を何という？',
        choices: ['地域保険', '被用者保険', '共済保険', '職域保険'],
        correctIndex: 0,
        explanation: '国民健康保険は地域保険で、保険者は都道府県・市町村と国民健康保険組合である。',
        questionAudio: 'audio/explain/03_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '雇用保険と労働者災害補償保険を合わせた総称は？',
        choices: ['社会扶助', '労働保険', '医療保険', '社会保険'],
        correctIndex: 1,
        explanation: '雇用保険と労働者災害補償保険の両者を合わせて労働保険とよぶ。',
        questionAudio: 'audio/explain/03_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_06-voice.wav',
        answerDuration: 60,
    },
];
