// 保存用ファイル - 02 認知症のある人の生活への理解
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
        question: '認知症のある人の生活環境で大切な原則は?',
        choices: ['毎日新しい刺激を与える', '集団行動を最優先する', 'できる限り環境を変えない', '本人の希望は確認しない'],
        correctIndex: 2,
        explanation: '認知症では環境の変化が大きな混乱の要因となるため、できる限りなじみのある環境で生活を続けられる配慮が大切。',
        questionAudio: 'audio/explain/02-00-voice.wav',
        questionDuration: 103,
        answerAudio: 'audio/explain/02-01-voice.wav',
        answerDuration: 67,
    },
    {
        id: 'q2',
        question: 'ワイズマンが示した介護環境の3要素は?',
        choices: ['自助・互助・公助', '物理的環境・社会的環境・運営管理的環境', '身体的環境・精神的環境・社会的環境', '過去・現在・未来'],
        correctIndex: 1,
        explanation: 'ワイズマン(Weisman)は認知症患者の介護環境を、物理的環境・社会的環境・運営管理的環境の3要素で構成されるとした。',
        questionAudio: 'audio/explain/02-02-voice.wav',
        questionDuration: 87,
        answerAudio: 'audio/explain/02-03-voice.wav',
        answerDuration: 145,
    },
    {
        id: 'q3',
        question: '在宅で介護する家族の負担を一時的に軽減するサービスは?',
        choices: ['ターミナルケア', 'ユニットケア', 'リアリティ・オリエンテーション', 'レスパイトケア'],
        correctIndex: 3,
        explanation: 'レスパイトケアは、在宅で介護を担う家族の負担を軽減するため、介護を一時的に代替するサービス。',
        questionAudio: 'audio/explain/02-04-voice.wav',
        questionDuration: 126,
        answerAudio: 'audio/explain/02-05-voice.wav',
        answerDuration: 42,
    },
];
