// 保存用ファイル - 14 日本の教育者①
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
        question: '『和俗童子訓』を著し日本最初の体系的な児童教育書とされるのは?',
        choices: ['伊沢修二', '貝原益軒', '倉橋惣三', '森有礼'],
        correctIndex: 1,
        explanation: '貝原益軒。',
        questionAudio: 'audio/explain/14-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'アメリカ留学で音楽を学び日本の音楽教育の基礎を築いたのは?',
        choices: ['城戸幡太郎', '赤沢鍾美', '倉橋惣三', '伊沢修二'],
        correctIndex: 3,
        explanation: '伊沢修二。',
        questionAudio: 'audio/explain/14-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '日本で初めて託児所を創始した教育者は?',
        choices: ['倉橋惣三', '松野クララ', '赤沢鍾美', '城戸幡太郎'],
        correctIndex: 2,
        explanation: '赤沢鍾美。',
        questionAudio: 'audio/explain/14-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '「誘導保育」を発表し保育要領の作成にも関わったのは?',
        choices: ['倉橋惣三', '貝原益軒', '城戸幡太郎', '伊沢修二'],
        correctIndex: 0,
        explanation: '倉橋惣三。',
        questionAudio: 'audio/explain/14-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-07-voice.wav',
        answerDuration: 90,
    },
];
