// 保存用ファイル - 34 子どもの心身の健康状態とその把握
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
        question: 'AD/HD(注意欠如・多動症)の特徴は?',
        choices: ['多動性・不注意・衝動性', '視線が合わない', '読み書きの困難', '高熱'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/34-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/34-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '5日以上の発熱・苺舌・手足の硬性浮腫がみられ、冠動脈瘤を合併しうるのは?',
        choices: ['川崎病', '溶連菌感染症', 'ネフローゼ', '白血病'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/34-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/34-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '子どもの悪性腫瘍で最も多いのは?',
        choices: ['神経芽腫', '白血病', '脳腫瘍', '網膜芽細胞腫'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/34-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/34-05-voice.wav',
        answerDuration: 90,
    },
];
