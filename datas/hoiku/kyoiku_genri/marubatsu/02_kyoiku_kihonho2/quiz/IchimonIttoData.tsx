// 自動生成 (build_videos.py) - qas.md
// フォルダ: datas/hoiku/kyoiku_genri/02_kyoiku_kihonho2/quiz
// 保育士試験 教育原理 ○×クイズ

export const titleData = '保育士　教育原理';

export interface IchimonIttoScene {
    id: string;
    question: string;
    answer: string;
    description?: string;
    questionAudio: string;
    questionDuration: number;
    answerAudio: string;
    answerDuration: number;
}

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '教育基本法第3条は「生涯学習の理念」を定めている。\n○か×か？',
        answer: '○',
        description: '国民一人一人が生涯にわたりあらゆる機会・場所で学習でき、その成果を生かせる社会の実現を図る',
        questionAudio: 'audio/explain/0-voicepeak.wav',
        questionDuration: 123,
        answerAudio: 'audio/explain/1-voicepeak.wav',
        answerDuration: 26,
    },
    {
        id: 'q2',
        question: '教育基本法第13条は「学校、家庭及び地域住民等の相互の連携協力」を定めている。',
        answer: '○',
        description: 'それぞれの役割と責任を自覚し、相互の連携及び協力に努める',
        questionAudio: 'audio/explain/2-voicepeak.wav',
        questionDuration: 213,
        answerAudio: 'audio/explain/3-voicepeak.wav',
        answerDuration: 26,
    },
    {
        id: 'q3',
        question: '教育基本法は制定時から前文及び全18条で構成されていた。',
        answer: '×',
        description: '制定時は前文及び全11条。前文及び全18条になったのは2006年改正後',
        questionAudio: 'audio/explain/4-voicepeak.wav',
        questionDuration: 151,
        answerAudio: 'audio/explain/5-voicepeak.wav',
        answerDuration: 28,
    },
];
