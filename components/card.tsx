import { ReactNode } from "react";

interface CardProps {
    icon?: ReactNode;
    cardTitle: string;
    // cardContent: string;
    children?: ReactNode;
}

export default function Card({
    icon,
    cardTitle,
    // cardContent,
    children,
}: CardProps) {
    return (
        <div className="border border-(--main-color) w-[418px] rounded-2xl px-10 py-10 
               transition-all duration-300 ease-out 
               hover:scale-105 hover:shadow-lg hover:-translate-y-1">
            {/* Border Icon */}
            <div className="bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] text-white border rounded-xl w-[58px] h-[58px] flex justify-center items-center">
                {icon}
            </div>
            <p className="text-[30px] font-bold pt-3">
                {cardTitle}
            </p>
            <div className="pt-1 text-[15px] text-justify">
                {children}
            </div>
        </div>
    )
}