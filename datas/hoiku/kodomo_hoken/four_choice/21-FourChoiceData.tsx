// 保存用ファイル - 21 子どもの身体的発育・発達と保健
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
        question: 'うつぶせ寝でリスクが高くなる睡眠中の突然死は?',
        choices: ['てんかん', 'SIDS', '熱性けいれん', '心身症'],
        correctIndex: 1,
        explanation: 'うつぶせ寝で危険が高まる突然死はSIDS(乳幼児突然死症候群)。',
        questionAudio: 'audio/explain/21-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '成長ホルモンが主に分泌される睡眠は?',
        choices: ['レム睡眠', 'ノンレム睡眠', '浅い眠り', '覚醒時'],
        correctIndex: 1,
        explanation: '成長ホルモンは主に深いノンレム睡眠時に分泌される。',
        questionAudio: 'audio/explain/21-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '母乳に多く含まれ感染予防に役立つ免疫グロブリンは?',
        choices: ['IgG', 'IgA', 'IgE', 'IgM'],
        correctIndex: 1,
        explanation: '母乳に多く感染を防ぐ免疫グロブリンはIgA。',
        questionAudio: 'audio/explain/21-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '母乳栄養児で不足しやすく、出生直後と生後1か月に補充するのは?',
        choices: ['ビタミンA', 'ビタミンK', 'ビタミンC', 'ビタミンD'],
        correctIndex: 1,
        explanation: '母乳で不足しやすいビタミンKを出生後に補充する。',
        questionAudio: 'audio/explain/21-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/21-07-voice.wav',
        answerDuration: 90,
    },
];
