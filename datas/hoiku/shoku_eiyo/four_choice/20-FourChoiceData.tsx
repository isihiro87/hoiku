// 保存用ファイル - 20 家庭や児童福祉施設における食事と栄養④
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
        question: '窒息・誤嚥事故の予防について、正しいものは?',
        choices: ['豆・ナッツ類は5歳以下の子どもに与えない', 'ミニトマトはそのまま与える', '食べている時は会話を増やす', '節分の豆まきには袋から出した豆を使う'],
        correctIndex: 0,
        explanation: '豆・ナッツ類は5歳以下に与えない。ミニトマト・ブドウは4等分する。',
        questionAudio: 'audio/explain/20-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '和食の食器の並べ方として正しいものは?',
        choices: ['主食を右手前、汁物を左手前に置く', '主食を左手前、汁物を右手前に置く', '主食を中央、汁物を奥に置く', '主食と汁物を縦に並べる'],
        correctIndex: 1,
        explanation: '主食（ご飯）は左手前、汁物は右手前。',
        questionAudio: 'audio/explain/20-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '保護者がいない児童や虐待を受けている児童が入所する施設は?',
        choices: ['保育所', '乳児院', '児童養護施設', '児童自立支援施設'],
        correctIndex: 2,
        explanation: '児童養護施設（乳児を除く）。乳児院は新生児〜1歳未満が中心。',
        questionAudio: 'audio/explain/20-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/20-05-voice.wav',
        answerDuration: 90,
    },
];
