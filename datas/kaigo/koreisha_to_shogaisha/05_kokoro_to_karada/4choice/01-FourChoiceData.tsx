// 保存用ファイル - 01 こころの仕組み・脳神経の仕組み（L23・L24）
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
        question: '脳の中で記憶をつかさどる部位は？',
        choices: ['視床', '小脳', '延髄', '海馬'],
        correctIndex: 3,
        explanation: '記憶をつかさどるのは大脳辺縁系にある海馬である。海馬は側頭葉の内側面にあり、記憶や学習に関連する。',
        questionAudio: 'audio/explain/01_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '他者に受け入れられ集団や社会に帰属したいという、マズローの欲求は？',
        choices: ['所属・愛情の欲求', '自己実現の欲求', '自尊の欲求', '生理的欲求'],
        correctIndex: 0,
        explanation: 'マズローの欲求階層説で、他者に受け入れられ家族や地域・社会に帰属することを求めるのが所属・愛情の欲求である。',
        questionAudio: 'audio/explain/01_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '一時的で激しく、生理的な変化を伴う感情を何という？',
        choices: ['気分', '情動', '認知', '知覚'],
        correctIndex: 1,
        explanation: '一時的で激しく生理的変化を伴う感情を情動（情緒）といい、長時間持続する比較的弱い感情を気分という。',
        questionAudio: 'audio/explain/01_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/01_06-voice.wav',
        answerDuration: 60,
    },
];
