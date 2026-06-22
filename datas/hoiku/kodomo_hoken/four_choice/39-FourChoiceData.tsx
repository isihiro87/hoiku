// 保存用ファイル - 39 子どもの疾病の予防及び適切な対応③
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
        question: 'mRNAワクチンが用いられているのは?',
        choices: ['BCG', '新型コロナウイルス', '日本脳炎', 'MR'],
        correctIndex: 1,
        explanation: 'mRNAワクチンは新型コロナウイルスで用いられている。',
        questionAudio: 'audio/explain/39-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/39-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'けいれん(ひきつけ)時の対応として正しいものは?',
        choices: ['あおむけに寝かせる', '口に物を入れる', '体と頭を横にする', 'すぐ食事させる'],
        correctIndex: 2,
        explanation: 'けいれん時は体と頭を横に向け吐物を防ぐ。',
        questionAudio: 'audio/explain/39-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/39-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '嘔吐後、経口摂取を控える時間の目安は?',
        choices: ['すぐ', '約1時間', '半日', '1日'],
        correctIndex: 1,
        explanation: '嘔吐後は約1時間ほど経口摂取を控える。',
        questionAudio: 'audio/explain/39-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/39-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '乳幼児への粉薬の与え方として適切なのは?',
        choices: ['ミルクに混ぜる', 'ぬるま湯で練って頬の内側にぬる', 'そのまま飲ませる', 'ミルクに溶かす'],
        correctIndex: 1,
        explanation: '粉薬はぬるま湯で練り頬の内側にぬるとよい。',
        questionAudio: 'audio/explain/39-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/39-07-voice.wav',
        answerDuration: 90,
    },
];
