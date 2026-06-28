// 保存用ファイル - 01 認知症の理解（L5認知症に関する施策・L6認知症の検査と診断）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/02_ninchisho_no_rikai/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　認知症の理解';
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
        question: '2019年に新オレンジプランを引き継いでまとめられた認知症施策は？',
        choices: ['ゴールドプラン', '認知症施策推進大綱', '新オレンジプラン', 'オレンジプラン'],
        correctIndex: 1,
        explanation: '2019（令和元）年6月、新オレンジプランを引き継ぐ「認知症施策推進大綱」がとりまとめられた。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '認知症疾患医療センターを設置するのは？',
        choices: ['都道府県・政令指定都市', '市町村', '保健所', '国'],
        correctIndex: 0,
        explanation: '認知症疾患医療センターは都道府県、政令指定都市に設置され、地域の認知症医療の連携を強化する役割をもつ。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: 'アルツハイマー型認知症の重症度判定に用いる評価尺度は？',
        choices: ['IADL', '長谷川式', 'FAST', 'MMSE'],
        correctIndex: 2,
        explanation: 'FASTはアルツハイマー型認知症の重症度判定に用いる評価尺度で、症状の進行が7段階に区分される。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
];
