import { ReactNode } from "react"

interface ContactDetailProps {
    name: string,
    detail: string,
    icon: ReactNode,
}

export default function ContactDetail({
    name,
    detail,
    icon,
}: ContactDetailProps) {
    return (
        <div className="flex items-center space-x-3">
            <div className="bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] text-white border rounded-xl w-[58px] h-[58px] flex justify-center items-center text-[32px]">
                {icon}
            </div>
            <div>
                <p className="font-bold text-[18px]">
                    {name}
                </p>
                <p className="font-semibold text-(--main-color) text-[16px]">
                    {detail}
                </p>
            </div>
        </div>
    )
}