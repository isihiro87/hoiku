// 保存用ファイル - 23 特別な配慮を要する子どもの食と栄養③
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
        question: '呼吸困難・血圧低下・意識障害などが同時多発的に現れ、死に至ることもある重いアレルギー反応を何という?',
        choices: ['じんましん', 'アナフィラキシーショック', '脱水症', 'ペラグラ'],
        correctIndex: 1,
        explanation: 'アナフィラキシーショック。',
        questionAudio: 'audio/explain/23-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '嚥下が困難な子どもの食事で、飲み込みやすくするために用いる食品は?',
        choices: ['炭酸飲料', 'かたくり粉・コーンスターチ・ゼラチン', 'お茶', '酸味の強い食品'],
        correctIndex: 1,
        explanation: 'かたくり粉・コーンスターチ・ゼラチンなどでとろみをつける。酸味の強い食品はむせやすい。',
        questionAudio: 'audio/explain/23-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '視覚障害のある子どもの食事介助について、誤っているものは?',
        choices: ['料理が見えないため食欲が低下する原因になることがある', '言葉がけをして食品の理解や興味を深める', '熱いものの位置を決めておくとよい', '嗅覚や聴覚を使わせないようにする'],
        correctIndex: 3,
        explanation: '嗅覚や聴覚が優れている場合が多く、それらを活用するとよい。',
        questionAudio: 'audio/explain/23-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-05-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q4',
        question: '障害のある子どもの食事介助の基本姿勢として正しいものは?',
        choices: ['介助者は子どもより高い位置から介助する', '介助者は子どもと同じ目の高さで介助する', '子どもの頭を後方に反らせる', '立ったまま素早く介助する'],
        correctIndex: 1,
        explanation: '子どもと同じ目の高さで介助する。頭が反ると喉の通りが悪くなる。',
        questionAudio: 'audio/explain/23-06-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/23-07-voice.wav',
        answerDuration: 90,
    },
];
