// 保存用ファイル - 19 家庭や児童福祉施設における食事と栄養③
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
        question: '計量スプーンの小さじ1杯の容量として正しいものは?',
        choices: ['3mL', '5mL', '10mL', '15mL'],
        correctIndex: 1,
        explanation: '小さじ1は5mL（cc）。大さじ1は15mL。',
        questionAudio: 'audio/explain/19-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '検食（給食の保存）の方法として正しいものは?',
        choices: ['常温で1週間保存する', '50g程度を-20℃以下で2週間以上保存する', '冷蔵庫で3日間保存する', '保存の必要はない'],
        correctIndex: 1,
        explanation: '検食は50g程度を密封し、-20℃以下で2週間以上保存する。',
        questionAudio: 'audio/explain/19-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '汁物の食塩濃度の目安として一般的なものは?',
        choices: ['0.8%', '2%', '4%', '6%'],
        correctIndex: 0,
        explanation: '汁物の塩分濃度は0.8%程度がよい。',
        questionAudio: 'audio/explain/19-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/19-05-voice.wav',
        answerDuration: 90,
    },
];
