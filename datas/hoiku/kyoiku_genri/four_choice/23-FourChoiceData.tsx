// 保存用ファイル - 23 カリキュラムの種類
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
        question: '知識を系統的に伝達するが暗記学習になりやすいのは?',
        choices: ['経験カリキュラム', '潜在的カリキュラム', 'コア・カリキュラム', '教科カリキュラム'],
        correctIndex: 3,
        explanation: '教科カリキュラム。',
        questionAudio: 'audio/explain/23-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '子どもの興味・欲求から出発し生活経験を重ねるカリキュラムは?',
        choices: ['経験カリキュラム', '教科カリキュラム', '相関カリキュラム', '広領域カリキュラム'],
        correctIndex: 0,
        explanation: '経験カリキュラム。',
        questionAudio: 'audio/explain/23-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '子どもが知らず知らずに価値や態度を身につける、目に見えないカリキュラムは?',
        choices: ['経験カリキュラム', 'コア・カリキュラム', '潜在的カリキュラム', '融合カリキュラム'],
        correctIndex: 2,
        explanation: '潜在的(ヒドゥン)カリキュラム。',
        questionAudio: 'audio/explain/23-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '中核(コア)を設け他と有機的に関連させるカリキュラムは?',
        choices: ['相関カリキュラム', 'コア・カリキュラム', '融合カリキュラム', '広領域カリキュラム'],
        correctIndex: 1,
        explanation: 'コア・カリキュラム。',
        questionAudio: 'audio/explain/23-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-07-voice.wav',
        answerDuration: 90,
    },
];
