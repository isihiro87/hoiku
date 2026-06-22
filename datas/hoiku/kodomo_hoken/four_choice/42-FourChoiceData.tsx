// 保存用ファイル - 42 子どもの健康と安全①
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
        question: '学校環境衛生基準で望ましい室温は?',
        choices: ['10〜20℃', '18〜28℃', '20〜30℃', '15〜25℃'],
        correctIndex: 1,
        explanation: '学校環境衛生基準の望ましい室温は18〜28℃。',
        questionAudio: 'audio/explain/42-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/42-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '望ましい湿度の範囲は?',
        choices: ['10〜30%', '30〜80%', '50〜90%', '20〜60%'],
        correctIndex: 1,
        explanation: '望ましい湿度は30〜80%。',
        questionAudio: 'audio/explain/42-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/42-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '乳児室の面積は1人につき何m²以上?',
        choices: ['1.65', '1.98', '3.3', '5.0'],
        correctIndex: 0,
        explanation: '乳児室は1人につき1.65m²以上。',
        questionAudio: 'audio/explain/42-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/42-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: 'ほふく室の面積は1人につき何m²以上?',
        choices: ['1.65', '1.98', '3.3', '5.0'],
        correctIndex: 2,
        explanation: 'ほふく室は1人につき3.3m²以上。',
        questionAudio: 'audio/explain/42-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/42-07-voice.wav',
        answerDuration: 90,
    },
];
