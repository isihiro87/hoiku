// 保存用ファイル - 02 秘密保持・リハビリテーションの領域・専門職
// フォルダ: datas/kaigo/kaigo_shien/05_team_kaigokatei/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　チームケアと介護過程';
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
        question: '職務上知り得た情報を正当な理由なく漏らさない義務を何という？',
        choices: ['秘密保持義務', 'インフォームドコンセント', 'アドボカシー', '自己決定'],
        correctIndex: 0,
        explanation: '倫理綱領には、プライバシー保護のため職務上知り得た個人情報を守る秘密保持義務が定められている。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '利き手の交換が該当するリハビリテーションの領域は？',
        choices: ['社会的リハビリテーション', '教育的リハビリテーション', '職業的リハビリテーション', '医学的リハビリテーション'],
        correctIndex: 3,
        explanation: '利き手の交換は、補償的な機能を伸ばす医学的リハビリテーションに該当する。リハビリには4つの領域がある。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '医師の指示の下で義肢・装具の採寸や製作、適合を行う専門職は？',
        choices: ['言語聴覚士', '義肢装具士', '作業療法士', '理学療法士'],
        correctIndex: 1,
        explanation: '義肢装具士は国家資格で、医師の指示の下、義肢・装具の採寸・採型・製作・身体への適合を行う。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
