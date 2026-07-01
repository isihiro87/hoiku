// 保存用ファイル - 06 泌尿器・内分泌器の仕組み（L30・L31）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/05_kokoro_to_karada/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　こころとからだの仕組み';
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
        question: '血糖値を上昇させるホルモンは？',
        choices: ['バソプレシン', 'インスリン', 'グルカゴン', 'メラトニン'],
        correctIndex: 2,
        explanation: 'グルカゴンは膵臓のランゲルハンス島α細胞から分泌され、血糖値を上昇させる。インスリンは血糖値を降下させる。',
        questionAudio: 'audio/explain/06_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/06_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '前立腺肥大症などで尿が少しずつ漏れる尿失禁は？',
        choices: ['溢流性尿失禁', '腹圧性尿失禁', '切迫性尿失禁', '機能性尿失禁'],
        correctIndex: 0,
        explanation: '溢流性尿失禁は、前立腺肥大症や尿道狭窄などによる尿道の通過障害で、尿が少しずつ漏れるものをいう。',
        questionAudio: 'audio/explain/06_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/06_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '肝臓がブドウ糖を蓄えるときの貯蔵形態は？',
        choices: ['ケトン体', 'グリコーゲン', 'アミノ酸', 'インスリン'],
        correctIndex: 1,
        explanation: '肝臓は、すぐに使われないブドウ糖をグリコーゲンとして蓄え、必要に応じて再びブドウ糖にして利用する。',
        questionAudio: 'audio/explain/06_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/06_06-voice.wav',
        answerDuration: 60,
    },
];
