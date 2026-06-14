// 自動生成 (build_videos.py) - qas.md
// フォルダ: datas/hoiku/kyoiku_genri/01_kyoiku_kihonho/quiz
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
        question: '教育基本法は、2016（平成28）年に改正された。\n○か×か？',
        answer: '×',
        description: '改正は2006年。前文と全11条から前文と全18条になった',
        questionAudio: 'audio/explain/0-voicepeak.wav',
        questionDuration: 112,
        answerAudio: 'audio/explain/1-voicepeak.wav',
        answerDuration: 28,
    },
    {
        id: 'q2',
        question: '「人格の完成を目指し…」と教育の目的を定めているのは日本国憲法第26条である。',
        answer: '×',
        description: 'これは教育基本法第1条。憲法第26条は教育を受ける権利・受けさせる義務・義務教育の無償',
        questionAudio: 'audio/explain/2-voicepeak.wav',
        questionDuration: 196,
        answerAudio: 'audio/explain/3-voicepeak.wav',
        answerDuration: 28,
    },
    {
        id: 'q3',
        question: '教育基本法は、1947（昭和22）年に公布・施行された。',
        answer: '○',
        description: '日本国憲法との一体性のもとに作成され、1947年に公布・施行。約60年間変更なく続いた',
        questionAudio: 'audio/explain/4-voicepeak.wav',
        questionDuration: 147,
        answerAudio: 'audio/explain/5-voicepeak.wav',
        answerDuration: 26,
    },
    {
        id: 'q4',
        question: '教育基本法第10条は、父母その他の保護者が子の教育について第一義的責任を有すると定めている。',
        answer: '○',
        description: '生活に必要な習慣を身に付けさせ、自立心を育成し、心身の調和のとれた発達を図るよう努める。第10条は家庭教育',
        questionAudio: 'audio/explain/6-voicepeak.wav',
        questionDuration: 222,
        answerAudio: 'audio/explain/7-voicepeak.wav',
        answerDuration: 26,
    },
];
