// 保存用ファイル - 02 教育を受ける権利と教育基本法
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
        question: '「教育を受ける権利」を定めた憲法の条文は?',
        choices: ['第26条', '第11条', '第14条', '第25条'],
        correctIndex: 0,
        explanation: '第26条。教育を受ける権利と義務教育の無償を定める。',
        questionAudio: 'audio/explain/02-00-voice.wav',
        questionDuration: 95,
        answerAudio: 'audio/explain/02-01-voice.wav',
        answerDuration: 47,
    },
    {
        id: 'q2',
        question: '教育基本法が最初に公布・施行されたのは何年?',
        choices: ['1890年', '1947年', '1946年', '2006年'],
        correctIndex: 1,
        explanation: '1947年(昭和22年)。日本国憲法と同年。',
        questionAudio: 'audio/explain/02-02-voice.wav',
        questionDuration: 117,
        answerAudio: 'audio/explain/02-03-voice.wav',
        answerDuration: 63,
    },
    {
        id: 'q3',
        question: '「健康で文化的な最低限度の生活」(生存権)を定めた条文は?',
        choices: ['第13条', '第19条', '第26条', '第25条'],
        correctIndex: 3,
        explanation: '生存権は日本国憲法第25条。',
        questionAudio: 'audio/explain/02-04-voice.wav',
        questionDuration: 117,
        answerAudio: 'audio/explain/02-05-voice.wav',
        answerDuration: 44,
    },
    {
        id: 'q4',
        question: '教育基本法が改正され全18条になったのは何年?',
        choices: ['1998年', '2006年', '2016年', '2023年'],
        correctIndex: 1,
        explanation: '2006年(平成18年)改正で前文＋全18条に。',
        questionAudio: 'audio/explain/02-06-voice.wav',
        questionDuration: 124,
        answerAudio: 'audio/explain/02-07-voice.wav',
        answerDuration: 36,
    },
];
