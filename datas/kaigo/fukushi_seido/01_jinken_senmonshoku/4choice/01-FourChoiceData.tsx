// 保存用ファイル - 01 人間の尊厳と専門職（尊厳・自立・介護福祉士法）
// フォルダ: datas/kaigo/fukushi_seido/01_jinken_senmonshoku/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　人間の尊厳と専門職';
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
        question: '介護福祉士の資格の種類は？',
        choices: ['設置義務資格', '業務独占資格', '名称独占資格', '任用資格'],
        correctIndex: 2,
        explanation: '介護福祉士は国家資格で名称独占資格。介護福祉士でない者が名称を使用することは法で禁じられている（名称の使用制限）。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '判断力の低下などで自己主張が難しい利用者の意向をくみ、代弁することを表す用語は？',
        choices: ['アドボカシー', 'パターナリズム', 'エンパワメント', 'ストレングス'],
        correctIndex: 0,
        explanation: 'アドボカシー（権利擁護）は、利用者の意見や希望を代弁すること。介護職にはアドボカシーとエンパワメントの2つの視点が求められる。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '「生存権」の思想を世界で最初に掲げた憲法は？',
        choices: ['世界人権宣言', '独立宣言', 'フランス人権宣言', 'ワイマール憲法'],
        correctIndex: 3,
        explanation: '生存権を世界で最初に掲げたのは1919年のドイツのワイマール憲法。日本では日本国憲法第25条が生存権を規定している。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
];
