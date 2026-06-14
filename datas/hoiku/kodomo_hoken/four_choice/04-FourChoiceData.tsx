// 保存用ファイル - 04 子どもの心身の健康と保健の意義④
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
        question: 'ネグレクトの説明として正しいものは?',
        choices: ['暴言を浴びせる', '育児放棄', '体を傷つける', '性的な行為'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/04-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/04-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '嘱託医について正しいものは?',
        choices: ['常勤である', '月に数回の勤務が多い', '保育を担当する', '保護者が雇う'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/04-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/04-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '児童虐待で最も件数が多いのは?',
        choices: ['身体的虐待', '性的虐待', '心理的虐待', 'ネグレクト'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/04-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/04-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '虐待が疑われる場合の通告先として正しいものは?',
        choices: ['警察のみ', '市町村又は児童相談所', '学校', '医師会'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/04-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/04-07-voice.wav',
        answerDuration: 90,
    },
];
