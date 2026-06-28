// 保存用ファイル - 02 介護保険制度（保険者・要介護認定）
// フォルダ: datas/kaigo/fukushi_seido/03_kaigo_hoken/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　介護保険制度';
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
        question: '介護保険制度の保険者は？',
        choices: ['国民健康保険組合', '都道府県', '市町村及び特別区', '国'],
        correctIndex: 2,
        explanation: '介護保険制度では、被保険者に身近な市町村（特別区を含む）を保険者としている。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '要介護認定の審査・判定（二次判定）を行う、市町村が設置する機関は？',
        choices: ['介護認定審査会', '国民健康保険団体連合会', '地域包括支援センター', '介護保険審査会'],
        correctIndex: 0,
        explanation: '要介護認定の審査・判定（二次判定）は、市町村が設置する介護認定審査会が行う。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '要介護認定の結果に不服がある場合の審査請求先は？',
        choices: ['社会保険審査会', '介護保険審査会', '地域包括支援センター', '介護認定審査会'],
        correctIndex: 1,
        explanation: '認定結果に不服がある場合の審査請求先は、都道府県に置かれる介護保険審査会である。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
