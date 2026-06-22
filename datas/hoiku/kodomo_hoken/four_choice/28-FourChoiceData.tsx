// 保存用ファイル - 28 子どもの心身の健康状態とその把握⑤
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
        question: 'おたふくかぜ(流行性耳下腺炎)の別名は?',
        choices: ['ムンプス', 'ヘルパンギーナ', 'プール熱', 'はしか'],
        correctIndex: 0,
        explanation: '流行性耳下腺炎はムンプスとも呼ぶ。',
        questionAudio: 'audio/explain/28-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/28-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '突発性発疹の原因は?',
        choices: ['アデノウイルス', 'ヒトヘルペス6型・7型', 'コクサッキー', 'パルボウイルス'],
        correctIndex: 1,
        explanation: '突発性発疹の原因はヒトヘルペスウイルス6型・7型。',
        questionAudio: 'audio/explain/28-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/28-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '「りんご病」とも呼ばれる感染症は?',
        choices: ['溶連菌感染症', '伝染性紅斑', '手足口病', '突発性発疹'],
        correctIndex: 1,
        explanation: 'りんご病は伝染性紅斑のこと。',
        questionAudio: 'audio/explain/28-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/28-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '伝染性紅斑(りんご病)の原因は?',
        choices: ['ヒトパルボウイルス', 'アデノウイルス', '溶連菌', 'コクサッキー'],
        correctIndex: 0,
        explanation: '伝染性紅斑の原因はヒトパルボウイルスB19。',
        questionAudio: 'audio/explain/28-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/28-07-voice.wav',
        answerDuration: 90,
    },
];
