// 保存用ファイル - 01 食事・誤嚥予防の介護技術（食事・入浴・排泄の介護）
// フォルダ: datas/kaigo/kaigo_shien/02_shokuji_nyuyoku_haisetsu/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　食事・入浴・排泄の介護';
export const subtitleData = '介護4択';

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
        question: '視覚障害者の食事で、料理の位置を時計の文字盤に見立てて伝える方法は？',
        choices: ['ポジショニング', 'クロックポジション', 'ユニバーサルデザイン', 'ピクトグラム'],
        correctIndex: 1,
        explanation: 'クロックポジションは時計の文字盤に見立てて料理の位置を伝える方法で、視覚障害者の食事介護に有効である。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '骨粗鬆症予防で、カルシウムの吸収を促進する栄養素は？',
        choices: ['ビタミンC', '食物繊維', 'ビタミンB1', 'ビタミンD'],
        correctIndex: 3,
        explanation: '骨粗鬆症予防には、カルシウムだけでなく、その吸収を促進するビタミンDやビタミンKなどをバランスよく摂ることが必要。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '嚥下障害のある人に適した食べ物は？',
        choices: ['紅茶', 'だんご', 'プリン', 'レモンジュース'],
        correctIndex: 2,
        explanation: '嚥下障害には、嚥下しやすいプリン状の食品が適する。酸味のあるものやとろみのない液体はむせやすく適さない。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '麻痺がある人の誤嚥予防で、食べ物を入れる側は？',
        choices: ['健側', '正中', 'どちらでもよい', '患側'],
        correctIndex: 0,
        explanation: '誤嚥予防のため、麻痺がある場合は口腔の健側から食べ物を入れる。右片麻痺であれば左側から入れる。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
