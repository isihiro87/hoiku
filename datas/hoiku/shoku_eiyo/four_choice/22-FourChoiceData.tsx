// 保存用ファイル - 22 特別な配慮を要する子どもの食と栄養②
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
        question: '乳幼児の肥満の判定に用いられる指数は?',
        choices: ['ローレル指数', 'カウプ指数', 'BMI', '肥満度'],
        correctIndex: 1,
        explanation: '乳幼児はカウプ指数を参考にする。学齢期は肥満度。',
        questionAudio: 'audio/explain/22-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '1型糖尿病について、正しいものは?',
        choices: ['インスリンを作る能力が低下またはなくなる', '生活習慣の悪化が主な原因である', '成人にのみ発症する', '食事療法は不要である'],
        correctIndex: 0,
        explanation: '1型はインスリンを作る能力の低下が原因。生活習慣が関わるのは2型。',
        questionAudio: 'audio/explain/22-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '食物アレルギーの「特定原材料」8品目に**含まれない**ものは?',
        choices: ['卵', '乳', '大豆', 'くるみ'],
        correctIndex: 2,
        explanation: '8品目は卵・乳・小麦・そば・落花生・えび・かに・くるみ。大豆は推奨品目（表示を推奨）。',
        questionAudio: 'audio/explain/22-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '食物アレルギーについて、誤っているものは?',
        choices: ['特定原材料は表示義務がある', '大豆油は基本的に除去する', '1歳までに発症することが多い', 'その後寛解することも多い'],
        correctIndex: 1,
        explanation: '大豆油は精製されており、基本的に除去しない。卵殻カルシウムも除去しない。',
        questionAudio: 'audio/explain/22-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/22-07-voice.wav',
        answerDuration: 90,
    },
];
