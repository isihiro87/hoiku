// 保存用ファイル - 02 老化の理解（L3老年期の喪失体験と成熟・L4老化による知的機能の変化）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/01_roka_no_rikai/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　老化の理解';
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
        question: '耐えがたい事態に直面し、年齢より未熟な行動をとる防衛機制は？',
        choices: ['昇華', '退行', '抑圧', '投影'],
        correctIndex: 1,
        explanation: '退行とは、年齢よりも未熟な行動をとり、周囲の気を引いて欲求の充足を図ろうとすること。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '初老期に頻発し、抑うつや爽快など感情の障害を主症状とするのは？',
        choices: ['心身症', '神経症', '統合失調症', '気分障害'],
        correctIndex: 3,
        explanation: '気分障害の主症状は、抑鬱あるいは爽快といった感情の障害。老年期の気分障害では鬱病が初老期に頻発する。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '逆唱課題で使われる、情報を保持しながら処理を行う記憶は？',
        choices: ['意味記憶', 'エピソード記憶', 'ワーキングメモリ', '手続き記憶'],
        correctIndex: 2,
        explanation: 'ワーキングメモリは情報を保持しながら同時に2つ以上の処理を行う能力で、加齢により低下する。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '身体で覚えており、加齢による影響を受けにくい記憶は？',
        choices: ['エピソード記憶', '手続き記憶', '意味記憶', '陳述的記憶'],
        correctIndex: 1,
        explanation: '手続き記憶は身体で覚えているような記憶で、加齢の影響を受けにくい。陳述的記憶（意味記憶やエピソード記憶）は影響を受けやすい。',
        questionAudio: 'audio/explain/02_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_08-voice.wav',
        answerDuration: 60,
    },
];
