// 保存用ファイル - 25 子どもの心身の健康状態とその把握②
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
        question: '盛り上がりがなく赤くなっている発疹は?',
        choices: ['紅斑', '丘疹', '水疱', '膿疱'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/25-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '母子保健法で定められている乳幼児健診は?',
        choices: ['出生時健診', '1か月健診', '1歳6か月・3歳児健診', '5歳児健診'],
        correctIndex: 2,
        explanation: '',
        questionAudio: 'audio/explain/25-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '1歳6か月児健診・3歳児健診の根拠法は?',
        choices: ['学校保健安全法', '母子保健法', '児童福祉法', '健康増進法'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/25-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '就学時健康診断の根拠法は?',
        choices: ['母子保健法', '学校保健安全法', '児童福祉法', '予防接種法'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/25-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-07-voice.wav',
        answerDuration: 90,
    },
];
