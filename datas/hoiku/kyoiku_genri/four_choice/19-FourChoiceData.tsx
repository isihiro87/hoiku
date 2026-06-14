// 保存用ファイル - 19 学習理論と教授法①
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
        question: '「産婆術」で知られるのは?',
        choices: ['プラトン', 'アリストテレス', 'ソクラテス', 'コメニウス'],
        correctIndex: 2,
        explanation: 'ソクラテス。問答によって気づかせる問答法。',
        questionAudio: 'audio/explain/19-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '「プロジェクト・メソッド」を提唱したのは?',
        choices: ['キルパトリック', 'デューイ', 'モリソン', 'パーカースト'],
        correctIndex: 0,
        explanation: 'キルパトリック。',
        questionAudio: 'audio/explain/19-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '「ドルトン・プラン」を考案したのは?',
        choices: ['ペーターゼン', 'ケッペル', 'ブルーム', 'パーカースト'],
        correctIndex: 3,
        explanation: 'パーカースト。',
        questionAudio: 'audio/explain/19-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '「スキナー箱」を用いプログラム学習を確立したのは?',
        choices: ['ブルーナー', 'スキナー', 'オーズベル', 'ブルーム'],
        correctIndex: 1,
        explanation: 'スキナー。',
        questionAudio: 'audio/explain/19-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-07-voice.wav',
        answerDuration: 90,
    },
];
