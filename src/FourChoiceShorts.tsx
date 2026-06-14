import { AbsoluteFill, Audio, Series, staticFile, useCurrentFrame, interpolate, Sequence } from 'remotion';
import React from 'react';
import { FourChoiceBoard } from './components/rhythm/FourChoiceBoard';
import { SubjectTheme } from './components/rhythm/IchimonIttoBoard';
import { fourChoiceData, FourChoiceScene } from './FourChoiceData';
import { SaveIcon } from './components/SaveIcon';

// Sub-component for Question Phase
const QuestionPhase: React.FC<{
    scene: FourChoiceScene;
    subject: SubjectTheme;
    index: number;
    total: number;
    countdownDuration: number;
    title: string;
    subtitle?: string;
}> = ({ scene, subject, index, total, countdownDuration, title, subtitle }) => {
    const frame = useCurrentFrame();
    const isReading = frame < scene.questionDuration - 8;

    const totalDuration = scene.questionDuration + countdownDuration;

    const timerProgress = interpolate(
        frame,
        [0, totalDuration],
        [1, 0],
        { extrapolateRight: 'clamp' }
    );

    return (
        <AbsoluteFill>
            <Audio src={staticFile(scene.questionAudio)} volume={1.0} />
            <FourChoiceBoard
                phase="question"
                question={scene.question}
                japanese={scene.japanese}
                choices={scene.choices}
                correctIndex={scene.correctIndex}
                explanation={scene.explanation}
                subject={subject}
                currentQuestionIndex={index + 1}
                totalQuestions={total}
                isTalking={isReading}
                timerProgress={timerProgress}
                title={title}
                subtitle={subtitle}
            />
        </AbsoluteFill>
    );
};

// Sub-component for Answer Phase with End Card Overlay
const AnswerPhase: React.FC<{
    scene: FourChoiceScene;
    subject: SubjectTheme;
    index: number;
    total: number;
    isLast: boolean;
    title: string;
    subtitle?: string;
}> = ({ scene, subject, index, total, isLast, title, subtitle }) => {
    const frame = useCurrentFrame();
    const answerDurationWithBuffer = scene.answerDuration + 45;

    const isReading = frame < scene.answerDuration - 8;

    return (
        <AbsoluteFill>
            <Audio src={staticFile(scene.answerAudio)} volume={1.0} />

            <FourChoiceBoard
                phase="answer"
                question={scene.question}
                japanese={scene.japanese}
                choices={scene.choices}
                correctIndex={scene.correctIndex}
                explanation={scene.explanation}
                subject={subject}
                currentQuestionIndex={index + 1}
                totalQuestions={total}
                isTalking={isReading}
                timerProgress={0}
                title={title}
                subtitle={subtitle}
            />

            {/* End Card Overlay */}
            {isLast && (
                <Sequence from={answerDurationWithBuffer}>
                    <Audio
                        src={staticFile('audio/explain/finish.wav')}
                        volume={1.0}
                    />
                    <AbsoluteFill
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: '"Mochiy Pop One", sans-serif',
                            zIndex: 10,
                            opacity: 0,
                            animation: 'fadeIn 0.5s forwards',
                        }}
                    >
                        <style>
                            {`
                                @keyframes fadeIn {
                                    from { opacity: 0; }
                                    to { opacity: 1; }
                                }
                            `}
                        </style>
                        <div style={{ width: '20%', marginBottom: 30 }}>
                            <SaveIcon color="#333" />
                        </div>
                        <div
                            style={{
                                fontSize: 56,
                                fontWeight: 'bold',
                                color: '#333',
                                textAlign: 'center',
                                lineHeight: 1.4,
                            }}
                        >
                            保存して<br />
                            テスト前に見返そう！
                        </div>
                    </AbsoluteFill>
                </Sequence>
            )}
        </AbsoluteFill>
    );
};

export const FourChoiceShortsVideo: React.FC<{
    scenes?: FourChoiceScene[];
    subject?: SubjectTheme;
    title?: string;
    subtitle?: string;
}> = ({
    scenes = fourChoiceData,
    subject = 'english',
    title = '中2　英語',
    subtitle,
}) => {
        const COUNTDOWN_DURATION = 90; // 3秒 - 4択を読む時間
        const ANSWER_BUFFER = 45;

        return (
            <AbsoluteFill style={{ backgroundColor: 'white' }}>
                <Audio src={staticFile('audio/bgm.mp3')} volume={0.05} loop />

                <Series>
                    {scenes.map((scene, index) => {
                        const isLast = index === scenes.length - 1;
                        const answerPhaseDuration = scene.answerDuration + (isLast ? 0 : ANSWER_BUFFER);

                        return (
                            <React.Fragment key={scene.id}>
                                <Series.Sequence durationInFrames={scene.questionDuration + COUNTDOWN_DURATION}>
                                    <QuestionPhase
                                        scene={scene}
                                        subject={subject}
                                        index={index}
                                        total={scenes.length}
                                        countdownDuration={COUNTDOWN_DURATION}
                                        title={title}
                                        subtitle={subtitle}
                                    />
                                </Series.Sequence>

                                <Series.Sequence durationInFrames={answerPhaseDuration}>
                                    <AnswerPhase
                                        scene={scene}
                                        subject={subject}
                                        index={index}
                                        total={scenes.length}
                                        isLast={false}
                                        title={title}
                                        subtitle={subtitle}
                                    />
                                </Series.Sequence>
                            </React.Fragment>
                        );
                    })}
                </Series>
            </AbsoluteFill>
        );
    };
