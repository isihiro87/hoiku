// 保存用ファイル - 22 教授法の段階説
// フォルダ: datas/hoiku/kyoiku_genri/four_choice
// 自動生成 (gen.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　教育原理';
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
        question: '「チーム・ティーチング」と関係が深いのは?',
        choices: ['ケッペル', 'ペーターゼン', 'ライン', 'ツィラー'],
        correctIndex: 0,
        explanation: 'ケッペル。',
        questionAudio: 'audio/explain/22-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'ラインの五段階教授法の順序は?',
        choices: ['明瞭→連合→系統→方法', '探究→提示→類化→組織→発表', '予備→提示→比較→概括→応用', '暗示→知性化→仮説設定→推理→検証'],
        correctIndex: 2,
        explanation: 'ラインは予備→提示→比較→概括→応用。',
        questionAudio: 'audio/explain/22-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: 'デューイの問題解決学習(5段階)の最後は?',
        choices: ['検証', '暗示', '仮説設定', '推理'],
        correctIndex: 0,
        explanation: '暗示→知性化→仮説→推理→検証。最後は検証。',
        questionAudio: 'audio/explain/22-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-05-voice.wav',
        answerDuration: 90,
    },
];
