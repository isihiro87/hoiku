// 保存用ファイル - 26 生涯学習と現代の理念
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
        question: '中教審答申で初めて「生涯学習」という言葉が使われたのは何年?',
        choices: ['1965年', '1981年', '1973年', '1990年'],
        correctIndex: 1,
        explanation: '1981年(昭和56年)。',
        questionAudio: 'audio/explain/26-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/26-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'SDGsが掲げられた国連サミットは何年?',
        choices: ['2006年', '2015年', '2013年', '2021年'],
        correctIndex: 1,
        explanation: '2015年に採択。',
        questionAudio: 'audio/explain/26-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/26-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: 'SDGsのゴールとターゲットの数は?',
        choices: ['12ゴール・100ターゲット', '17ゴール・100ターゲット', '30ゴール・169ターゲット', '17ゴール・169ターゲット'],
        correctIndex: 3,
        explanation: '17ゴール・169ターゲット。',
        questionAudio: 'audio/explain/26-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/26-05-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q4',
        question: '「生きる力」を構成する3つに含まれないのは?',
        choices: ['確かな学力', '豊かな人間性', '国際的な視野', '健康・体力'],
        correctIndex: 2,
        explanation: '確かな学力・豊かな人間性・健康体力の3つ。',
        questionAudio: 'audio/explain/26-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/26-07-voice.wav',
        answerDuration: 90,
    },
];
