// 保存用ファイル - 31 子どもの心身の健康状態とその把握⑧
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
        question: 'アレルギーの原因となる物質を何という?',
        choices: ['抗体', 'アレルゲン', '抗原虫', '免疫'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/31-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/31-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: 'アナフィラキシーは原因物質との接触後およそ何分以内に起こりやすい?',
        choices: ['5分', '30分', '2時間', '1日'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/31-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/31-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: 'エピペンを使用できないのは体重何kg未満の子ども?',
        choices: ['10kg', '15kg', '20kg', '25kg'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/31-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/31-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: 'エピペンの保存方法として正しいものは?',
        choices: ['冷蔵庫', '室温・遮光(15〜30℃)', '冷凍', '日光のあたる場所'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/31-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/31-07-voice.wav',
        answerDuration: 90,
    },
];
