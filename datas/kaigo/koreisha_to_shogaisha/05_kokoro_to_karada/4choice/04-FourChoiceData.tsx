// 保存用ファイル - 04 循環器・呼吸器の仕組み（L27・L28）
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
        question: '心臓から血液を全身へ送り出す血管は？',
        choices: ['静脈', '動脈', '毛細血管', 'リンパ管'],
        correctIndex: 1,
        explanation: '心臓から全身へ血液を送り出す血管が動脈で、全身から心臓に戻ってくる血管が静脈である。',
        questionAudio: 'audio/explain/04_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '高齢者が嚥下機能の低下により起こしやすい肺炎は？',
        choices: ['誤嚥性肺炎', '過敏性肺炎', '間質性肺炎', 'マイコプラズマ肺炎'],
        correctIndex: 0,
        explanation: '高齢者は加齢に伴い嚥下機能が低下するため、誤嚥性肺炎を起こしやすい。インフルエンザ罹患時の合併症も多い。',
        questionAudio: 'audio/explain/04_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '慢性気管支炎と肺気腫の総称を何という？',
        choices: ['肺結核', '間質性肺炎', '慢性閉塞性肺疾患', '気管支喘息'],
        correctIndex: 2,
        explanation: '慢性閉塞性肺疾患（COPD）は、慢性気管支炎と肺気腫の総称である。',
        questionAudio: 'audio/explain/04_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/04_06-voice.wav',
        answerDuration: 60,
    },
];
