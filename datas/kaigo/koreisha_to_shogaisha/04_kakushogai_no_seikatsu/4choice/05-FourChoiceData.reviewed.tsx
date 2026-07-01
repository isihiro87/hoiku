// 保存用ファイル - 05 高次脳機能障害者・発達障害者・知的障害者の生活（L21・L22）
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
        question: '読む・書く・計算などの習得に困難がある発達障害は？',
        choices: ['注意欠陥多動性障害', '自閉症', '学習障害', '知的障害'],
        correctIndex: 2,
        explanation: '学習障害（LD）は発達障害のひとつで、知的発達の遅れはないが、読む・書く・計算などの習得に著しい困難を示す。',
        questionAudio: 'audio/explain/05_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/05_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '高次脳機能障害と診断された場合に申請できるものは？',
        choices: ['身体障害者手帳', '精神障害者保健福祉手帳', '介護保険被保険者証', '療育手帳'],
        correctIndex: 1,
        explanation: '高次脳機能障害は事故や脳血管障害など後天的要因で生じ、精神障害者保健福祉手帳などを申請できる。',
        questionAudio: 'audio/explain/05_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/05_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '障害者の定義に難病等を加え、福祉サービスの対象とした法律は？',
        choices: ['難病法', '身体障害者福祉法', '介護保険法', '障害者総合支援法'],
        correctIndex: 3,
        explanation: '2013（平成25）年、障害者総合支援法において障害者の定義に難病等が加わり、障害福祉サービス等を受けられるようになった。',
        questionAudio: 'audio/explain/05_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/05_06-voice.wav',
        answerDuration: 60,
    },
];
