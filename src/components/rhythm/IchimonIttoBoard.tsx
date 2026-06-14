import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Character } from '../../Character';

export type SubjectTheme =
    | 'history'
    | 'science'
    | 'english'
    | 'math'
    // 保育士試験 筆記9科目（分野ごとに色分け）
    | 'hoiku_genri'
    | 'kyoiku_genri'
    | 'shakai_teki_yogo'
    | 'kodomo_katei_fukushi'
    | 'shakai_fukushi'
    | 'hoiku_shinrigaku'
    | 'kodomo_no_hoken'
    | 'kodomo_no_shokuto_eiyo'
    | 'hoiku_jissen';

interface IchimonIttoBoardProps {
    question: string;
    answer: string;
    description?: string; // Supplement
    phase: 'question' | 'answer';
    subject?: SubjectTheme;
    currentQuestionIndex: number;
    totalQuestions: number;
    isTalking: boolean; // Controlled by parent
    timerProgress: number; // 0 to 1, controlled by parent
    title?: string;
    subtitle?: string;
}

// Simple, clean color schemes
export const themeColors: Record<SubjectTheme, { bg: string; accent: string; text: string }> = {
    history: { bg: '#FFF8E1', accent: '#FF9800', text: '#333' }, // 社会: オレンジ系
    science: { bg: '#E8F5E9', accent: '#4CAF50', text: '#333' }, // 理科: 緑系
    english: { bg: '#FCE4EC', accent: '#E91E63', text: '#333' }, // 英語: ピンク系
    math: { bg: '#E3F2FD', accent: '#2196F3', text: '#333' },    // 数学: 青系
    // 保育士試験 筆記9科目
    hoiku_genri: { bg: '#F3E5F5', accent: '#8E24AA', text: '#333' },            // 保育原理: 紫
    kyoiku_genri: { bg: '#E8EAF6', accent: '#3949AB', text: '#333' },           // 教育原理: 藍
    shakai_teki_yogo: { bg: '#E0F2F1', accent: '#00897B', text: '#333' },       // 社会的養護: ティール
    kodomo_katei_fukushi: { bg: '#FFF3E0', accent: '#FB8C00', text: '#333' },   // 子ども家庭福祉: オレンジ
    shakai_fukushi: { bg: '#FFEBEE', accent: '#E53935', text: '#333' },         // 社会福祉: 赤
    hoiku_shinrigaku: { bg: '#FCE4EC', accent: '#D81B60', text: '#333' },       // 保育の心理学: 濃ピンク
    kodomo_no_hoken: { bg: '#E8F5E9', accent: '#43A047', text: '#333' },        // 子どもの保健: 緑
    kodomo_no_shokuto_eiyo: { bg: '#F1F8E9', accent: '#7CB342', text: '#333' }, // 子どもの食と栄養: 黄緑
    hoiku_jissen: { bg: '#E1F5FE', accent: '#039BE5', text: '#333' },           // 保育実習理論: 水色青
};

