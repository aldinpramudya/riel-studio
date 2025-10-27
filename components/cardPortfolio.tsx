import Image from "next/image";
import { ReactNode } from "react";
import Button from "@/components/button";

interface CardPortfolioProps {
    portfolioTitle: string;
    portfolioDescription: string;
    portfolioTech?: ReactNode;
    portfolioLiveDemoLink?: string;
    portfolioGithubLink?: string;
}

export default function CardPortfolio({
    portfolioTitle,
    portfolioDescription,
    portfolioTech = "",
    portfolioLiveDemoLink = "",
    portfolioGithubLink="",
}: CardPortfolioProps) {
    return (
        <div className="border border-(--main-color) rounded-lg w-[400px]">
            <div>

            </div>
            <div className="px-10 py-10">
                <p className="text-[24px] font-bold">
                    {portfolioTitle}
                </p>
                <p>
                    {portfolioDescription}
                </p>
                <p className="pt-3">
                    {portfolioTech}
                </p>
            </div>
            {portfolioLiveDemoLink},
            {portfolioGithubLink},
        </div>
    )
}