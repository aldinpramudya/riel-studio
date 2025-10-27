import { ReactNode } from "react";

interface PillBadgesProps {
    label: string;
    icon?: ReactNode;
    hexColor : string;
    iconClassName? :string;
    labelClassName? : string;
}

export default function PillBadges({
    label,
    icon,
    hexColor,
    iconClassName = "",
    labelClassName = "",
}: PillBadgesProps) {
    return (
        <div className="rounded-full border px-5 py-2 inline-flex items-center gap-3" style={{ borderColor: hexColor }}>
            <div className={`${iconClassName}`} style={{ color: hexColor }}>
                {icon}
            </div>
            <p className={`font-bold ${labelClassName}`} style={{ color: hexColor }}>
                {label}
            </p>
        </div>
    )
}