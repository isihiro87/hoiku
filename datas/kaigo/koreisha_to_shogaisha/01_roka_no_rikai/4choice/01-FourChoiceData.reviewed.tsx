// 保存用ファイル - 01 老化の理解（L1発達段階と発達課題・L2老化による身体的変化と疾患）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/01_roka_no_rikai/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　老化の理解';
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
        question: '加齢に伴い、まず聞こえにくくなる音域は？',
        choices: ['高音域', '低音域', '全音域', '中音域'],
        correctIndex: 0,
        explanation: '内耳から大脳への聴覚伝達の機能低下により、1,000Hz以上の高音域の聴力が障害されやすい。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '乳児期に、話せる単語数が急速に増えていく現象を表す用語は？',
        choices: ['初語', '喃語', '語彙爆発', '一語文'],
        correctIndex: 2,
        explanation: '語彙爆発とは、急速に話せる単語数が増えていくことをいう。初語は1歳前後、喃語は生後6か月頃にみられる。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '刷り込みには臨界期があると提唱した人物は？',
        choices: ['ジェンセン', 'ゲゼル', 'ワトソン', 'ローレンツ'],
        correctIndex: 3,
        explanation: '刻印づけ（刷り込み）には臨界期があると提唱したのはローレンツ。ゲゼルは成熟優位説、ワトソンは学習優位説を唱えた。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '高齢者の疾病の特徴として、複数の疾患を合併し進行しやすいのは？',
        choices: ['軽症化', '慢性化', '急性化', '一過性'],
        correctIndex: 1,
        explanation: '高齢者は複数の疾患を合併していることが多く慢性化しやすい。また症状が非典型的で発見が遅れることもある。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
