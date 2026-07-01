// 保存用ファイル - 03 認知症の理解（L8認知症の中核症状・L9認知症の行動・心理症状）
// フォルダ: datas/kaigo/koreisha_to_shogaisha/02_ninchisho_no_rikai/4choice
// 生成日: 2026-06-28
// duration はプレースホルダ。音声配置後 update_duration.py で更新すること。

export const titleData = '介護福祉士　認知症の理解';
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
        question: '歯ブラシに歯磨き粉をつけて磨くなど、一連の動作がうまく行えなくなる失行は？',
        choices: ['失認', '着衣失行', '観念失行', '構成失行'],
        correctIndex: 2,
        explanation: '道具を使った一連の動作ができなくなるのが観念失行。服を着られない着衣失行、図形を描けない構成失行などがある。',
        questionAudio: 'audio/explain/03_01-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_02-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q2',
        question: '物事を計画し、筋道を立てて遂行することが困難になる中核症状は？',
        choices: ['遂行機能障害', '自発性の低下', '不安・焦燥', '嫉妬妄想'],
        correctIndex: 0,
        explanation: '物事を総合的に考え計画し遂行することが困難になるのは、中核症状の遂行機能障害。不安・焦燥や嫉妬妄想はBPSDで現れる。',
        questionAudio: 'audio/explain/03_03-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_04-voice.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: '周囲のかかわりや介護環境に強く影響を受けて出現する症状群は？',
        choices: ['行動・心理症状（BPSD）', '見当識障害', '認知機能障害', '中核症状'],
        correctIndex: 0,
        explanation: '認知症の行動・心理症状（BPSD）は、周囲のかかわりや介護環境などに強く影響を受けて出現する。',
        questionAudio: 'audio/explain/03_05-voice.wav',
        questionDuration: 60,
        answerAudio: 'audio/explain/03_06-voice.wav',
        answerDuration: 60,
    },
];
