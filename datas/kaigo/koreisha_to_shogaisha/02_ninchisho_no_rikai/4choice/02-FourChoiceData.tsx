// 保存用ファイル - 02 認知症の理解（L6認知症の検査と診断・L7認知症の種類）
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
        question: '幻視やパーキンソニズムが初期から特徴的にみられる認知症は？',
        choices: ['血管性認知症', '前頭側頭型認知症', 'アルツハイマー型認知症', 'レビー小体型認知症'],
        correctIndex: 3,
        explanation: 'レビー小体型認知症の初期症状では、パーキンソニズムや幻視のほか、自律神経症状がみられる。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '度々道に迷う、金銭管理などにミスが目立つ認知症高齢者の日常生活自立度は？',
        choices: ['Ⅱa', 'M', 'Ⅲa', 'Ⅱb'],
        correctIndex: 0,
        explanation: '日常生活自立度Ⅱaでは、度々道に迷う、買い物や事務、金銭管理などそれまでできたことにミスが目立つ。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: 'アルツハイマー型認知症で顕著にみられる脳の変化は？',
        choices: ['小脳の病変', '脳室の縮小', '脳全体の萎縮', '大脳の肥大'],
        correctIndex: 2,
        explanation: 'アルツハイマー型認知症では、海馬など大脳辺縁系の病変、脳全体の萎縮、脳室の拡大がみられる。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
