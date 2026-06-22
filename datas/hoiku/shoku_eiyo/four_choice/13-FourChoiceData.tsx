// 保存用ファイル - 13 子どもの発育・発達と食生活④
// フォルダ: datas/hoiku/shoku_eiyo/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　食と栄養';
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
        question: '永久歯に生え変わり始める時期として正しいものは?',
        choices: ['3歳前後', '6歳前後', '9歳前後', '12歳前後'],
        correctIndex: 1,
        explanation: '永久歯への生え変わりは6歳前後から多い。',
        questionAudio: 'audio/explain/13-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '幼児期の間食について、正しいものは?',
        choices: ['1日のエネルギーの30〜40%を目安にする', '1日のエネルギーの10〜20%にとどめる', '量や時間は決めない方がよい', '3〜5歳は午前と午後の2回が基本'],
        correctIndex: 1,
        explanation: '間食は1日のエネルギーの10〜20%。1〜2歳は午前・午後の2回、3〜5歳は午後1回程度。',
        questionAudio: 'audio/explain/13-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '学童期の肥満判定に用いられる指数は?',
        choices: ['カウプ指数', 'ローレル指数', 'BMI', '肥満度'],
        correctIndex: 1,
        explanation: '学童期はローレル指数。計算式は体重(kg)÷身長(cm)³×10⁷。乳幼児はカウプ指数。',
        questionAudio: 'audio/explain/13-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/13-05-voice.wav',
        answerDuration: 90,
    },
];
