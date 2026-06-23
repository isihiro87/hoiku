// 保存用ファイル - 03 認知症の原因疾患と評価
// フォルダ: datas/kaigo/ninchisho_rikai/four_choice
// duration はプレースホルダ（60）。音声配置後 update_duration.py で更新。

export const titleData = '介護福祉士　認知症の理解';
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
        question: 'アルツハイマー型認知症の特徴は?',
        choices: ['脳梗塞が原因で起こる', '記憶障害から徐々に進行する', '幻視が早期からみられる', '症状が階段状に悪化する'],
        correctIndex: 1,
        explanation: 'アルツハイマー型認知症は脳の萎縮により、記憶障害を中心にゆるやかに進行する。階段状の悪化は血管性、早期の幻視はレビー小体型の特徴。',
        questionAudio: 'audio/explain/03-00-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03-01-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: 'レビー小体型認知症に特徴的な症状は?',
        choices: ['まだら認知症', '人格の変化', '具体的な幻視', '感情失禁'],
        correctIndex: 2,
        explanation: 'レビー小体型認知症では、実際にはないものがはっきり見える具体的な幻視や、パーキンソン症状、症状の変動が特徴的。',
        questionAudio: 'audio/explain/03-02-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03-03-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '認知症の評価に用いる検査は?',
        choices: ['フェイススケール', '長谷川式スケール', 'ブリストルスケール', 'バーセルインデックス'],
        correctIndex: 1,
        explanation: '長谷川式簡易知能評価スケール(HDS-R)は認知症の評価に使う。フェイススケールは痛み、ブリストルスケールは便の性状、バーセルインデックスはADLの評価。',
        questionAudio: 'audio/explain/03-04-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03-05-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '前頭側頭型認知症で早期にみられるのは?',
        choices: ['人格変化や常同行動', '記憶障害が中心', '階段状の進行', '具体的な幻視'],
        correctIndex: 0,
        explanation: '前頭側頭型認知症(ピック病)では、早期から人格変化・脱抑制・常同行動がみられ、記憶は比較的保たれやすい。',
        questionAudio: 'audio/explain/03-06-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03-07-voice.wav',
        answerDuration: 60,
    },
];
