// 保存用ファイル - 05 栄養に関する基本的知識②
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
        question: 'でんぷんに作用し、消化を始める唾液中の消化酵素は?',
        choices: ['ペプシン', 'リパーゼ', 'アミラーゼ', 'トリプシン'],
        correctIndex: 2,
        explanation: '唾液アミラーゼがでんぷんを分解する。',
        questionAudio: 'audio/explain/05-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/05-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '乳汁中に含まれ、ぶどう糖とガラクトースが結合した糖は?',
        choices: ['ショ糖', '乳糖', '麦芽糖', '果糖'],
        correctIndex: 1,
        explanation: '乳糖（母乳・牛乳に含まれる）。ショ糖はぶどう糖＋果糖。',
        questionAudio: 'audio/explain/05-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/05-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '食物繊維について、誤っているものは?',
        choices: ['水溶性と不溶性の2種類がある', '不溶性食物繊維は腸壁を刺激し便秘改善に役立つ', '水溶性食物繊維は血糖値の上昇を抑える働きがある', '体内でエネルギー源として最も多く利用される'],
        correctIndex: 3,
        explanation: '食物繊維はエネルギー源にならない。',
        questionAudio: 'audio/explain/05-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/05-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '脂質について、正しいものは?',
        choices: ['水に溶けやすい化合物である', '脂溶性ビタミンの供給源になる', '1gあたり4kcalのエネルギーを産生する', '細胞膜の構成成分にはならない'],
        correctIndex: 1,
        explanation: '脂溶性ビタミンA・D・E・Kは食品の脂質部分に含まれる。',
        questionAudio: 'audio/explain/05-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/05-07-voice.wav',
        answerDuration: 90,
    },
];
