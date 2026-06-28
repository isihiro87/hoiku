// 保存用ファイル - 01 障害者福祉制度の変遷・障害者総合支援制度の仕組み（L18・L19）
// フォルダ: datas/kaigo/fukushi_seido/04_shogaisha_shien/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　障害者総合支援制度';
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
        question: '障害支援区分は何段階に分かれている？',
        choices: ['7段階', '3段階', '6段階', '5段階'],
        correctIndex: 2,
        explanation: '障害支援区分は、必要とされる支援の度合いを示す6段階の区分で、区分1が最も必要度が低く区分6へ向けて高くなる。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '政府（国）が策定を義務づけられている、障害者施策の基本的な計画は？',
        choices: ['障害児福祉計画', '障害者基本計画', '障害福祉計画', '障害者総合支援計画'],
        correctIndex: 1,
        explanation: '障害者基本法は、政府（国）に対し障害者のための施策に関する基本的な計画である障害者基本計画の策定を義務づけている。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '障害者総合支援法の対象に含まれる、原因が不明で治療法が確立していない疾病は？',
        choices: ['難病', '精神疾患', '生活習慣病', '感染症'],
        correctIndex: 0,
        explanation: '障害者総合支援法の対象は、身体障害・知的障害・精神障害（発達障害を含む）に加え、難病等も含まれる。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q4',
        question: '屋外での移動が困難な障害者に外出の支援を行う、地域生活支援事業のサービスは？',
        choices: ['同行援護', '重度訪問介護', '行動援護', '移動支援事業'],
        correctIndex: 3,
        explanation: '移動支援事業は地域生活支援事業のひとつで、社会生活上必要な外出や余暇活動等のための移動を支援する。',
        questionAudio: 'audio/explain/01_07-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_08-voice.wav',
        answerDuration: 60,
    },
];
