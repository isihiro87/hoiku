// 保存用ファイル - 50 保育における保健活動の計画及び評価②
// フォルダ: datas/hoiku/kodomo_hoken/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　子どもの保健';
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
        question: '2021年に成立した、医療的ケア児を支援する法律は?',
        choices: ['母子保健法', '医療的ケア児支援法', '児童福祉法', '障害者総合支援法'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/50-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/50-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '保健計画の作成について正しいものは?',
        choices: ['看護師の責任で作る', '保育にかかわる者全員が共通認識をもつ', '保護者が作る', '嘱託医のみが作る'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/50-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/50-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '病児保育事業の対象は?',
        choices: ['未就学児のみ', 'おおむね10歳未満児', '乳児のみ', '全年齢'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/50-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/50-05-voice.wav',
        answerDuration: 90,
    },
];
