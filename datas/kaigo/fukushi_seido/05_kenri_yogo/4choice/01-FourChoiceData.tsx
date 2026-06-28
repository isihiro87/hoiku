// 保存用ファイル - 01 成年後見制度・日常生活自立支援事業・身体拘束（L22・L23）
// フォルダ: datas/kaigo/fukushi_seido/05_kenri_yogo/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　権利擁護と虐待防止';
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
        question: '本人が判断能力の低下する前に、自ら後見人を選んでおく制度は？',
        choices: ['成年後見制度利用支援事業', '日常生活自立支援事業', '法定後見制度', '任意後見制度'],
        correctIndex: 3,
        explanation: '任意後見制度では、本人が判断能力が十分なうちに任意後見人を指定し、公正証書による契約を結んでおく。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '判断能力に応じて分かれる法定後見制度の3類型は、後見・保佐と何？',
        choices: ['幇助', '補助', '援助', '監督'],
        correctIndex: 1,
        explanation: '法定後見制度には「後見」「保佐」「補助」の3類型があり、本人の判断能力の程度に応じて選択される。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '身体拘束が緊急やむを得ず認められる3要件は、切迫性・非代替性と何？',
        choices: ['継続性', '反復性', '一時性', '永続性'],
        correctIndex: 2,
        explanation: '身体拘束は「切迫性」「非代替性」「一時性」の3要件を満たし、手続きを慎重に行ったケースに限り認められる。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
];
