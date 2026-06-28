// 保存用ファイル - 02 人間の尊厳と専門職（義務規定・世帯・老年人口）
// フォルダ: datas/kaigo/fukushi_seido/01_jinken_senmonshoku/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　人間の尊厳と専門職';
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
        question: '全人口に占める65歳以上の人口の割合を表す用語は？',
        choices: ['従属人口指数', '生産年齢人口比率', '老年人口比率', '年少人口比率'],
        correctIndex: 2,
        explanation: '全人口に占める65歳以上の人口の割合を老年人口比率という。これが14％を超えた社会を高齢社会という。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '2007（平成19）年の法改正で介護福祉士に追加された義務は？',
        choices: ['秘密保持義務', '信用失墜行為の禁止', '連携', '誠実義務・資質向上の責務'],
        correctIndex: 3,
        explanation: '「誠実義務」と「資質向上の責務」の規定は、2007（平成19）年の社会福祉士及び介護福祉士法の改正で追加された。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '2016年の国民生活基礎調査で最も多い世帯構造は？',
        choices: ['夫婦のみの世帯', '夫婦と未婚の子のみの世帯', '単独世帯', '高齢者世帯'],
        correctIndex: 1,
        explanation: '「夫婦と未婚の子のみの世帯」が全世帯の29.5％で最多。次いで単独世帯、夫婦のみの世帯の順となっている。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
