import { FeedbackCard } from './FeedbackCard';

const feedbackData = [
    {
        feedback: "Getting paid in stablecoins means I receive money instantly, with lower fees and no bank delays",
        flag: "images/make-money-move/flag-uae.png",
        avatar: "images/make-money-move/avatar-woman-1.png"
    },
    {
        feedback: "Sending money home with stablecoins is cheaper and arrives in minutes, unlike slow and costly bank transfers",
        flag: "images/make-money-move/flag-japan.png",
        avatar: "images/make-money-move/avatar-men-1.png"
    },
    {
        feedback: "I use stablecoins to pay globally without worrying about exchange rates or hidden fees—fast and hassle-free",
        flag: "images/make-money-move/flag-vietnam.png",
        avatar: "images/make-money-move/avatar-woman-2.png"
    }
]
export const MobileFeedback = () => {
    return (
        <div className='flex md:hidden flex-col gap-[16px]'>
            {feedbackData.map((data, index) => (
                <FeedbackCard key={index} data={data} />
            ))}
        </div>
    );
};
