// 保存用ファイル - 32 子どもの心身の健康状態とその把握⑨
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
        question: '気管支喘息のアレルゲンとして多いのは?',
        choices: ['花粉', 'ハウスダストやダニ', '食物', '薬物'],
        correctIndex: 1,
        explanation: '気管支喘息のアレルゲンはハウスダストやダニが多い。',
        questionAudio: 'audio/explain/32-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/32-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'アトピー性皮膚炎について正しいものは?',
        choices: ['感染症である', 'プールに入れない', '皮膚感染症がなければプールに入れる', '日光で治る'],
        correctIndex: 2,
        explanation: 'アトピーは皮膚感染症がなければプールに入れる。',
        questionAudio: 'audio/explain/32-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/32-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: 'エピペンに含まれる薬剤は?',
        choices: ['インスリン', 'アドレナリン', 'ステロイド', '抗生剤'],
        correctIndex: 1,
        explanation: 'エピペンの薬剤はアドレナリン。',
        questionAudio: 'audio/explain/32-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/32-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: 'チアノーゼ型心疾患の代表で、4つの特徴をもつのは?',
        choices: ['心室中隔欠損症', 'ファロー四徴症', '川崎病', 'ネフローゼ'],
        correctIndex: 1,
        explanation: '4つの特徴をもつチアノーゼ型心疾患はファロー四徴症。',
        questionAudio: 'audio/explain/32-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/32-07-voice.wav',
        answerDuration: 90,
    },
];
