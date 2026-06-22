// 保存用ファイル - 22 子どもの身体的発育・発達と保健
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
        question: '離乳食を開始するのはおよそ生後何か月?',
        choices: ['3か月', '5か月', '8か月', '1歳'],
        correctIndex: 1,
        explanation: '離乳食は生後5〜6か月頃に開始する。',
        questionAudio: 'audio/explain/22-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '離乳の完了はおよそいつ?',
        choices: ['6か月', '1歳〜1歳3か月', '2歳', '3歳'],
        correctIndex: 1,
        explanation: '離乳の完了は1歳〜1歳半頃(目安1歳3か月)。',
        questionAudio: 'audio/explain/22-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '乳歯が生え始めるのはおよそ生後何か月?',
        choices: ['4〜6か月', '8〜10か月', '1歳', '1歳半'],
        correctIndex: 0,
        explanation: '乳歯は生後4〜6か月頃から生え始める。',
        questionAudio: 'audio/explain/22-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-05-voice.wav',
        answerDuration: 90,
    },
];
