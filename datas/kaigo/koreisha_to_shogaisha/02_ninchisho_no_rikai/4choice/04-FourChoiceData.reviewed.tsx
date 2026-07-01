// 保存用ファイル - 04 認知症の理解（L9認知症の行動・心理症状・L10認知症のある人の生活への理解）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/02_ninchisho_no_rikai/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　認知症の理解';
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
        question: '次のうち、認知症のBPSD（行動・心理症状）に分類される症状は？',
        choices: ['病識の低下', '視覚認知障害', '性格の変化', '睡眠障害'],
        correctIndex: 3,
        explanation: '睡眠障害は不眠・過眠・睡眠覚醒リズムの障害などで、BPSDで現れる。視覚認知障害や性格の変化は中核症状。',
        questionAudio: 'audio/explain/04_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '見る・話す・触れる・立つを4つの柱とする認知症ケアの技法は？',
        choices: ['ユマニチュード', 'パーソン・センタード・ケア', 'バリデーション', 'リアリティ・オリエンテーション'],
        correctIndex: 0,
        explanation: 'ユマニチュードは「人間らしさを取り戻す」という意味の造語で、見る・話す・触れる・立つを4つの柱とする。',
        questionAudio: 'audio/explain/04_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: 'トム・キットウッドが提唱した、認知症の人本人を中心とする考え方は？',
        choices: ['ノーマライゼーション', 'パーソン・センタード・ケア', 'エンパワメント', 'レスパイトケア'],
        correctIndex: 1,
        explanation: 'トム・キットウッドは、その人らしさを尊重する利用者本位の視点としてパーソン・センタード・ケアを提唱した。',
        questionAudio: 'audio/explain/04_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_06-voice.wav',
        answerDuration: 60,
    },
];
