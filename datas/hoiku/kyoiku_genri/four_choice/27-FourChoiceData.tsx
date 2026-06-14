// 保存用ファイル - 27 現代の教育課題①
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
        question: '「いじめ防止対策推進法」が公布されたのは何年?',
        choices: ['2013年', '2006年', '2011年', '2015年'],
        correctIndex: 0,
        explanation: '2013年公布。',
        questionAudio: 'audio/explain/27-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/27-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '不登校の定義となる年間欠席日数は?',
        choices: ['10日以上', '20日以上', '50日以上', '30日以上'],
        correctIndex: 3,
        explanation: '年間30日以上(病気・経済的理由を除く)。',
        questionAudio: 'audio/explain/27-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/27-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '体罰に関連する代表的な条文は?',
        choices: ['学校教育法第11条', '教育基本法第1条', '学校教育法第22条', '児童福祉法第2条'],
        correctIndex: 0,
        explanation: '学校教育法第11条(懲戒は可、体罰は禁止)。',
        questionAudio: 'audio/explain/27-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/27-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '「キャリア教育」が初めて登場した答申は何年?',
        choices: ['1990年', '2006年', '1999年', '2011年'],
        correctIndex: 2,
        explanation: '1999年(平成11年)の中教審答申。',
        questionAudio: 'audio/explain/27-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/27-07-voice.wav',
        answerDuration: 90,
    },
];
