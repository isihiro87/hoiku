// 保存用ファイル - 01 認知症の行動・心理症状（BPSD）
// フォルダ: datas/kaigo/ninchisho_rikai/four_choice
// duration はプレースホルダ（60）。音声配置後 update_duration.py で更新。

export const titleData = '介護福祉士　認知症の理解';
export const subtitleData = '4択クイズ';

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
        question: '認知症のBPSDの特徴は?',
        choices: ['認知症患者に必ず出現する', '環境やケアが要因となり現れる', '中核症状に分類される', '進行に伴い必ず重度化する'],
        correctIndex: 1,
        explanation: 'BPSD(行動・心理症状)は認知症で必ず出現するものではなく、身体・心理・環境・ケアなどの要因が関係して現れる。中核症状とは異なり、適切な対応で改善も期待できる。',
        questionAudio: 'audio/explain/01-00-voice.wav',
        questionDuration: 75,
        answerAudio: 'audio/explain/01-01-voice.wav',
        answerDuration: 81,
    },
    {
        id: 'q2',
        question: '行動・心理症状(BPSD)にあたるのは?',
        choices: ['記憶障害', '見当識障害', '睡眠障害', '理解力の低下'],
        correctIndex: 2,
        explanation: '不眠・過眠・昼夜逆転などの睡眠障害はBPSD。記憶障害・見当識障害・理解力の低下は中核症状にあたる。',
        questionAudio: 'audio/explain/01-02-voice.wav',
        questionDuration: 76,
        answerAudio: 'audio/explain/01-03-voice.wav',
        answerDuration: 42,
    },
    {
        id: 'q3',
        question: '記憶を補おうとその場限りのつくり話をする症状は?',
        choices: ['作話', 'もの盗られ妄想', '幻覚', 'せん妄'],
        correctIndex: 0,
        explanation: '作話は、記憶障害により質問の答えを思い出せず、その場限りのつくり話で記憶を補おうとするもの。',
        questionAudio: 'audio/explain/01-04-voice.wav',
        questionDuration: 111,
        answerAudio: 'audio/explain/01-05-voice.wav',
        answerDuration: 32,
    },
];
