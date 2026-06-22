// 保存用ファイル - 01 子どもの心身の健康と保健の意義①
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
        question: '乳児死亡とは、生後どのくらいまでの死亡?',
        choices: ['4週未満', '1週未満', '1年未満', '3年未満'],
        correctIndex: 2,
        explanation: '乳児死亡は生後1年未満の死亡。生後4週未満は新生児死亡という。',
        questionAudio: 'audio/explain/01-00-voice.wav',
        questionDuration: 103,
        answerAudio: 'audio/explain/01-01-voice.wav',
        answerDuration: 36,
    },
    {
        id: 'q2',
        question: 'WHOの健康の定義「身体的・精神的」と、あと一つは?',
        choices: ['経済的', '社会的', '文化的', '知的'],
        correctIndex: 1,
        explanation: 'WHO憲章は健康を身体的・精神的・社会的に良好な状態と定義。',
        questionAudio: 'audio/explain/01-02-voice.wav',
        questionDuration: 158,
        answerAudio: 'audio/explain/01-03-voice.wav',
        answerDuration: 37,
    },
    {
        id: 'q3',
        question: 'WHO(世界保健機関)は何の専門機関?',
        choices: ['国際連合', '日本政府', 'EU', 'NATO'],
        correctIndex: 0,
        explanation: 'WHOは国際連合(国連)の専門機関。',
        questionAudio: 'audio/explain/01-04-voice.wav',
        questionDuration: 74,
        answerAudio: 'audio/explain/01-05-voice.wav',
        answerDuration: 40,
    },
    {
        id: 'q4',
        question: '乳児死亡率は、何に対する乳児死亡数で表す?',
        choices: ['1万出生', '千出生', '百出生', '10万人口'],
        correctIndex: 1,
        explanation: '乳児死亡率は出生千対(出生1000に対する乳児死亡数)で表す。',
        questionAudio: 'audio/explain/01-06-voice.wav',
        questionDuration: 122,
        answerAudio: 'audio/explain/01-07-voice.wav',
        answerDuration: 40,
    },
];
