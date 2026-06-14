// 保存用ファイル - 14 子どもの身体的発育・発達と保健⑨
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
        question: '運動発達の方向性として正しいものは?',
        choices: ['末梢から中心へ', '微細運動から粗大運動へ', '頭部から下方へ', '下方から頭部へ'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/14-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '90%以上で「首のすわり」が可能になるのはおよそいつ?',
        choices: ['4〜5か月未満', '6〜7か月未満', '9〜10か月未満', '11〜12か月未満'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/14-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '90%以上で「寝返り」が可能になるのはおよそいつ?',
        choices: ['4〜5か月未満', '6〜7か月未満', '9〜10か月未満', '1年3〜4か月未満'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/14-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '90%以上で「ひとり歩き」が可能になるのはおよそいつ?',
        choices: ['9〜10か月未満', '11〜12か月未満', '1年3〜4か月未満', '2歳'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/14-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-07-voice.wav',
        answerDuration: 90,
    },
];
