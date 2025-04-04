// components/LottieView.tsx
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieViewProps {
    animationData: object;
    className?: string;
}

const LottieView = ({ animationData, className }: LottieViewProps) => {
    return (
        <Player
            autoplay
            loop
            src={animationData}
            className={className}
        />
    );
};

export default LottieView;
