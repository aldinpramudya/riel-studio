import { ReactNode } from "react";

interface PillBadgesProps {
    label: string;
    icon?: ReactNode;
    hexColor : string;
}

export default function PillBadges({
    label,
    icon,
    hexColor,
}: PillBadgesProps) {
    return (
        <div className="rounded-full border px-5 py-2 inline-flex items-center gap-3" style={{ borderColor: hexColor }}>
            <div style={{ color: hexColor }}>
                {icon}
            </div>
            <p className="font-bold text-[18px]" style={{ color: hexColor }}>
                {label}
            </p>
        </div>
    )
}