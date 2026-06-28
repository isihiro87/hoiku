// 保存用ファイル - 02 脳神経・骨関節筋肉の仕組み（L24・L25）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/05_kokoro_to_karada/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　こころとからだの仕組み';
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
        question: '高齢者の転倒による骨折で最も多い部位は？',
        choices: ['膝蓋骨骨折', '大腿骨頸部骨折', '骨盤骨折', '脛骨骨折'],
        correctIndex: 1,
        explanation: '高齢者の転倒では大腿骨頸部骨折が多い。骨の再生能力が低下しているため治癒に時間がかかり、生活不活発病の原因にもなる。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '感覚性言語野（ウェルニッケ領野）がある脳の部位は？',
        choices: ['前頭葉', '後頭葉', '頭頂葉', '側頭葉'],
        correctIndex: 3,
        explanation: '感覚性言語野（ウェルニッケ領野）は側頭葉にあり言語の理解を担う。運動性言語野（ブローカ領野）は前頭葉にある。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '骨のカルシウムの吸収を促進するビタミンは？',
        choices: ['ビタミンD', 'ビタミンC', 'ビタミンK', 'ビタミンA'],
        correctIndex: 0,
        explanation: '骨のカルシウムはビタミンDによって吸収が促進される。骨にはカルシウムの摂取と適度な運動がよい。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
