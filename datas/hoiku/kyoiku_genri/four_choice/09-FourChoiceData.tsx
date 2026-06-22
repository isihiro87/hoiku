// 保存用ファイル - 09 幼稚園教育要領
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
        question: '現行の幼稚園教育要領が改訂されたのは何年?',
        choices: ['1989年', '2017年', '2008年', '2023年'],
        correctIndex: 1,
        explanation: '2017年(平成29年)改訂。',
        questionAudio: 'audio/explain/09-00-voice.wav',
        questionDuration: 112,
        answerAudio: 'audio/explain/09-01-voice.wav',
        answerDuration: 44,
    },
    {
        id: 'q2',
        question: '現行の幼稚園教育要領の「領域」はいくつ?',
        choices: ['3領域', '6領域', '5領域', '8領域'],
        correctIndex: 2,
        explanation: '健康・人間関係・環境・言葉・表現の5領域。',
        questionAudio: 'audio/explain/09-02-voice.wav',
        questionDuration: 97,
        answerAudio: 'audio/explain/09-03-voice.wav',
        answerDuration: 33,
    },
    {
        id: 'q3',
        question: '幼稚園教育要領の5領域に含まれないのは?',
        choices: ['健康', '人間関係', '音楽リズム', '表現'],
        correctIndex: 2,
        explanation: '音楽リズムは旧6領域の名残。現行は5領域。',
        questionAudio: 'audio/explain/09-04-voice.wav',
        questionDuration: 97,
        answerAudio: 'audio/explain/09-05-voice.wav',
        answerDuration: 39,
    },
    {
        id: 'q4',
        question: '1948年に刊行され幼稚園教育要領の前身となったのは?',
        choices: ['保育所保育指針', '学習指導要領', '児童憲章', '保育要領'],
        correctIndex: 3,
        explanation: '1948年刊行の「保育要領」。',
        questionAudio: 'audio/explain/09-06-voice.wav',
        questionDuration: 159,
        answerAudio: 'audio/explain/09-07-voice.wav',
        answerDuration: 37,
    },
];
