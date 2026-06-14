// 保存用ファイル - 17 家庭や児童福祉施設における食事と栄養①
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
        question: 'ジャガイモの芽の部分に含まれ、自然毒による食中毒の原因となるものは?',
        choices: ['ソラニン', 'アミラーゼ', 'カゼイン', 'グリコーゲン'],
        correctIndex: 0,
        explanation: 'ソラニン。芽や緑化した部分を取り除く。',
        questionAudio: 'audio/explain/17-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '調理済みの食品を購入し自宅で食べる形態を何という?',
        choices: ['内食', '中食', '外食', '給食'],
        correctIndex: 1,
        explanation: '中食。家庭で素材から手作りするのが内食。',
        questionAudio: 'audio/explain/17-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '食中毒予防の三原則として正しい組み合わせは?',
        choices: ['冷やす・温める・乾かす', '付けない・増やさない・やっつける', '洗う・煮る・干す', '買う・作る・残す'],
        correctIndex: 1,
        explanation: '「付けない」「増やさない」「やっつける（殺菌する）」。',
        questionAudio: 'audio/explain/17-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '食肉や卵が原因食品になることが多く、熱に弱い食中毒菌は?',
        choices: ['腸炎ビブリオ', 'サルモネラ', 'ノロウイルス', 'ボツリヌス菌'],
        correctIndex: 1,
        explanation: 'サルモネラは熱に弱く、十分な加熱が大切。',
        questionAudio: 'audio/explain/17-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/17-07-voice.wav',
        answerDuration: 90,
    },
];
