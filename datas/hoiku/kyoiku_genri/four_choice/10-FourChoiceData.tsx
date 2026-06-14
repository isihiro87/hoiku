// 保存用ファイル - 10 西洋の教育思想家①
// フォルダ: datas/hoiku/kyoiku_genri/four_choice
// 自動生成 (gen.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　教育原理';
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
        question: '『大教授学』『世界図絵』を著し直観教授を具体化したのは?',
        choices: ['ルソー', 'ロック', 'ヘルバルト', 'コメニウス'],
        correctIndex: 3,
        explanation: 'コメニウス。近代教授学の祖。',
        questionAudio: 'audio/explain/10-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '世界初の絵入りの子ども向け教科書とされるのは?',
        choices: ['『エミール』', '『世界図絵』', '『児童の世紀』', '『人間の教育』'],
        correctIndex: 1,
        explanation: 'コメニウスの『世界図絵』。',
        questionAudio: 'audio/explain/10-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '『エミール』を著し「子どもの発見者」と呼ばれるのは?',
        choices: ['ルソー', 'ペスタロッチ', 'フレーベル', 'デューイ'],
        correctIndex: 0,
        explanation: 'ルソー。『エミール』。',
        questionAudio: 'audio/explain/10-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '「生活が陶冶する」で知られるのは?',
        choices: ['コメニウス', 'ペスタロッチ', 'オーエン', 'モンテッソーリ'],
        correctIndex: 1,
        explanation: 'ペスタロッチ。',
        questionAudio: 'audio/explain/10-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-07-voice.wav',
        answerDuration: 90,
    },
];
