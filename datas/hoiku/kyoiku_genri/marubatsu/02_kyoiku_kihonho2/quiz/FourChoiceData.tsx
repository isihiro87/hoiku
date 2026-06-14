// 4択クイズ用データ - 02 教育基本法2
// フォルダ: datas/hoiku/kyoiku_genri/02_kyoiku_kihonho2/quiz
// 保育士試験 教育原理 4択クイズ
// duration はプレースホルダ。音声を録り直して配置後、実測値に更新すること。

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
        question: '「生涯学習の理念」を定める教育基本法の条文は?',
        choices: ['第1条', '第2条', '第3条', '第13条'],
        correctIndex: 2,
        explanation: '第3条。国民が生涯にわたりあらゆる機会・場所で学び、成果を生かせる社会を図る。',
        questionAudio: 'audio/explain/0-voicepeak.wav',
        questionDuration: 150,
        answerAudio: 'audio/explain/1-voicepeak.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '「学校・家庭・地域の連携協力」を定める条文は?',
        choices: ['第10条', '第11条', '第13条', '第16条'],
        correctIndex: 2,
        explanation: '第13条。それぞれの役割と責任を自覚し、相互の連携・協力に努める。',
        questionAudio: 'audio/explain/2-voicepeak.wav',
        questionDuration: 150,
        answerAudio: 'audio/explain/3-voicepeak.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '制定時(1947年)の教育基本法の構成は?',
        choices: ['前文＋全11条', '前文なし全11条', '前文＋全18条', '前文＋全26条'],
        correctIndex: 0,
        explanation: '制定時は前文＋全11条。前文＋全18条になったのは2006年改正後。',
        questionAudio: 'audio/explain/4-voicepeak.wav',
        questionDuration: 150,
        answerAudio: 'audio/explain/5-voicepeak.wav',
        answerDuration: 90,
    },
];
