// 保存用ファイル - 49 保育における保健活動の計画及び評価①
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
        question: '妊娠の届出をした者に母子健康手帳が配布される根拠法は?',
        choices: ['児童福祉法', '母子保健法', '学校保健安全法', '健康増進法'],
        correctIndex: 1,
        explanation: '母子健康手帳は母子保健法に基づき配布される。',
        questionAudio: 'audio/explain/49-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/49-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '母子保健法が制定されたのは?',
        choices: ['1947年', '1965年', '1994年', '2000年'],
        correctIndex: 1,
        explanation: '母子保健法の制定は1965年。',
        questionAudio: 'audio/explain/49-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/49-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '「健やか親子21(第2次)」の重点課題に含まれるのは?',
        choices: ['待機児童対策', '妊娠期からの児童虐待防止対策', '学童保育', '高齢者支援'],
        correctIndex: 1,
        explanation: '健やか親子21(第2次)の重点課題に妊娠期からの児童虐待防止対策がある。',
        questionAudio: 'audio/explain/49-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/49-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '乳児家庭全戸訪問事業(こんにちは赤ちゃん事業)の根拠法は?',
        choices: ['母子保健法', '児童福祉法', '学校保健安全法', '予防接種法'],
        correctIndex: 1,
        explanation: 'こんにちは赤ちゃん事業の根拠は児童福祉法。',
        questionAudio: 'audio/explain/49-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/49-07-voice.wav',
        answerDuration: 90,
    },
];
