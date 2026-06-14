// 保存用ファイル - 11 子どもの発育・発達と食生活②
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
        question: '1歳頃に育児用ミルクから切り替える時期に、たんぱく質・鉄・ビタミンを補う目的で用いるミルクは?',
        choices: ['ペプチドミルク', 'フォローアップミルク', '液体ミルク', '調製粉乳'],
        correctIndex: 1,
        explanation: 'フォローアップミルク。使用は早くても生後9か月以降。',
        questionAudio: 'audio/explain/11-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '生後1週間ごろまでに分泌される乳について、誤っているものは?',
        choices: ['黄白色で粘りがある', 'たんぱく質や無機質を多く含む', '乳糖が多く甘味が強い', '免疫グロブリンなどの感染防御因子を含む'],
        correctIndex: 2,
        explanation: '初乳は乳糖が少なく、胎便をうながす作用がある。甘味が強いのは成熟乳。',
        questionAudio: 'audio/explain/11-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '母乳による育児の利点として、誤っているものは?',
        choices: ['乳児に最適な成分組成で代謝負担が少ない', '感染防御因子を含む', '肥満や2型糖尿病の発症リスクを高める', '母子関係の良好な形成'],
        correctIndex: 2,
        explanation: '母乳は肥満や2型糖尿病の発症リスクを「低下」させる。',
        questionAudio: 'audio/explain/11-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '粉ミルクの調乳について、正しいものは?',
        choices: ['水で溶かすだけでよい', '70℃以上の湯を用いる', '調乳後は常温で長時間保存できる', '月齢ごとに濃度を変える'],
        correctIndex: 1,
        explanation: 'サカザキ菌などの感染リスク低減のため70℃以上の湯を用いる。育児用ミルクは各月齢とも同一濃度。',
        questionAudio: 'audio/explain/11-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/11-07-voice.wav',
        answerDuration: 90,
    },
];
