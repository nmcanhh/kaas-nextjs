import Image from 'next/image';

interface Feedback {
    avatar: string
    flag: string
    feedback: string
}
interface IProps {
    data: Feedback
}

export const FeedbackCard: React.FC<IProps> = ({ data }) => {
    return (
        <div className="bg-white rounded-[20px] p-4 shadow-md flex items-center gap-4">
            <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-white shadow-md">
                    <Image
                        src={data?.avatar}
                        alt="Testimonial avatar"
                        width={64}
                        height={64}
                        className="bg-yellow-400 object-cover"
                    />
                </div>
                <div className="absolute bottom-[-12px] right-[6px] w-[24px] overflow-hidden -translate-x-2/4">
                    <Image
                        src={data?.flag}
                        alt="UAE flag"
                        width={24}
                        height={24}
                        className="object-cover"
                    />
                </div>
            </div>
            <p className="text-gray-800 font-medium">
                {data?.feedback}
            </p>
        </div>
    );
};
