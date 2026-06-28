// 保存用ファイル - 03 肢体不自由者・内部障害者の生活（L18・L19）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/04_kakushogai_no_seikatsu/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　障害者の生活';
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
        question: '心臓機能障害（慢性心不全）でみられる自覚症状は？',
        choices: ['麻痺', '呼吸困難', '難聴', '視野狭窄'],
        correctIndex: 1,
        explanation: '心臓機能障害は慢性心不全を起こすことが多く、呼吸困難・動悸・息切れ・浮腫などがみられる。減塩の食事が大切。',
        questionAudio: 'audio/explain/03_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '自分の意思に反した不随意運動が生じる脳性麻痺の型は？',
        choices: ['運動失調型', '低緊張型', '痙直型', 'アテトーゼ型'],
        correctIndex: 3,
        explanation: 'アテトーゼ型は、自分の意思では運動をうまくコントロールできず、不随意運動が生じる脳性麻痺である。',
        questionAudio: 'audio/explain/03_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '回腸ストーマでみられる便の性状は？',
        choices: ['固形便', '硬便', '水様便', '泥状便'],
        correctIndex: 2,
        explanation: '回腸ストーマは水分が吸収される前に排泄するため水様便になる。結腸ストーマでは固形状の便になる。',
        questionAudio: 'audio/explain/03_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_06-voice.wav',
        answerDuration: 60,
    },
];
