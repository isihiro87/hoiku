// 保存用ファイル - 07 栄養に関する基本的知識④
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
        question: '鉄が欠乏したときに起こりやすい症状は?',
        choices: ['甲状腺機能障害', '鉄欠乏性貧血', '味覚障害', '高血圧'],
        correctIndex: 1,
        explanation: '鉄はヘモグロビンの成分。欠乏で鉄欠乏性貧血。',
        questionAudio: 'audio/explain/07-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'カルシウムについて、誤っているものは?',
        choices: ['骨と歯の形成に関わる', '欠乏すると骨粗鬆症を起こしやすい', 'ビタミンDは吸収を促進する', '乳製品より緑黄色野菜の方が吸収率が高い'],
        correctIndex: 3,
        explanation: '牛乳のカゼインがカルシウムの吸収率を高め、乳製品の吸収率が高い。',
        questionAudio: 'audio/explain/07-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '不足すると味覚障害を起こしやすい無機質は?',
        choices: ['ナトリウム', 'カリウム', '亜鉛', 'ヨウ素'],
        correctIndex: 2,
        explanation: '亜鉛は味覚を正常に保つ。欠乏で味覚障害。',
        questionAudio: 'audio/explain/07-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '脂溶性ビタミンの組み合わせとして正しいものは?',
        choices: ['A・B・C・D', 'A・D・E・K', 'B1・B2・C・K', 'C・葉酸・ナイアシン'],
        correctIndex: 1,
        explanation: '脂溶性ビタミンはA・D・E・K。過剰摂取で過剰症を起こす。',
        questionAudio: 'audio/explain/07-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/07-07-voice.wav',
        answerDuration: 90,
    },
];
