// 保存用ファイル - 15 食育の基本と内容①
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
        question: '「食育基本法」が制定されたのはいつ?',
        choices: ['2000年', '2005年', '2010年', '2015年'],
        correctIndex: 1,
        explanation: '2005年（平成17年）制定。',
        questionAudio: 'audio/explain/15-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '食育推進会議が置かれている省庁と会長の組み合わせとして正しいものは?',
        choices: ['厚生労働省・厚生労働大臣', '文部科学省・文部科学大臣', '農林水産省・農林水産大臣', '内閣府・内閣総理大臣'],
        correctIndex: 2,
        explanation: '食育推進会議は農林水産省に置かれ、会長は農林水産大臣。',
        questionAudio: 'audio/explain/15-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '保育所保育指針に示される食育について、誤っているものは?',
        choices: ['「食を営む力」の育成の基礎を培うことを目標とする', '食育計画を全体的な計画に基づいて作成する', '保健師が配置されている場合は専門性を生かした対応を図る', '保育所における食育は重要である'],
        correctIndex: 2,
        explanation: '正しくは「栄養士が配置されている場合」。',
        questionAudio: 'audio/explain/15-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '保育所における食育に関する指針の「食育の5項目」に**含まれない**ものは?',
        choices: ['食と健康', '食と人間関係', '食と文化', '食と経済'],
        correctIndex: 3,
        explanation: '5項目は「食と健康」「食と人間関係」「食と文化」「いのちの育ちと食」「料理と食」。',
        questionAudio: 'audio/explain/15-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/15-07-voice.wav',
        answerDuration: 90,
    },
];
