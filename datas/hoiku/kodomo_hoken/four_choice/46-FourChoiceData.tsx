// 保存用ファイル - 46 子どもの健康と安全⑤
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
        question: '子どもの心肺蘇生で最も優先されるのは?',
        choices: ['気道確保', '胸骨圧迫', '人工呼吸', 'AED'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/46-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/46-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '胸骨圧迫の速さの目安は?',
        choices: ['1分間に60回', '100〜120回', '150回', '40回'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/46-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/46-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '1人で人工呼吸と併用する場合、胸骨圧迫と人工呼吸の回数比は?',
        choices: ['15:2', '30:2', '5:1', '10:2'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/46-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/46-05-voice.wav',
        answerDuration: 90,
    },
];
