// 保存用ファイル - 02 子どもの心身の健康と保健の意義②
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
        question: '新生児死亡とは生後何未満の死亡?',
        choices: ['1週未満', '4週未満', '1年未満', '3か月未満'],
        correctIndex: 1,
        explanation: '新生児死亡は生後4週(28日)未満の死亡。',
        questionAudio: 'audio/explain/02-00-voice.wav',
        questionDuration: 94,
        answerAudio: 'audio/explain/02-01-voice.wav',
        answerDuration: 37,
    },
    {
        id: 'q2',
        question: '早期新生児死亡とは生後何未満の死亡?',
        choices: ['1週未満', '4週未満', '1か月未満', '1年未満'],
        correctIndex: 0,
        explanation: '早期新生児死亡は生後1週(7日)未満の死亡。',
        questionAudio: 'audio/explain/02-02-voice.wav',
        questionDuration: 100,
        answerAudio: 'audio/explain/02-03-voice.wav',
        answerDuration: 37,
    },
    {
        id: 'q3',
        question: '周産期死亡は、妊娠22週以後の死産と何をあわせたもの?',
        choices: ['早期新生児死亡', '乳児死亡', '新生児死亡', '幼児死亡'],
        correctIndex: 0,
        explanation: '周産期死亡は妊娠22週以後の死産と早期新生児死亡の合計。',
        questionAudio: 'audio/explain/02-04-voice.wav',
        questionDuration: 146,
        answerAudio: 'audio/explain/02-05-voice.wav',
        answerDuration: 59,
    },
    {
        id: 'q4',
        question: '2016年の死因別乳児死亡で最も多いのは?',
        choices: ['不慮の事故', '先天奇形・変形及び染色体異常', '肺炎', '乳幼児突然死症候群'],
        correctIndex: 1,
        explanation: '乳児死亡の死因第1位は先天奇形・変形及び染色体異常。',
        questionAudio: 'audio/explain/02-06-voice.wav',
        questionDuration: 121,
        answerAudio: 'audio/explain/02-07-voice.wav',
        answerDuration: 103,
    },
];
