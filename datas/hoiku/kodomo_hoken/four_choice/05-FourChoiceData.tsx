// 保存用ファイル - 05 子どもの心身の健康と保健の意義⑤
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
        question: '児童虐待による死亡例で最も多い年齢は?',
        choices: ['1歳以下', '3歳', '就学前', '学童'],
        correctIndex: 0,
        explanation: '虐待死は0歳児(1歳以下)が最も多い。',
        questionAudio: 'audio/explain/05-00-voice.wav',
        questionDuration: 104,
        answerAudio: 'audio/explain/05-01-voice.wav',
        answerDuration: 39,
    },
    {
        id: 'q2',
        question: '新生児マススクリーニングの目的は?',
        choices: ['虐待発見', '先天性代謝異常症などの早期発見', '知能検査', '視力検査'],
        correctIndex: 1,
        explanation: '新生児マススクリーニングは先天性代謝異常症などの早期発見が目的。',
        questionAudio: 'audio/explain/05-02-voice.wav',
        questionDuration: 76,
        answerAudio: 'audio/explain/05-03-voice.wav',
        answerDuration: 94,
    },
    {
        id: 'q3',
        question: '虐待の身体的影響として知られるのは?',
        choices: ['身長促進', '成長ホルモン抑制による成長不全', '視力低下', '難聴'],
        correctIndex: 1,
        explanation: '虐待のストレスで成長ホルモンが抑制され成長不全を起こす。',
        questionAudio: 'audio/explain/05-04-voice.wav',
        questionDuration: 89,
        answerAudio: 'audio/explain/05-05-voice.wav',
        answerDuration: 86,
    },
];
