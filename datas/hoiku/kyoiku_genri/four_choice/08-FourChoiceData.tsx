// 保存用ファイル - 08 児童憲章とこども家庭庁
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
        question: '「戦争は人の心の中で生れるもの」と述べるのは?',
        choices: ['ユネスコ憲章', '世界人権宣言', '児童憲章', '教育基本法前文'],
        correctIndex: 0,
        explanation: 'ユネスコ憲章前文の一節。',
        questionAudio: 'audio/explain/08-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '児童憲章が制定された日付は?',
        choices: ['1月1日', '4月1日', '12月10日', '5月5日'],
        correctIndex: 3,
        explanation: '1951年5月5日(こどもの日)に制定。',
        questionAudio: 'audio/explain/08-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '児童憲章の本文の項目数は?',
        choices: ['12項目', '5項目', '10項目', '30項目'],
        correctIndex: 0,
        explanation: '本文は12項目。',
        questionAudio: 'audio/explain/08-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '2023年4月1日に設置された省庁は?',
        choices: ['文部科学省', 'こども家庭庁', '厚生労働省', '内閣府'],
        correctIndex: 1,
        explanation: 'こども家庭庁。こども基本法も同日施行。',
        questionAudio: 'audio/explain/08-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/08-07-voice.wav',
        answerDuration: 90,
    },
];
