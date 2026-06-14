// 保存用ファイル - 40 子どもの疾病の予防及び適切な対応④
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
        question: '鼻出血時の対応として正しいものは?',
        choices: ['上を向かせる', '鼻をつまんで下を向かせる', '首の後ろを叩く', '寝かせる'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/40-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/40-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '保育所で薬を預かる時、保護者に持参してもらうのは?',
        choices: ['診断書', '与薬依頼票', '母子健康手帳', '健康保険証'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/40-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/40-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: 'インフルエンザの出席停止の基準は?',
        choices: ['解熱後3日', '発症後5日かつ解熱後2日(幼児3日)', '発疹消失まで', '痂皮化まで'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/40-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/40-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '麻疹の出席停止の基準は?',
        choices: ['解熱後3日を経過するまで', '発疹消失まで', '痂皮化まで', '主要症状消退後2日'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/40-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/40-07-voice.wav',
        answerDuration: 90,
    },
];
