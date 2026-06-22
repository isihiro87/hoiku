// 保存用ファイル - 12 子どもの身体的発育・発達と保健⑦
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
        question: '「脳・脊髄」が含まれる型は?',
        choices: ['一般型', '神経系型', '生殖器系型', 'リンパ系型'],
        correctIndex: 1,
        explanation: '脳・脊髄など神経は神経系型に含まれる。',
        questionAudio: 'audio/explain/12-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '神経系の発育が最も急速なのはいつ?',
        choices: ['乳児期', '学童期', '思春期', '成人期'],
        correctIndex: 0,
        explanation: '神経系の発育は乳児期に最も急速。',
        questionAudio: 'audio/explain/12-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: 'スキャモンのリンパ系型に含まれるのは?',
        choices: ['腎臓', '胸腺', '卵巣', '脳'],
        correctIndex: 1,
        explanation: '胸腺はリンパ系型に含まれる。',
        questionAudio: 'audio/explain/12-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '生殖器系型に含まれるのは?',
        choices: ['心臓', '卵巣', '扁桃腺', '脊髄'],
        correctIndex: 1,
        explanation: '卵巣など生殖器は生殖器系型に含まれる。',
        questionAudio: 'audio/explain/12-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-07-voice.wav',
        answerDuration: 90,
    },
];
