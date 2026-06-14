// 保存用ファイル - 24 復習・横断問題（章をまたいだ確認）①
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
        question: '無機質とその欠乏症の組み合わせとして、正しいものは?',
        choices: ['亜鉛 ― 甲状腺機能障害', 'ヨウ素 ― 味覚障害', '鉄 ― 鉄欠乏性貧血', 'カルシウム ― 高血圧'],
        correctIndex: 2,
        explanation: '鉄の欠乏で鉄欠乏性貧血。ヨウ素欠乏は甲状腺機能障害、亜鉛欠乏は味覚障害。',
        questionAudio: 'audio/explain/24-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '数値の組み合わせとして、誤っているものは?',
        choices: ['脂質のエネルギー　9kcal/g', '乳児の水分割合　約80%', '乳歯の本数　28本', '間食の目安　1日のエネルギーの10〜20%'],
        correctIndex: 2,
        explanation: '乳歯は20本。永久歯が28本（親知らず除く）。',
        questionAudio: 'audio/explain/24-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '食中毒の原因と特徴の組み合わせとして、正しいものは?',
        choices: ['腸炎ビブリオ ― 海中にいて食塩濃度3%で増殖', 'ノロウイルス ― 熱に強く加熱では死なない', 'ウェルシュ菌 ― 好気性で酸素を好む', 'サルモネラ ― 熱に強い'],
        correctIndex: 0,
        explanation: '腸炎ビブリオは沿岸の海中にいて食塩濃度3%でよく増殖。真水で洗う。',
        questionAudio: 'audio/explain/24-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: 'ビタミンと多く含む食品の組み合わせとして、誤っているものは?',
        choices: ['ビタミンD ― 魚介類・きのこ類', 'ビタミンA ― レバー・うなぎ・緑黄色野菜', 'ビタミンC ― 果物・野菜・いも類', 'ビタミンB1 ― 海藻・乳製品'],
        correctIndex: 3,
        explanation: 'ビタミンB1は胚芽・豚肉・豆類に多い。',
        questionAudio: 'audio/explain/24-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/24-07-voice.wav',
        answerDuration: 90,
    },
];
