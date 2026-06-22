// 保存用ファイル - 20 子どもの身体的発育・発達と保健
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
        question: '新生児に強い光を当てるとまぶたを閉じる反射は?',
        choices: ['追視', '瞬目反射', '固視', '調節'],
        correctIndex: 1,
        explanation: '強い光でまぶたを閉じるのは瞬目反射。',
        questionAudio: 'audio/explain/20-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '新生児聴覚スクリーニングに用いられる検査は?',
        choices: ['IQ検査', '自動ABR', '視力検査', '尿検査'],
        correctIndex: 1,
        explanation: '新生児聴覚スクリーニングには自動ABRを用いる。',
        questionAudio: 'audio/explain/20-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '尿意の自覚が可能となるのはおよそ何歳?',
        choices: ['1歳', '2歳', '4歳', '5歳'],
        correctIndex: 1,
        explanation: '尿意の自覚は2歳頃に可能となる。',
        questionAudio: 'audio/explain/20-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '夜間の排尿を抑制するホルモンは?',
        choices: ['成長ホルモン', '抗利尿ホルモン', 'インスリン', '甲状腺ホルモン'],
        correctIndex: 1,
        explanation: '夜間の尿量を抑えるのは抗利尿ホルモン。',
        questionAudio: 'audio/explain/20-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-07-voice.wav',
        answerDuration: 90,
    },
];
