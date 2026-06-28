// 保存用ファイル - 01 OJT・スーパービジョン・介護福祉士の倫理
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
        question: '介護現場で先輩職員が実務を通して指導する教育方法は？',
        choices: ['Off-JT', 'スーパービジョン', 'OJT', 'SDS'],
        correctIndex: 2,
        explanation: 'OJTは新人の介護職や実習生を対象に、介護現場で一定期間教育を行う方法。先輩職員が同行して指導する。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: 'スーパービジョンがもつ3つの機能は？',
        choices: ['計画・実行・評価', '管理・教育・支持', '受容・共感・傾聴', '身体・精神・社会'],
        correctIndex: 1,
        explanation: 'スーパービジョンには管理的機能・教育的機能・支持的機能の3つがある。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '介護福祉士に求められる倫理が掲げられているのは？',
        choices: ['ICF', '社会福祉士及び介護福祉士法', '介護保険法', '日本介護福祉士会倫理綱領'],
        correctIndex: 3,
        explanation: '専門職としての介護福祉士の倫理は、日本介護福祉士会倫理綱領に掲げられている。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
];
