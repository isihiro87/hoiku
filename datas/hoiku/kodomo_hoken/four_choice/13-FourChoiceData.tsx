// 保存用ファイル - 13 子どもの身体的発育・発達と保健⑧
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
        question: '大きな音などで両上下肢を開いて抱きつく動作をする反射は?',
        choices: ['モロー反射', '探索反射', 'バビンスキー反射', '把握反射'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/13-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '原始反射の多くが消失するのはおよそいつまで?',
        choices: ['生後3〜6か月', '1歳', '2歳', '3歳'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/13-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '口唇や口角を刺激すると、その方向に口と頭を向ける反射は?',
        choices: ['モロー反射', '探索反射', '把握反射', '吸啜反射'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/13-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '他の原始反射より遅く、生後24か月頃まで残るのは?',
        choices: ['モロー反射', '把握反射', 'バビンスキー反射', '吸啜反射'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/13-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-07-voice.wav',
        answerDuration: 90,
    },
];
