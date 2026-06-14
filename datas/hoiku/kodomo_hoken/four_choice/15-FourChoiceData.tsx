// 保存用ファイル - 15 子どもの身体的発育・発達と保健⑩
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
        question: '二語文を話せるようになるのはおよそいつ?',
        choices: ['1歳', '2歳くらい', '4歳', '5歳'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/15-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '運動機能の発達の正しい順序は?',
        choices: ['寝返り→首のすわり→ひとりすわり', '首のすわり→寝返り→ひとりすわり', 'ひとりすわり→寝返り→首のすわり', '首のすわり→ひとりすわり→寝返り'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/15-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '把握反射が消えて自発的にものをつかめるのはおよそいつ?',
        choices: ['1か月', '3か月', '6か月', '1歳'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/15-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '意味のある単語(初語)が出るのはおよそいつ?',
        choices: ['生後6か月', '1歳〜1歳半', '2歳半', '3歳'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/15-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-07-voice.wav',
        answerDuration: 90,
    },
];
