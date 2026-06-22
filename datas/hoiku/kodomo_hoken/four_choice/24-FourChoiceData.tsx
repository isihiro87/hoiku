// 保存用ファイル - 24 子どもの心身の健康状態とその把握①
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
        question: '乳児の溢乳を防ぐため哺乳後に行うことは?',
        choices: ['入浴', '排気', 'うつぶせ', '水分補給'],
        correctIndex: 1,
        explanation: '哺乳後は排気(ゲップ)をさせて溢乳を防ぐ。',
        questionAudio: 'audio/explain/24-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '全身状態の目安「食べる・寝る・遊ぶ」が示すのは?',
        choices: ['食欲・睡眠・活動性', '体温・脈拍・呼吸', '身長・体重・頭囲', '視力・聴力・運動'],
        correctIndex: 0,
        explanation: '食べる・寝る・遊ぶは食欲・睡眠・活動性の目安。',
        questionAudio: 'audio/explain/24-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '脱水症で最も大切な症状は?',
        choices: ['発熱', '尿の回数や量の減少', '発疹', '咳'],
        correctIndex: 1,
        explanation: '脱水では尿の回数や量の減少が重要なサイン。',
        questionAudio: 'audio/explain/24-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '白色便がみられる感染性胃腸炎の原因として多いのは?',
        choices: ['ノロウイルス', 'ロタウイルス', 'アデノウイルス', 'インフルエンザ'],
        correctIndex: 1,
        explanation: '白色便を伴う胃腸炎はロタウイルスが多い。',
        questionAudio: 'audio/explain/24-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-07-voice.wav',
        answerDuration: 90,
    },
];
