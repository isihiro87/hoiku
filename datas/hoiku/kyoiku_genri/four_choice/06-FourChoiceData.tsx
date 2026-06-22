// 保存用ファイル - 06 世界人権宣言と国際条約
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
        question: '世界人権宣言が採択されたのは何年?',
        choices: ['1948年', '1946年', '1959年', '1989年'],
        correctIndex: 0,
        explanation: '1948年、国連第3回総会で採択。',
        questionAudio: 'audio/explain/06-00-voice.wav',
        questionDuration: 91,
        answerAudio: 'audio/explain/06-01-voice.wav',
        answerDuration: 64,
    },
    {
        id: 'q2',
        question: '世界人権宣言の条文数は?',
        choices: ['12条', '30条', '54条', '103条'],
        correctIndex: 1,
        explanation: '全30条。',
        questionAudio: 'audio/explain/06-02-voice.wav',
        questionDuration: 72,
        answerAudio: 'audio/explain/06-03-voice.wav',
        answerDuration: 37,
    },
    {
        id: 'q3',
        question: '世界人権宣言に法的効力をもたせるため1966年に採択されたのは?',
        choices: ['児童憲章', '子どもの権利条約', '国際人権規約', 'ユネスコ憲章'],
        correctIndex: 2,
        explanation: '1966年採択の国際人権規約。',
        questionAudio: 'audio/explain/06-04-voice.wav',
        questionDuration: 182,
        answerAudio: 'audio/explain/06-05-voice.wav',
        answerDuration: 53,
    },
    {
        id: 'q4',
        question: '子どもの権利条約を国連が採択したのは何年?',
        choices: ['1959年', '1994年', '2006年', '1989年'],
        correctIndex: 3,
        explanation: '1989年(平成元年)に採択。',
        questionAudio: 'audio/explain/06-06-voice.wav',
        questionDuration: 104,
        answerAudio: 'audio/explain/06-07-voice.wav',
        answerDuration: 66,
    },
];
