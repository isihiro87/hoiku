// 保存用ファイル - 01 障害の理解（L11障害と障害者の定義・L12障害者福祉に関する基本理念）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/03_shogai_no_rikai/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　障害の理解';
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
        question: '障害者一人ひとりの状態に応じて、事物や制度の変更・調整を行うことを何という？',
        choices: ['基礎的配慮', '合理的配慮', '一律配慮', '特別配慮'],
        correctIndex: 1,
        explanation: '合理的配慮とは、すべての障害者に同じ配慮をするのではなく、一人ひとりの障害の状態に応じて変更・調整を行うこと。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '身体障害者手帳を交付するのは？',
        choices: ['福祉事務所長', '市町村長', '都道府県知事', '厚生労働大臣'],
        correctIndex: 2,
        explanation: '身体障害者福祉法における身体障害者は、都道府県知事から身体障害者手帳の交付を受けた18歳以上の者をいう。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '精神保健福祉法の精神障害者の定義に含まれる障害は？',
        choices: ['難病', '知的障害', '発達の遅れ', '身体障害'],
        correctIndex: 1,
        explanation: '精神保健福祉法の精神障害者の定義には、統合失調症や精神作用物質による依存症などのほか、知的障害も含まれる。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '国際連合で「障害者の権利宣言」が採択された年は？',
        choices: ['1971年', '2006年', '1981年', '1975年'],
        correctIndex: 3,
        explanation: '障害者の権利宣言は1975年。知的障害者の権利宣言は1971年、国際障害者年は1981年である。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
