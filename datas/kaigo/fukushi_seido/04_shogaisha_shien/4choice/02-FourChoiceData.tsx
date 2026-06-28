// 保存用ファイル - 02 障害福祉サービスの利用手続き・国都道府県市町村の責務（L20・L21）
// フォルダ: datas/kaigo/fukushi_seido/04_shogaisha_shien/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　障害者総合支援制度';
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
        question: '障害者総合支援法の介護給付を利用するとき、利用者が最初に市町村へ行う手続きは？',
        choices: ['支給申請', 'サービス等利用計画の作成', '認定調査', '障害支援区分の認定'],
        correctIndex: 0,
        explanation: '介護給付を利用する際、利用者はまず市町村に支給申請を行う。その後に認定調査や障害支援区分の認定などが進む。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '障害支援区分の二次判定を行う機関は？',
        choices: ['都道府県', '市町村', '国民健康保険団体連合会', '市町村審査会'],
        correctIndex: 3,
        explanation: '一次判定（コンピュータ判定）を経て、市町村審査会が二次判定を行い、その結果を受けて市町村が障害支援区分を認定する。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '地方公共団体が設置する協議会の主な機能は？',
        choices: ['障害者からの苦情解決', '支援体制の課題の情報共有', '障害福祉計画の策定', '個別支援計画の策定'],
        correctIndex: 1,
        explanation: '協議会は、関係者が地域課題を共有し協働する場であり、障害者等への支援体制に関する課題についての情報共有を行う。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '障害者総合支援法に基づき、地域の相談窓口として中核的役割を担い市町村に設置される施設は？',
        choices: ['身体障害者更生相談所', '発達障害者支援センター', '地域包括支援センター', '基幹相談支援センター'],
        correctIndex: 3,
        explanation: '基幹相談支援センターは障害者総合支援法に基づき、地域における相談支援の中核的役割を担う施設で、市町村に設置される。',
        questionAudio: 'audio/explain/02_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_08-voice.wav',
        answerDuration: 60,
    },
];
