// 保存用ファイル - 03 子どもの健康と食生活の意義③
// フォルダ: datas/hoiku/shoku_eiyo/four_choice
// 自動生成 (gen_4choice.py)。duration はプレースホルダ。音声配置後 update_duration.py で更新。

export const titleData = '保育士　食と栄養';
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
        question: 'むし歯（う歯）の原因菌として知られるものは?',
        choices: ['大腸菌', 'ミュータンス連鎖球菌', 'サルモネラ菌', '乳酸菌'],
        correctIndex: 1,
        explanation: '歯垢中のミュータンス連鎖球菌が原因菌。',
        questionAudio: 'audio/explain/03-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/03-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '乳幼児栄養調査で、授乳について困っていることの1位は?',
        choices: ['母乳が不足気味', '授乳が負担、大変', '母乳が足りているかわからない', 'ミルクを飲まない'],
        correctIndex: 2,
        explanation: '「母乳が足りているかどうかわからない」が約40.7%で最多。',
        questionAudio: 'audio/explain/03-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/03-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '朝食の欠食について、誤っているものは?',
        choices: ['子どもの就寝時刻が遅いほど欠食割合が高い', '親（母）に朝食欠食があると子どもも欠食傾向にある', '菓子・果物のみを食べた場合も欠食に含む', '朝食欠食は乳児期に最も多い'],
        correctIndex: 3,
        explanation: '成長期（特に中学・高校生）の課題。15〜19歳男性で高い。',
        questionAudio: 'audio/explain/03-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/03-05-voice.wav',
        answerDuration: 90,
    },
];
