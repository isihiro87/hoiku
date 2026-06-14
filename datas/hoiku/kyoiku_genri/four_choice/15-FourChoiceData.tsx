// 保存用ファイル - 15 日本の教育者②
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
        question: '日本の集団主義保育の理論的指導者とされるのは?',
        choices: ['倉橋惣三', '赤沢鍾美', '森有礼', '城戸幡太郎'],
        correctIndex: 3,
        explanation: '城戸幡太郎。',
        questionAudio: 'audio/explain/15-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'フレーベル式幼稚園を日本に伝えたドイツ人女性は?',
        choices: ['エレン・ケイ', 'モンテッソーリ', '松野クララ', '倉橋惣三'],
        correctIndex: 2,
        explanation: '松野クララ。東京女子師範学校附属幼稚園で指導。',
        questionAudio: 'audio/explain/15-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '1885年に初代文部大臣に就任したのは?',
        choices: ['福沢諭吉', '森有礼', '緒方洪庵', '吉田松陰'],
        correctIndex: 1,
        explanation: '森有礼。',
        questionAudio: 'audio/explain/15-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '828年に京都に綜芸種智院を創設したのは?',
        choices: ['空海', '林羅山', '石田梅岩', '広瀬淡窓'],
        correctIndex: 0,
        explanation: '空海。庶民にも開かれた教育機関。',
        questionAudio: 'audio/explain/15-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-07-voice.wav',
        answerDuration: 90,
    },
];
