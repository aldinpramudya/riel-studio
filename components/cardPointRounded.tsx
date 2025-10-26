import { ReactNode } from "react";

interface CardPointRoundedProps {
    icon?: ReactNode;
    cardTitle: string;
    cardContent: string;
};

export default function CardPointRounded({
    icon,
    cardTitle,
    cardContent,
}: CardPointRoundedProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] text-black rounded-full w-[83px] h-[83px] flex justify-center items-center">
                {icon}
            </div>
            <div className="text-[35px] font-bold ">
                {cardTitle}
            </div>
            <div className="text-[24px] w-1/2 text-center">
                {cardContent}
            </div>
        </div>
    );
};