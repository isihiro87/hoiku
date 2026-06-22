// 保存用ファイル - 25 復習・横断問題（章をまたいだ確認）②
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
        question: '各指針・法律と策定（制定）年の組み合わせとして、正しいものは?',
        choices: ['食生活指針 ― 2005年', '食事バランスガイド ― 2000年', '食育基本法 ― 2005年', '日本人の食事摂取基準（現行版） ― 2010年'],
        correctIndex: 2,
        explanation: '食育基本法は2005年。食生活指針2000年、食事バランスガイド2005年、現行の食事摂取基準は2020年版。',
        questionAudio: 'audio/explain/25-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: 'たんぱく質について、正しいものは?',
        choices: ['最初の消化は小腸で始まる', '窒素を約50%含む', '胃でペプシンにより消化が始まる', '体内で合成されエネルギー源にはならない'],
        correctIndex: 2,
        explanation: '胃で胃酸とペプシンにより消化が始まる。窒素は15〜16%含む。1gあたり4kcal。',
        questionAudio: 'audio/explain/25-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '子どもの発育の数値について、正しいものは?',
        choices: ['身長は生後3か月で出生時の2倍になる', '4歳で体重は出生時の約5倍になる', '体重は1年で出生時の5倍になる', '身長は1年で出生時の2倍になる'],
        correctIndex: 1,
        explanation: '4歳で身長約100cm、体重約15kg（出生時の約5倍）。身長は1年で約1.5倍の約75cm。',
        questionAudio: 'audio/explain/25-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/25-05-voice.wav',
        answerDuration: 90,
    },
];
