import { AbsoluteFill, Img, staticFile, useCurrentFrame, interpolate } from 'remotion';
import React from 'react';

export const LINE_CTA_DURATION = 90; // 3秒 @ 30fps

// 各パートの登場開始フレーム
const PART1_START = 0;
const PART2_START = 15;
const PART3_START = 30;
const FADE_FRAMES = 8; // フェードイン時間
const SLIDE_OFFSET = 40; // 下から上にスライドする距離(px)

const useEntrance = (start: number) => {
    const frame = useCurrentFrame();
    const local = frame - start;
    const opacity = interpolate(local, [0, FADE_FRAMES], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });
    const translateY = interpolate(local, [0, FADE_FRAMES], [SLIDE_OFFSET, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });
    return { opacity, translateY };
};

const Part: React.FC<{ src: string; start: number }> = ({ src, start }) => {
    const { opacity, translateY } = useEntrance(start);
    return (
        <Img
            src={staticFile(src)}
            style={{
                width: '100%',
                display: 'block',
                opacity,
                transform: `translateY(${translateY}px)`,
            }}
        />
    );
};

export const LineCtaShortsVideo: React.FC = () => {
    return (
        <AbsoluteFill
            style={{
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Part src="images/line_cta/part1.png" start={PART1_START} />
            <Part src="images/line_cta/part2.png" start={PART2_START} />
            <Part src="images/line_cta/part3.png" start={PART3_START} />
        </AbsoluteFill>
    );
};
