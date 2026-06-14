// 保存用ファイル - 12 子どもの発育・発達と食生活③
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
        question: '1歳未満の乳児に与えてはいけない、ボツリヌス菌混入のおそれがある食品は?',
        choices: ['牛乳', 'はちみつ', '白身魚', 'おかゆ'],
        correctIndex: 1,
        explanation: 'はちみつにはボツリヌス菌が混入している場合があり、1歳未満には与えない。',
        questionAudio: 'audio/explain/12-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '離乳の開始時期として適当なものは?',
        choices: ['生後2〜3か月頃', '生後5〜6か月頃', '生後9〜10か月頃', '1歳頃'],
        correctIndex: 1,
        explanation: '哺乳反射が消え始める生後5〜6か月頃が適当。完了は12〜18か月頃。',
        questionAudio: 'audio/explain/12-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '離乳食で用いる魚の進め方として、正しい順序は?',
        choices: ['青皮魚→赤身魚→白身魚', '白身魚→赤身魚→青皮魚', '赤身魚→白身魚→青皮魚', '青皮魚→白身魚→赤身魚'],
        correctIndex: 1,
        explanation: '白身魚から始め、赤身魚、青皮魚へと進める。',
        questionAudio: 'audio/explain/12-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '乳歯が生えそろったときの本数として正しいものは?',
        choices: ['16本', '20本', '28本', '32本'],
        correctIndex: 1,
        explanation: '乳歯は上下10本ずつ合計20本。永久歯は親知らずを含めて32本。',
        questionAudio: 'audio/explain/12-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-07-voice.wav',
        answerDuration: 90,
    },
];
