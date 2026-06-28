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
        question: '「日陰のつり干しがよい」を意味する洗濯表示が示すのは？',
        choices: ['アイロン温度', '漂白の可否', '乾燥（干し方）', '洗濯温度'],
        correctIndex: 2,
        explanation: '設問の表示はどちらも干し方に関する記号で、「日陰のつり干しがよい」を意味する。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '漂白剤の種類は、酸化型と何型？',
        choices: ['分解型', '還元型', '酸性型', '中和型'],
        correctIndex: 1,
        explanation: '漂白剤には酸化型と還元型があり、色や柄により使用できる種類が異なる。綿の白物は酸化型・還元型ともに使用できる。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
