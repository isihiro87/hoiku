// 保存用ファイル - 02 社会保障制度（年金保険・医療保険）
// フォルダ: datas/kaigo/fukushi_seido/02_shakai_hosho/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　社会保障制度';
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
        question: '障害基礎年金の障害等級の区分は？',
        choices: ['1級から5級', '1級から3級', '要介護1から5', '1級と2級'],
        correctIndex: 3,
        explanation: '障害基礎年金の障害等級は1級と2級に分けられ、それぞれ支給額が異なる。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '所得が一定以下の20歳以上の学生の国民年金保険料納付を猶予する制度は？',
        choices: ['学生納付特例制度', '法定免除', '産前産後免除', '若年者納付猶予'],
        correctIndex: 0,
        explanation: '学生納付特例制度は、所得が一定以下の20歳以上の学生が対象。保険料を納付しなくても受給資格期間に算入される。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '被保険者が出産のため休業し報酬を受けられない場合に医療保険から支給されるものは？',
        choices: ['育児休業給付', '傷病手当金', '出産手当金', '出産育児一時金'],
        correctIndex: 2,
        explanation: '出産手当金は医療保険制度の保険給付で、出産のため休業し報酬を受けられない場合に支給される（所得の喪失・減少を補填）。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
