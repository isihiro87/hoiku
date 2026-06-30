// 保存用ファイル - 03 介護過程・ケアマネジメント・専門職の役割
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
        question: '施設サービス計画（ケアプラン）を作成する専門職は？',
        choices: ['介護福祉士', '介護支援専門員', '社会福祉士', '作業療法士'],
        correctIndex: 1,
        explanation: '施設サービス計画の作成は介護支援専門員が行う。介護にかかわる専門職には医療職・介護職・相談援助職がある。',
        questionAudio: 'audio/explain/03_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '介護計画の目標を記述するときの主語は？',
        choices: ['利用者', '主治医', '介護福祉職', '家族'],
        correctIndex: 0,
        explanation: '目標の主語は主体者である利用者にする。利用者と話し合いながら、生活課題の解決を目指してつくる。',
        questionAudio: 'audio/explain/03_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: 'モニタリングで問題点が見つかったとき、次に行うのは？',
        choices: ['契約', '終結', '再アセスメント', '文書交付'],
        correctIndex: 2,
        explanation: 'モニタリングの結果、問題点が見つかった場合は、目標設定と計画を見直すため再アセスメントを行う。',
        questionAudio: 'audio/explain/03_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_06-voice.wav',
        answerDuration: 60,
    },
];
