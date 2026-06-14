// 保存用ファイル - 03 教育基本法の条文
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
        question: '「教育は、人格の完成を目指し…」と定めるのは教育基本法の何条?',
        choices: ['第2条', '第10条', '第1条', '第11条'],
        correctIndex: 2,
        explanation: '第1条(教育の目的)。',
        questionAudio: 'audio/explain/03-00-voice.wav',
        questionDuration: 170,
        answerAudio: 'audio/explain/03-01-voice.wav',
        answerDuration: 36,
    },
    {
        id: 'q2',
        question: '2006年改正で教育基本法に新たに加わった理念は?',
        choices: ['生涯学習の理念', '義務教育の無償', '男女共学', '国民主権'],
        correctIndex: 0,
        explanation: '第3条「生涯学習の理念」が新設された。',
        questionAudio: 'audio/explain/03-02-voice.wav',
        questionDuration: 125,
        answerAudio: 'audio/explain/03-03-voice.wav',
        answerDuration: 56,
    },
    {
        id: 'q3',
        question: '教育基本法で「幼児期の教育」を定めるのは何条?',
        choices: ['第11条', '第2条', '第10条', '第16条'],
        correctIndex: 0,
        explanation: '幼児期の教育は第11条。',
        questionAudio: 'audio/explain/03-04-voice.wav',
        questionDuration: 109,
        answerAudio: 'audio/explain/03-05-voice.wav',
        answerDuration: 43,
    },
    {
        id: 'q4',
        question: '教育基本法で「家庭教育」を定めるのは何条?',
        choices: ['第2条', '第9条', '第10条', '第13条'],
        correctIndex: 2,
        explanation: '家庭教育は第10条。',
        questionAudio: 'audio/explain/03-06-voice.wav',
        questionDuration: 103,
        answerAudio: 'audio/explain/03-07-voice.wav',
        answerDuration: 36,
    },
];
