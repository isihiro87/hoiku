// 保存用ファイル - 02 労働環境整備・保健医療対策（L26・L27）
// フォルダ: datas/kaigo/fukushi_seido/06_kaigoshoku_anzen/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　介護職の安全と労働環境';
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
        question: '日本人の死因で最も多いのは？',
        choices: ['老衰', '悪性新生物', '脳血管疾患', '心疾患'],
        correctIndex: 1,
        explanation: '人口動態統計によると、日本人の死因は悪性新生物（腫瘍）が最も多く、次いで心疾患、老衰の順となっている。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '要介護状態の家族の通院付き添い等のために取得できる、時間単位でも取れる休暇は？',
        choices: ['介護休暇', '子の看護休暇', '年次有給休暇', '介護休業'],
        correctIndex: 0,
        explanation: '介護休暇は対象家族1人につき年5労働日（2人以上は10労働日）を限度とし、時間単位での取得も可能である。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '運動器の障害により自立度が低下し、介護が必要となる危険性が高い状態は？',
        choices: ['メタボリックシンドローム', 'サルコペニア', 'ロコモティブシンドローム', 'フレイル'],
        correctIndex: 2,
        explanation: 'ロコモティブシンドローム（運動器症候群）は運動器の障害で自立度が低下した状態で、健康寿命を延ばす対策が重要である。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
