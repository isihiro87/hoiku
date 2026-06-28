// 保存用ファイル - 02 入浴・排泄の介護技術（食事・入浴・排泄の介護）
// フォルダ: datas/kaigo/kaigo_shien/02_shokuji_nyuyoku_haisetsu/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　食事・入浴・排泄の介護';
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
        question: '入浴直前の浴槽の湯の適切な温度は？',
        choices: ['46℃', '40℃', '43℃', '36℃'],
        correctIndex: 1,
        explanation: '入浴直前の浴槽の湯は40℃で保温する。空腹時の入浴は貧血を起こすおそれがあるため控える。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '心臓に負担をかけない入浴方法は？',
        choices: ['高温浴', '全身浴', '長時間浴', '半身浴'],
        correctIndex: 3,
        explanation: '心臓機能障害がある場合、浴槽内の水位は心臓より下になるようにし、半身浴で入浴してもらう。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '右片麻痺の人がポータブルトイレを使うときの設置位置は？',
        choices: ['どこでもよい', '頭側', '健側の足側', '患側の足側'],
        correctIndex: 2,
        explanation: 'ポータブルトイレは利用者が寝ている状態の健側の足側に置く。健側を利用して立ち上がり、安全に移乗できる。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
