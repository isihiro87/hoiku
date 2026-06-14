// 保存用ファイル - 44 子どもの健康と安全③
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
        question: 'やけどの応急処置で最初に行うのは?',
        choices: ['薬を塗る', '流水で冷やす', '水ぶくれをつぶす', '軟膏を塗る'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/44-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/44-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '0歳児の事故で最も多いのは?',
        choices: ['転落', '窒息', '溺水', 'やけど'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/44-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/44-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '1〜4歳児の死因順位で第1位は(令和5年)?',
        choices: ['不慮の事故', '先天奇形等', '悪性新生物', '自殺'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/44-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/44-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '子どもの片手を急にひっぱって起こりやすいのは?',
        choices: ['骨折', '肘内障', '脱臼(肩)', '捻挫'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/44-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/44-07-voice.wav',
        answerDuration: 90,
    },
];
