// 保存用ファイル - 38 子どもの疾病の予防及び適切な対応②
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
        question: 'ロタウイルスワクチンの接種方法は?',
        choices: ['皮下注射', '経口', '筋肉注射', '経鼻'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/38-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/38-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '注射生ワクチン接種後、次の注射生ワクチンまでの間隔は?',
        choices: ['6日以上', '20日以上', '27日以上', '制限なし'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/38-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/38-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '子宮頸がん(HPV)ワクチンの主な対象は?',
        choices: ['乳児', '小学校6年〜高校1年相当の女子', '成人男性', '高齢者'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/38-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/38-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '2012年に生ワクチンから不活化ワクチンに切り替わったのは?',
        choices: ['麻疹', 'ポリオ', '水痘', 'BCG'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/38-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/38-07-voice.wav',
        answerDuration: 90,
    },
];
