// 保存用ファイル - 47 子どもの健康と安全⑥
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
        question: '事故になりかけた事例の報告を何という?',
        choices: ['インシデント', 'ヒヤリ・ハット報告', 'アクシデント', 'クレーム'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/47-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/47-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '成人と同じAEDを使えるのはおよそ何歳以上?',
        choices: ['3歳', '6歳', '8歳', '10歳'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/47-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/47-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: 'ハインリッヒの法則の比率は?',
        choices: ['1:10:100', '1:29:300', '1:5:50', '1:100:1000'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/47-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/47-05-voice.wav',
        answerDuration: 90,
    },
];
