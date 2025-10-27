import { ReactNode } from "react";

interface CardPointRoundedProps {
    icon?: ReactNode;
    cardTitle: string;
    cardContent: string;
    cardTitleClassName?: string;
    cardContentClassName?: string;
    iconClassName?: string;
};

export default function CardPointRounded({
    icon,
    cardTitle,
    cardContent,
    cardTitleClassName = "",
    cardContentClassName = "",
    iconClassName = "",
}: CardPointRoundedProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] text-black rounded-full w-[83px] h-[83px] flex justify-center items-center">
                <div className={`${iconClassName}`}>
                    {icon}
                </div>
            </div>
            <div className={`font-bold ${cardTitleClassName}`}>
                {cardTitle}
            </div>
            <div className={`w-1/2 text-center ${cardContentClassName}`}>
                {cardContent}
            </div>
        </div>
    );
};