// 保存用ファイル - 12 西洋の教育思想家③
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
        question: 'ローマのスラム街に「子どもの家」を開いた女性医師は?',
        choices: ['モンテッソーリ', 'エレン・ケイ', '松野クララ', 'ヘレン・ケラー'],
        correctIndex: 0,
        explanation: 'モンテッソーリ。',
        questionAudio: 'audio/explain/12-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '「白紙説(タブラ・ラサ)」で知られるイギリスの思想家は?',
        choices: ['オーエン', 'ロック', 'ベル', 'ランカスター'],
        correctIndex: 1,
        explanation: 'ロック。',
        questionAudio: 'audio/explain/12-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '「四段階教授法(明瞭→連合→系統→方法)」を唱えたのは?',
        choices: ['ライン', 'ツィラー', 'モリソン', 'ヘルバルト'],
        correctIndex: 3,
        explanation: 'ヘルバルト。',
        questionAudio: 'audio/explain/12-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/12-05-voice.wav',
        answerDuration: 90,
    },
];
