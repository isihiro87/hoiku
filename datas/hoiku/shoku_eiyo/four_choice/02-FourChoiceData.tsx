// 保存用ファイル - 02 子どもの健康と食生活の意義②
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
        question: '「食事バランスガイド」で、コマを回すヒモにあたる菓子・嗜好飲料の1日の目安は?',
        choices: ['100kcal以内', '200kcal以内', '400kcal以内', '600kcal以内'],
        correctIndex: 1,
        explanation: '1日200kcal以内が目安。',
        questionAudio: 'audio/explain/02-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/02-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '「食事バランスガイド」について、正しいものは?',
        choices: ['対象は3歳以上である', '料理区分は3つである', '2005年に厚生労働省と農林水産省が策定した', '量の単位は「グラム」である'],
        correctIndex: 2,
        explanation: '2005年（平成17年）策定。対象は6歳以上、5つの料理区分、単位はSV（サービング）。',
        questionAudio: 'audio/explain/02-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/02-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '「楽しく食べる子どもに〜食からはじまる健やかガイド〜」で示される、発育・発達過程で配慮すべき側面に**含まれない**ものは?',
        choices: ['心と身体の健康', '人との関わり', '食のスキル', '生活の質'],
        correctIndex: 3,
        explanation: '側面は「心と身体の健康」「人との関わり」「食のスキル」「食の文化と環境」の4つ。',
        questionAudio: 'audio/explain/02-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/02-05-voice.wav',
        answerDuration: 90,
    },
];
