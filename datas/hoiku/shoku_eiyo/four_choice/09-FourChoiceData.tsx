// 保存用ファイル - 09 栄養に関する基本的知識⑥
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
        question: '「日本人の食事摂取基準（2020年版）」について、正しいものは?',
        choices: ['1〜17歳を成人、18歳以上を小児としている', 'エネルギーの指標はBMIである', '10年ごとに改定される', '病気の人を主な対象としている'],
        correctIndex: 1,
        explanation: 'エネルギーの指標はBMI。1〜17歳が小児、18歳以上が成人。5年ごとに改定。健康な者が対象。',
        questionAudio: 'audio/explain/09-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/09-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '食事摂取基準で、栄養素の指標に**含まれない**ものは?',
        choices: ['推定平均必要量', '推奨量', '目安量', '基礎代謝量'],
        correctIndex: 3,
        explanation: '指標は推定平均必要量・推奨量・目安量・目標量・耐容上限量。',
        questionAudio: 'audio/explain/09-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/09-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '基礎代謝基準値を1〜2歳と3〜5歳で比べたとき、正しいものは?',
        choices: ['1〜2歳の方が高い', '3〜5歳の方が高い', '同じである', '性別で逆転する'],
        correctIndex: 0,
        explanation: '基礎代謝基準値は1〜2歳の方が高い（基礎代謝量自体は3〜5歳の方が多い）。',
        questionAudio: 'audio/explain/09-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/09-05-voice.wav',
        answerDuration: 90,
    },
];
