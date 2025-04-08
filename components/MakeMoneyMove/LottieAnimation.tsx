'use client'
// components/LottieAnimation.tsx
import React from 'react';

import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("react-lottie"), { ssr: false });

interface LottieAnimationProps {
    animationData: object;
    loop?: boolean;
    autoplay?: boolean;
    height?: number | string;
    width?: number | string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
    animationData,
    loop = true,
    autoplay = true,
    height = 300,
    width = 300,
}) => {
    const defaultOptions = {
        loop,
        autoplay,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <DynamicLottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;
