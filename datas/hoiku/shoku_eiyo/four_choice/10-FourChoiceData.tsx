// 保存用ファイル - 10 子どもの発育・発達と食生活①
// フォルダ: datas/hoiku/shoku_eiyo/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　食と栄養';
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
        question: '出生時の平均身長と平均体重の組み合わせとして正しいものは?',
        choices: ['約40cm・約2kg', '約50cm・約3kg', '約60cm・約4kg', '約45cm・約2.5kg'],
        correctIndex: 1,
        explanation: '平均身長約50cm、平均体重約3kg。',
        questionAudio: 'audio/explain/10-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '新生児に備わっている原始反射で、乳首を強く吸い込む反射は?',
        choices: ['モロー反射', '哺乳反射', '手掌把握反射', '把握反射'],
        correctIndex: 1,
        explanation: '哺乳反射は原始反射の1つ。',
        questionAudio: 'audio/explain/10-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '乳児の体重について、正しいものは?',
        choices: ['生後2〜3か月で出生時の2倍になる', '生後6か月で出生時の3倍になる', '生後1年で出生時の5倍になる', '出生後は減ることはない'],
        correctIndex: 0,
        explanation: '体重は生後2〜3か月で2倍、1年で約3倍。',
        questionAudio: 'audio/explain/10-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '出生後一時的に出生体重が減少する現象を何という?',
        choices: ['生理的体重減少', '病的体重減少', '脱水', '成長停滞'],
        correctIndex: 0,
        explanation: '出生体重の5〜10%が減少し、生後2〜4日で回復する。',
        questionAudio: 'audio/explain/10-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/10-07-voice.wav',
        answerDuration: 90,
    },
];
