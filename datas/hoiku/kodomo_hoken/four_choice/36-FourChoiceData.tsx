// 保存用ファイル - 36 子どもの心身の健康状態とその把握
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
        question: '子どもに多い1型糖尿病で必要な治療は?',
        choices: ['食事制限のみ', 'インスリンの皮下注射', '運動のみ', '抗生剤'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/36-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/36-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '先天性甲状腺機能低下症を何という?',
        choices: ['バセドウ病', 'クレチン病', 'ネフローゼ', '川崎病'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/36-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/36-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '便が白くなり、母子健康手帳の便色カードで早期発見するのは?',
        choices: ['腸重積症', '先天性胆道閉鎖症', 'ヒルシュプルング病', '虫垂炎'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/36-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/36-05-voice.wav',
        answerDuration: 90,
    },
];
