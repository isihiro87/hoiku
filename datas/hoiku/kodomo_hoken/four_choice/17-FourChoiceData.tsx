// 保存用ファイル - 17 子どもの身体的発育・発達と保健
// フォルダ: datas/hoiku/kodomo_hoken/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　子どもの保健';
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
        question: '知能の発達を表す指標は?',
        choices: ['BMI', 'IQ(知能指数)', 'カウプ指数', 'SQ'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/17-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: 'デンバー式発達スクリーニング検査の略称は?',
        choices: ['DDST', 'WISC', 'DSM', 'ABR'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/17-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '子どもの平熱が成人より高い理由は?',
        choices: ['体表面積が小さい', '新陳代謝が盛ん', '汗をかかない', '筋肉が多い'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/17-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '健康な乳幼児の腋窩での体温はおよそ何℃前後?',
        choices: ['36℃', '37℃', '38℃', '35℃'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/17-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-07-voice.wav',
        answerDuration: 90,
    },
];
