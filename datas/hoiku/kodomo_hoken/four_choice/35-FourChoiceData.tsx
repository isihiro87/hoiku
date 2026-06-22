// 保存用ファイル - 35 子どもの心身の健康状態とその把握
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
        question: '思春期の女子に多く、極度のやせを示すのは?',
        choices: ['過敏性腸症候群', '神経性やせ症', 'チック症', '起立性調節障害'],
        correctIndex: 1,
        explanation: '思春期女子に多い極度のやせは神経性やせ症。',
        questionAudio: 'audio/explain/35-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/35-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '子どもの腹部の悪性腫瘍で最も多いのは?',
        choices: ['白血病', '神経芽腫', '肝芽腫', '腎芽腫'],
        correctIndex: 1,
        explanation: '子どもの腹部悪性腫瘍で多いのは神経芽腫。',
        questionAudio: 'audio/explain/35-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/35-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: 'インスリンを分泌する膵臓の細胞は?',
        choices: ['α細胞', 'β細胞', 'マクロファージ', 'T細胞'],
        correctIndex: 1,
        explanation: 'インスリンは膵臓のβ細胞から分泌される。',
        questionAudio: 'audio/explain/35-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/35-05-voice.wav',
        answerDuration: 90,
    },
];
