// 保存用ファイル - 16 食育の基本と内容②
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
        question: '学校給食法に示される「学校給食の目標」に**含まれない**ものは?',
        choices: ['適切な栄養の摂取による健康の保持増進', '食料の生産・流通・消費について正しい理解に導く', '伝統的な食文化についての理解を深める', '学力テストの成績向上を図る'],
        correctIndex: 3,
        explanation: '学校給食の目標に学力向上は含まれない。',
        questionAudio: 'audio/explain/16-00-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-01-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q2',
        question: '「5つの期待する子ども像」に**含まれない**ものは?',
        choices: ['お腹がすくリズムのもてる子ども', '好き嫌いがない子ども', '一緒に食べたい人がいる子ども', '食べるものを話題にする子ども'],
        correctIndex: 1,
        explanation: '正しくは「食べたいもの、好きなものが増える子ども」。',
        questionAudio: 'audio/explain/16-02-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-03-voice.wav',
        answerDuration: 90,
    },
        {
        id: 'q3',
        question: '第4次食育推進基本計画の重点事項に**含まれない**ものは?',
        choices: ['生涯を通じた心身の健康を支える食育の推進', '持続可能な食を支える食育の推進', '「新たな日常」やデジタル化に対応した食育の推進', '給食費の無償化の推進'],
        correctIndex: 3,
        explanation: '重点事項は1〜3の3つ。',
        questionAudio: 'audio/explain/16-04-voice.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/16-05-voice.wav',
        answerDuration: 90,
    },
];
