// 保存用ファイル - 19 子どもの身体的発育・発達と保健
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
        question: '母体から胎盤を通じて新生児に渡される免疫は?',
        choices: ['能動免疫', '受動免疫', '細胞性免疫', '獲得免疫'],
        correctIndex: 1,
        explanation: '母体から胎盤を通じて得る免疫を受動免疫という。',
        questionAudio: 'audio/explain/19-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '脈拍を最初に触れる部位は?',
        choices: ['頸動脈', '橈骨動脈', '大腿動脈', '上腕動脈'],
        correctIndex: 1,
        explanation: '脈拍はまず手首の橈骨動脈で触れる。',
        questionAudio: 'audio/explain/19-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '受動免疫がなくなり感染しやすくなるのはおよそいつ頃から?',
        choices: ['生後1か月', '生後6か月', '1歳半', '3歳'],
        correctIndex: 1,
        explanation: '受動免疫が減る生後6か月頃から感染しやすくなる。',
        questionAudio: 'audio/explain/19-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '抗体を放出する液性免疫を担う細胞は?',
        choices: ['T細胞', 'B細胞', 'マクロファージ', '好中球'],
        correctIndex: 1,
        explanation: '抗体を放出する液性免疫を担うのはB細胞。',
        questionAudio: 'audio/explain/19-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-07-voice.wav',
        answerDuration: 90,
    },
];
