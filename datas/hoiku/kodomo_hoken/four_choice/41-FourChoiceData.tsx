// 保存用ファイル - 41 子どもの疾病の予防及び適切な対応⑤
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
        question: '水痘の出席停止の基準は?',
        choices: ['解熱後3日', 'すべての発疹が痂皮化するまで', '発疹消失まで', '5日経過'],
        correctIndex: 1,
        explanation: '水痘はすべての発疹が痂皮化するまで出席停止。',
        questionAudio: 'audio/explain/41-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/41-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '流行性耳下腺炎の出席停止の基準は?',
        choices: ['腫脹後5日かつ全身状態良好まで', '解熱後3日', '痂皮化まで', '発疹消失まで'],
        correctIndex: 0,
        explanation: '流行性耳下腺炎は腫脹後5日かつ全身状態良好まで出席停止。',
        questionAudio: 'audio/explain/41-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/41-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '出席停止日数で「解熱した日」はどう数える?',
        choices: ['第1日として数える', '数えず翌日を第1日とする', '2日として数える', '数えない'],
        correctIndex: 1,
        explanation: '出席停止日数は解熱日を数えず翌日を第1日とする。',
        questionAudio: 'audio/explain/41-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/41-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '学校で予防すべき感染症を定める法令は?',
        choices: ['母子保健法', '学校保健安全法施行規則', '児童福祉法', '感染症法'],
        correctIndex: 1,
        explanation: '出席停止は学校保健安全法施行規則で定める。',
        questionAudio: 'audio/explain/41-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/41-07-voice.wav',
        answerDuration: 90,
    },
];
