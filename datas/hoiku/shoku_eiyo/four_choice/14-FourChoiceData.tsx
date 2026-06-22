// 保存用ファイル - 14 子どもの発育・発達と食生活⑤
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
        question: '家族がそろっていても、それぞれが別々のものを食べることを何という?',
        choices: ['孤食', '個食', '欠食', '中食'],
        correctIndex: 1,
        explanation: '個食。一人で食べるのは孤食。',
        questionAudio: 'audio/explain/14-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-01-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q2',
        question: '学童期について、誤っているものは?',
        choices: ['乳歯から永久歯に生え変わる時期である', '第二発育急進期は平均的に女子の方が早い', '9〜11歳では男子の身長が女子を上回る', '乳児期に次いで成長が著しい'],
        correctIndex: 2,
        explanation: '身長は9〜11歳では女子の方が男子より上回る。',
        questionAudio: 'audio/explain/14-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-03-voice.wav',
        answerDuration: 90,
    },
    {
        id: 'q3',
        question: '思春期の年齢のおおよその範囲として正しい組み合わせは?',
        choices: ['女子8〜14歳・男子10〜16歳', '女子10〜16歳・男子12〜18歳', '女子12〜18歳・男子14〜20歳', '女子・男子とも10〜18歳'],
        correctIndex: 1,
        explanation: '思春期は女子10〜16歳、男子12〜18歳頃。',
        questionAudio: 'audio/explain/14-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/14-05-voice.wav',
        answerDuration: 90,
    },
];
