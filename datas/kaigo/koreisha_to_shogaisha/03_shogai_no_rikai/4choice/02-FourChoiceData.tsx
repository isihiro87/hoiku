// 保存用ファイル - 02 障害の理解（L13ノーマライゼーション・L14障害に対する基本的理解）
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
        question: '身体障害のうち、最も割合が高いのは？',
        choices: ['聴覚障害', '肢体不自由', '内部障害', '視覚障害'],
        correctIndex: 1,
        explanation: '生活のしづらさなどに関する調査によると、身体障害の中では肢体不自由の割合が最も高く、全体の45.0％を占める。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: 'ノーマライゼーションの理念を8つの原理にまとめた人物は？',
        choices: ['ニィリエ', 'ソロモン', 'ヴォルフェンスベルガー', 'バンク=ミケルセン'],
        correctIndex: 0,
        explanation: 'ニィリエはノーマライゼーションを8つの原理にまとめた。世界で初めて提唱したのはバンク=ミケルセン。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '社会的包摂と訳され、すべての人を社会の構成員として支え合う考え方は？',
        choices: ['エンパワメント', 'ソーシャル・エクスクルージョン', 'ソーシャル・インクルージョン', 'ノーマライゼーション'],
        correctIndex: 2,
        explanation: 'ソーシャル・インクルージョンは社会的包摂と訳され、すべての人々を社会の構成員として包み支え合う考え方。エクスクルージョン（排除）は反対語。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '利用者が自らの問題を主体的に解決しようとする力を引き出すことを何という？',
        choices: ['エンパワメント', 'ストレングスモデル', 'ノーマライゼーション', 'アドボカシー'],
        correctIndex: 0,
        explanation: 'エンパワメントとは、利用者が自らの問題を主体的に解決しようとする力を引き出すこと。ストレングスモデルは利用者の長所に着目して活かす方法。',
        questionAudio: 'audio/explain/02_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_08-voice.wav',
        answerDuration: 60,
    },
];
