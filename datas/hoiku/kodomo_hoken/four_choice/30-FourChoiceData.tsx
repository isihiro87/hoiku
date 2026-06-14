// 保存用ファイル - 30 子どもの心身の健康状態とその把握⑦
// フォルダ: datas/hoiku/kodomo_hoken/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　子どもの保健';
export const subtitleData = '4択クイズ';

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
        question: '蟯虫(ギョウ虫)の検査方法は?',
        choices: ['血液検査', 'セロハン法', '尿検査', '迅速検査'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/30-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/30-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: 'RSウイルス感染症で重症化しやすいのは?',
        choices: ['成人', '6か月未満の乳児', '学童', '高齢者'],
        correctIndex: 1,
        explanation: '',
        questionAudio: 'audio/explain/30-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/30-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '院内感染で問題となる、抗生剤に耐性をもつブドウ球菌は?',
        choices: ['MRSA', 'RS', 'HPV', 'BCG'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/30-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/30-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '「水いぼ」と呼ばれるのは?',
        choices: ['伝染性軟属腫', '伝染性膿痂疹', '水痘', '鵞口瘡'],
        correctIndex: 0,
        explanation: '',
        questionAudio: 'audio/explain/30-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/30-07-voice.wav',
        answerDuration: 90,
    },
];
