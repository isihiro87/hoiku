// 保存用ファイル - 18 家庭や児童福祉施設における食事と栄養②
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
        question: '原因食品が生カキなど二枚貝に多く、85〜90℃で90秒以上の加熱が望まれるものは?',
        choices: ['ブドウ球菌', 'カンピロバクター', 'ノロウイルス', 'O157'],
        correctIndex: 2,
        explanation: 'ノロウイルス。ほとんどが経口感染。',
        questionAudio: 'audio/explain/18-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'カレーやシチューの作り置きで起こりやすく、芽胞をつくり100℃でも耐える嫌気性菌は?',
        choices: ['ウェルシュ菌', 'サルモネラ', '腸炎ビブリオ', 'ブドウ球菌'],
        correctIndex: 0,
        explanation: 'ウェルシュ菌。酸素のない所を好み、再加熱でも防げない。',
        questionAudio: 'audio/explain/18-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '食品添加物の安全性と有効性を確認し、指定する省庁は?',
        choices: ['厚生労働省', '農林水産省', '文部科学省', '消費者庁'],
        correctIndex: 3,
        explanation: '消費者庁が指定する。',
        questionAudio: 'audio/explain/18-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '消費期限と賞味期限について、正しいものは?',
        choices: ['消費期限は日持ちが長い食品に表示される', '賞味期限は弁当や惣菜に表示される', '消費期限は製造後おおむね5日以内の食品に表示される', '両者は同じ意味である'],
        correctIndex: 2,
        explanation: '消費期限は弁当・惣菜・調理パンなど。賞味期限はハム・牛乳・調味料など日持ちが長いもの。',
        questionAudio: 'audio/explain/18-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/18-07-voice.wav',
        answerDuration: 90,
    },
];
