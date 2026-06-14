// 保存用ファイル - 43 子どもの健康と安全②
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
        question: 'ノロウイルスに無効な消毒液は?',
        choices: ['次亜塩素酸ナトリウム', 'アルコール(消毒用エタノール)', '亜塩素酸水', '加熱'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/43-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/43-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '嘔吐物・排泄物の消毒に有効で、金属には使えない消毒液は?',
        choices: ['アルコール', '逆性石けん', '次亜塩素酸ナトリウム', '水'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/43-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/43-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '希釈した消毒液の扱いとして正しいものは?',
        choices: ['作り置きする', '毎週作る', 'その都度つくる', '長期保存する'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/43-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/43-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: 'プールの水温の目安は?',
        choices: ['18℃以上', '22℃以上', '28℃以上', '15℃以上'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/43-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/43-07-voice.wav',
        answerDuration: 90,
    },
];
