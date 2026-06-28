// 保存用ファイル - 01 家事支援（調理・洗濯）の介護技術（家事・安眠・居住環境）
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
        question: '三大栄養素に含まれるのは？',
        choices: ['ナトリウム', 'ビタミン', '炭水化物', 'カルシウム'],
        correctIndex: 2,
        explanation: '三大栄養素は炭水化物・脂質・たんぱく質。これにビタミン・無機質（ミネラル）を加えたものが五大栄養素である。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '亜鉛が欠乏すると生じるのは？',
        choices: ['浮腫', '夜盲症', '鉄欠乏性貧血', '味覚障害'],
        correctIndex: 3,
        explanation: '亜鉛が欠乏すると味覚障害や皮膚炎になる。亜鉛は味覚・嗅覚・聴覚を正常に保つはたらきがある。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: 'セーターなどニット製品の型崩れを防ぐ干し方は？',
        choices: ['つり干し', '平干し', '日なた干し', 'ハンガー干し'],
        correctIndex: 1,
        explanation: 'ニット製品はつり干しやハンガー干しだと自重で伸びて型崩れするため、平らに広げて干す「平干し」が適している。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '色柄物の衣類にも使える漂白剤は？',
        choices: ['塩素系漂白剤', '酸素系漂白剤', '還元系漂白剤', '中和系漂白剤'],
        correctIndex: 1,
        explanation: '塩素系漂白剤は脱色力が強く白物専用。色柄物には脱色しにくい酸素系漂白剤を用いる。還元系は鉄分による黄ばみなどに使う。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
