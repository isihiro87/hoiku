import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Character, genderForTitle } from '../../Character';
import { themeColors, SubjectTheme } from './IchimonIttoBoard';

interface FourChoiceBoardProps {
    question: string;
    japanese?: string;
    choices: [string, string, string, string];
    correctIndex: number;
    explanation: string;
    phase: 'question' | 'answer';
    subject?: SubjectTheme;
    currentQuestionIndex: number;
    totalQuestions: number;
    isTalking: boolean;
    timerProgress: number;
    title?: string;
    subtitle?: string;
}

const CHOICE_LABELS = ['A', 'B', 'C', 'D'] as const;

export const FourChoiceBoard: React.FC<FourChoiceBoardProps> = ({
    question,
    japanese,
    choices,
    correctIndex,
    explanation,
    phase,
    subject = 'english',
    currentQuestionIndex,
    totalQuestions,
    isTalking,
    timerProgress,
    title,
    subtitle,
}) => {
    const theme = themeColors[subject];
    const isAnswer = phase === 'answer';

    return (
        <AbsoluteFill style={{
            backgroundColor: theme.bg,
            fontFamily: 'Noto Sans JP, sans-serif',
            overflow: 'hidden',
        }}>
            {/* Main Content Area */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '78%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '0 40px',
                paddingTop: '60px',
                boxSizing: 'border-box',
            }}>
                {/* Header: Title Badge */}
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '40px',
                    marginBottom: '24px',
                    flex: '0 0 auto',
                }}>
                    <div style={{
                        backgroundColor: theme.accent,
                        borderRadius: '20px',
                        padding: '12px 40px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            fontSize: '70px',
                            fontWeight: 'bold',
                            color: theme.bg,
                            whiteSpace: 'nowrap',
                            textAlign: 'center',
                            lineHeight: '1.2',
                        }}>
                            {title || '中2　英語'}
                        </div>
                        {subtitle && (
                            <div style={{
                                fontSize: '70px',
                                fontWeight: 'bold',
                                color: theme.bg,
                                whiteSpace: 'nowrap',
                                textAlign: 'center',
                                lineHeight: '1.2',
                            }}>
                                {subtitle}
                            </div>
                        )}
                    </div>
                    <div style={{
                        fontSize: '50px',
                        fontWeight: 'bold',
                        color: theme.accent,
                        marginTop: '16px',
                    }}>
                        {currentQuestionIndex}/{totalQuestions}
                    </div>
                </div>

                {/* Question Card */}
                <div style={{
                    width: '100%',
                    flex: '0 0 auto',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '24px 36px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    gap: '8px',
                }}>
                    {japanese && (
                        <div style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                            color: '#888',
                            textAlign: 'center',
                            lineHeight: '1.3',
                        }}>
                            {japanese}
                        </div>
                    )}
                    <div style={{
                        fontSize: '52px',
                        fontWeight: 'bold',
                        color: theme.text,
                        textAlign: 'center',
                        lineHeight: '1.35',
                        whiteSpace: 'pre-wrap',
                    }}>
                        {question}
                    </div>
                </div>

                {/* 4 Choice Boxes */}
                <div style={{
                    width: '100%',
                    flex: '0 0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '20px',
                }}>
                    {choices.map((choice, i) => {
                        const isCorrect = i === correctIndex;
                        const choiceStyle: React.CSSProperties = isAnswer
                            ? isCorrect
                                ? {
                                    backgroundColor: '#E8F5E9',
                                    border: '4px solid #4CAF50',
                                    opacity: 1,
                                }
                                : {
                                    backgroundColor: 'white',
                                    border: '3px solid #E0E0E0',
                                    opacity: 0.35,
                                }
                            : {
                                backgroundColor: 'white',
                                border: '3px solid #E0E0E0',
                                opacity: 1,
                            };

                        const labelStyle: React.CSSProperties = isAnswer && isCorrect
                            ? { backgroundColor: '#4CAF50', color: 'white' }
                            : { backgroundColor: theme.accent, color: theme.bg };

                        const textColor = isAnswer && isCorrect ? '#2E7D32' : '#333';

                        return (
                            <div
                                key={i}
                                style={{
                                    width: '100%',
                                    height: '105px',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 28px',
                                    gap: '20px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    boxSizing: 'border-box',
                                    ...choiceStyle,
                                }}
                            >
                                {/* Label Circle */}
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '30px',
                                    fontSize: '36px',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    ...labelStyle,
                                }}>
                                    {CHOICE_LABELS[i]}
                                </div>
                                {/* Choice Text */}
                                <div style={{
                                    fontSize: '44px',
                                    fontWeight: 'bold',
                                    color: textColor,
                                    lineHeight: '1.2',
                                }}>
                                    {choice}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Timer Gauge */}
                <div style={{
                    width: '100%',
                    height: '24px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    marginBottom: '16px',
                    overflow: 'hidden',
                    flex: '0 0 auto',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: theme.accent,
                        transform: `scaleX(${phase === 'question' ? (1 - timerProgress) : 1})`,
                        transformOrigin: 'left',
                    }} />
                </div>

                {/* Explanation Section */}
                <div style={{
                    width: '100%',
                    flex: '1 1 auto',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '20px 32px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    opacity: isAnswer ? 1 : 0,
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '12px',
                    }}>
                        <div style={{
                            fontSize: '38px',
                            fontWeight: 'bold',
                            color: '#4CAF50',
                        }}>
                            正解
                        </div>
                        <div style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '26px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {CHOICE_LABELS[correctIndex]}
                        </div>
                    </div>
                    <div style={{
                        fontSize: '42px',
                        color: '#333',
                        fontWeight: 'bold',
                        lineHeight: '1.4',
                        whiteSpace: 'pre-wrap',
                    }}>
                        {explanation}
                    </div>
                </div>
            </div>

            {/* Character */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '500px',
                height: '500px',
                zIndex: 10,
                transform: 'translate(10%, 10%)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
            }}>
                <Character isTalking={isTalking} gender={genderForTitle(title)} />
            </div>
        </AbsoluteFill>
    );
};
