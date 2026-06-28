// 保存用ファイル - 02 安眠・居住環境の介護技術（家事・安眠・居住環境）
// フォルダ: datas/kaigo/kaigo_shien/03_kaji_kyumin_kankyo/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　家事・安眠・居住環境';
export const subtitleData = '介護4択';

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
        question: '睡眠薬を服用するときに、一緒にとるのを避けるべきものは？',
        choices: ['アルコール', '水', '白湯', 'ぬるま湯'],
        correctIndex: 0,
        explanation: '睡眠薬をアルコールで服用すると薬の作用が強まり、ふらつきなどが生じることがある。水か白湯で服用する。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '睡眠ホルモンともよばれ、睡眠と覚醒のリズムを調節するのは？',
        choices: ['アドレナリン', 'ドーパミン', 'インスリン', 'メラトニン'],
        correctIndex: 3,
        explanation: 'メラトニンは睡眠ホルモンともよばれ、睡眠と覚醒のリズムを調節する。加齢で分泌が減少すると不眠が起こりやすくなる。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '夜間のつまずき防止のため、寝室に用意するとよいのは？',
        choices: ['柔らかいマットレス', '高いベッド', '足元灯', '床に敷く布団'],
        correctIndex: 2,
        explanation: '暗いと足元や周囲が見えずつまずきの原因になるため、足元灯を用意して適度に明るくする。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '車いす利用や介護が必要な場合に望ましいトイレの戸は？',
        choices: ['開き戸', 'アコーディオンカーテン', '折れ戸', '引き戸'],
        correctIndex: 3,
        explanation: 'トイレの戸は、車いす利用や介護が必要な場合は引き戸が望ましく、万一に備え鍵は外からも開けられるようにする。',
        questionAudio: 'audio/explain/02_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_08-voice.wav',
        answerDuration: 60,
    },
];
