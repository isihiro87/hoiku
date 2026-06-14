// 保存用ファイル - 29 まとめ・ひっかけ
// フォルダ: datas/hoiku/kyoiku_genri/four_choice
// 自動生成 (gen.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　教育原理';
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
        question: '次のうち正しいのは?',
        choices: ['保育所は学校教育法で定められた学校である', '学校教育法第1条の学校に幼稚園は含まれる', '体罰は教育上必要なら認められる', '教育基本法は一度も改正されていない'],
        correctIndex: 1,
        explanation: '幼稚園は学校教育法第1条の学校。保育所は含まれず、体罰は禁止、教育基本法は2006年改正済み。',
        questionAudio: 'audio/explain/29-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/29-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '次のうち誤っているのは?',
        choices: ['『エミール』の著者はルソーである', '「性格形成学院」を開いたのはオーエンである', '『児童の世紀』の著者はペスタロッチである', '「恩物」を考案したのはフレーベルである'],
        correctIndex: 2,
        explanation: '『児童の世紀』の著者はエレン・ケイ。',
        questionAudio: 'audio/explain/29-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/29-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '日本国憲法と教育基本法が施行されたのは何年?',
        choices: ['1945年', '1946年', '1947年', '1948年'],
        correctIndex: 2,
        explanation: '1947年施行。1946年は憲法公布の年。',
        questionAudio: 'audio/explain/29-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/29-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '「貝原益軒」と関係が深い著書は?',
        choices: ['『和俗童子訓』', '『学問のすゝめ』', '『児童の世紀』', '『人間の教育』'],
        correctIndex: 0,
        explanation: '貝原益軒『和俗童子訓』。',
        questionAudio: 'audio/explain/29-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/29-07-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q5',
        question: '「子どもの発見」と最も関係が深いのは?',
        choices: ['ルソー', 'コメニウス', 'ヘルバルト', 'オーエン'],
        correctIndex: 0,
        explanation: 'ルソーは「子どもの発見者」と呼ばれる。',
        questionAudio: 'audio/explain/29-08-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/29-09-voice.wav',
        answerDuration: 90,
    },
];