export const IchimonIttoBoard: React.FC<IchimonIttoBoardProps> = ({
    question,
    answer,
    description,
    phase,
    subject = 'history',
    currentQuestionIndex,
    totalQuestions,
    isTalking,
    timerProgress,
    title,
    subtitle,
}) => {
    const theme = themeColors[subject];

    return (
        <AbsoluteFill style={{
            backgroundColor: theme.bg,
            fontFamily: 'Noto Sans JP, sans-serif',
            overflow: 'hidden',
        }}>
            {/* Main Content Area (Top 75%) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '75%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '40px',
                paddingTop: '60px', // Reduced top padding since timer is gone
                boxSizing: 'border-box',
                gap: '0px', // Gap handled by flex spacing
            }}>
                {/* Header Row: Title */}
                <div style={{
                    width: '100%',
                    padding: '0 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '60px', // Adjusted top margin
                    marginBottom: '40px',
                    flex: '0 0 auto',
                    position: 'relative',
                    height: 'auto',
                }}>
                    <div style={{
                        backgroundColor: theme.accent,
                        borderRadius: '20px',
                        padding: '15px 40px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            fontSize: '90px',
                            fontWeight: 'bold',
                            color: theme.bg,
                            whiteSpace: 'nowrap',
                            textAlign: 'center',
                            lineHeight: '1.2',
                        }}>
                            {title || '中2　歴史'}
                        </div>
                        <div style={{
                            fontSize: '90px',
                            fontWeight: 'bold',
                            color: theme.bg,
                            whiteSpace: 'nowrap',
                            textAlign: 'center',
                            lineHeight: '1.2',
                        }}>
                            {subtitle || '定期テスト対策'}
                        </div>
                    </div>
                    {/* 英語の場合: タイトル下に問題番号表示 */}
                    {subject === 'english' && (
                        <div style={{
                            fontSize: '60px',
                            fontWeight: 'bold',
                            color: theme.accent,
                            marginTop: '20px',
                        }}>
                            {currentQuestionIndex}/{totalQuestions}
                        </div>
                    )}
                </div>

                {/* 1. Question Section */}
                <div style={{
                    width: '100%',
                    flex: '1 1 auto', // Flexible height
                    display: 'flex',
                    alignItems: 'center', // Center vertically
                    justifyContent: 'center',
                    paddingBottom: '20px',
                    position: 'relative',
                }}>
                    <div style={{
                        fontSize: '75px',
                        fontWeight: 'bold',
                        color: theme.text,
                        textAlign: 'center',
                        lineHeight: '1.3',
                        whiteSpace: 'pre-wrap',
                    }}>
                        {subject === 'english' ? question : `Q${currentQuestionIndex}. ${question}`}
                    </div>
                </div>

                {/* Gauge Section (Divider) */}
                <div style={{
                    width: '100%',
                    height: '24px', // Thicker
                    backgroundColor: 'white', // Background track "Initially white"
                    borderRadius: '12px', // Rounded ends
                    marginBottom: '20px',
                    overflow: 'hidden',
                    flex: '0 0 auto',
                    // Optional: Add a subtle border or shadow? Let's keep it simple first.
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: theme.accent,
                        // Logic: 1 - timerProgress (starts at 1->0, so we want 0->1)
                        // In answer phase, timerProgress is 0 from parent, so 1-0=1 (Full).
                        transform: `scaleX(${phase === 'question' ? (1 - timerProgress) : 1})`,
                        transformOrigin: 'left', // Grow from left
                        // transition removed for smooth rendering in Remotion
                    }} />
                </div>

                {/* 2. Answer Section */}
                <div style={{
                    width: '100%',
                    flex: '0 0 auto',
                    height: '200px', // Fixed height for answer area
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: phase === 'answer' ? '#E53935' : '#CCC',
                    transition: 'opacity 0.3s',
                    opacity: phase === 'answer' ? 1 : 0.6,
                }}>
                    <div style={{ fontSize: '40px', marginBottom: '5px', fontWeight: 'bold' }}>答え</div>
                    <div style={{
                        fontSize: answer.includes('\n') ? '68px' : '85px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        lineHeight: '1.2',
                        whiteSpace: 'pre-wrap',
                    }}>
                        {phase === 'answer' ? answer : '？？？'}
                    </div>
                </div>

                {/* 3. Supplement Section */}
                {/* Note: In the original code, this was flex 1 5 0, effectively taking up remaining space.
                    Here we want to ensure it still fits without pushing things off.
                    Let's use flex-grow for it. */}
                <div style={{
                    width: '100%',
                    flex: '1 1 auto',
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '24px 110px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                }}>
                    <div style={{
                        width: '100%',
                        opacity: phase === 'answer' ? 1 : 0,
                        transition: 'opacity 0.3s',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            fontSize: '40px',
                            color: theme.accent,
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            width: '100%',
                            textAlign: 'left'
                        }}>
                            補足
                        </div>
                        <div style={{
                            fontSize: '50px',
                            color: '#333',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            width: '100%',
                            lineHeight: '1.4',
                            whiteSpace: 'pre-wrap',
                        }}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>

            {/* Character in Bottom Right Corner */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '600px',
                height: '600px',
                zIndex: 10,
                transform: 'translate(10%, 10%)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
            }}>
                <Character isTalking={isTalking} />
            </div>
        </AbsoluteFill>
    );
};
