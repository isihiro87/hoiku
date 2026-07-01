// 保存用ファイル - 02 言語障害者・肢体不自由者の生活（L17・L18）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/04_kakushogai_no_seikatsu/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　障害者の生活';
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
        question: 'もどかしそうに言葉を探す失語症の人への対応として適切なのは？',
        choices: ['代わりに話す', '話を打ち切る', '発言を受け止める', '早口で促す'],
        correctIndex: 2,
        explanation: '言語障害のある人には、発した言葉を受け止め、キーワードから意向をくみ取って安心感を与える対応が適切である。',
        questionAudio: 'audio/explain/02_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '他人の言語を理解することが困難になる失語症は？',
        choices: ['全失語', 'ブローカ失語', '健忘失語', 'ウェルニッケ失語'],
        correctIndex: 3,
        explanation: 'ウェルニッケ失語（感覚性失語）は他人の言語の理解が困難になる。流暢に話すが意味のまとまりを欠くのが特徴。',
        questionAudio: 'audio/explain/02_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '上田敏による障害受容のステージ理論で、最初の段階は？',
        choices: ['ショック期', '混乱期', '受容期', '否定期'],
        correctIndex: 0,
        explanation: '上田敏の障害受容は、ショック期→否定期→混乱期→解決への努力期→受容期の順にたどる。最初はショック期。',
        questionAudio: 'audio/explain/02_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/02_06-voice.wav',
        answerDuration: 60,
    },
];
