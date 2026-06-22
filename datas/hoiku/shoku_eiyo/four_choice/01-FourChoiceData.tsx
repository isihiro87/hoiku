// 保存用ファイル - 01 子どもの健康と食生活の意義①
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
        question: '「食事バランスガイド」のコマの軸（中心）にあたるものは?',
        choices: ['主食', '菓子・嗜好飲料', '水・お茶', '運動'],
        correctIndex: 2,
        explanation: '軸は「水・お茶」。コマを回すヒモが「菓子・嗜好飲料」。',
        questionAudio: 'audio/explain/01-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/01-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '「食生活指針」が初めて策定されたのはいつ?',
        choices: ['1990年', '1995年', '2000年', '2010年'],
        correctIndex: 2,
        explanation: '2000年（平成12年）に文部省・厚生省・農林水産省が共同で策定。',
        questionAudio: 'audio/explain/01-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/01-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '「食生活指針」について、誤っているものは?',
        choices: ['文部省・厚生省・農林水産省が共同で作成した', '2016年に一部改定された', '飲酒はほどほどにとされている', '主食を中心にエネルギーをとるよう示している'],
        correctIndex: 3,
        explanation: '主食・主菜・副菜を基本にバランスをとるよう示している。「主食を中心に」は妊産婦のための食生活指針の表現。',
        questionAudio: 'audio/explain/01-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/01-05-voice.wav',
        answerDuration: 90,
    },
];
