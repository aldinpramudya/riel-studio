import { ReactNode } from "react";

interface ButtonInterface {
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
}

export default function Button({
    label,
    icon,
    onClick,
    type = "button",
    variant = "primary",
}: ButtonInterface) {
    const baseStyle = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl py-3 px-6";

    const variantStyles = {
        primary: "bg-(--main-color) text-white hover:bg-(--main-color-hover) transition-all duration-500",
        secondary: "text-(--main-color) border border-(--main-color) hover:bg-(--main-color) hover:text-white transition-all duration-500",
    }

    const colorIcon = {
        primary: "text-white",
        secondary : "text-(--main-color)"
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variantStyles[variant]}`}
        >
            <span>{label}</span>
            {icon && <span className={`${colorIcon}`}>{icon}</span>}
        </button>
    );
};