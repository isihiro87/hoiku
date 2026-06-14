// 保存用ファイル - 13 西洋の教育思想家④
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
        question: 'ニュー・ラナークの紡績工場で「性格形成学院」を開いたのは?',
        choices: ['ランカスター', 'ロック', 'オーエン', 'ベル'],
        correctIndex: 2,
        explanation: 'オーエン。著書『新社会観』。',
        questionAudio: 'audio/explain/13-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '「教育社会学」を確立したフランスの人物は?',
        choices: ['デュルケム', 'シュタイナー', 'デューイ', 'ライン'],
        correctIndex: 0,
        explanation: 'デュルケム。',
        questionAudio: 'audio/explain/13-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '人物と国の組み合わせで正しいのは?',
        choices: ['ソクラテス＝ドイツ', 'プラトン＝ギリシャ', 'ロック＝フランス', 'オーエン＝アメリカ'],
        correctIndex: 1,
        explanation: 'プラトンは古代ギリシャの哲学者。',
        questionAudio: 'audio/explain/13-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-05-voice.wav',
        answerDuration: 90,
    },
];
