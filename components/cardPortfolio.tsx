import Image from "next/image";
import { ReactNode } from "react";
import Button from "@/components/button";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";

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
    portfolioGithubLink = "",
}: CardPortfolioProps) {
    return (
        <div className="border border-(--main-color) rounded-lg w-[400px]">
            <div>
                <Image 
                    src="/images/bg-main-color.png"
                    alt="Projects Photo"
                    width={400}
                    height={200}
                    className="rounded-lg border border-b-(--main-color)"
                />
            </div>
            {/* Typography */}
            <div className="px-10 py-10">
                <p className="text-[24px] font-bold">
                    {portfolioTitle}
                </p>
                <p className="text-justify">
                    {portfolioDescription}
                </p>
                <p className="pt-3">
                    {portfolioTech}
                </p>
            </div>
            {/* Typography End */}
            {/* Buttons*/}
            <div className="flex md:flex-row flex-col px-10 pb-10 space-x-3 space-y-2">
                <a href={portfolioLiveDemoLink} target="_blank">
                    <Button label="Live Demo" labelClassName="text-[14px]" icon={<RxOpenInNewWindow />} />
                </a>
                <a href={portfolioGithubLink} target="_blank">
                    <Button label="Github" variant="secondary" labelClassName="text-[14px]" icon={<FiGithub />} />
                </a>
            </div>
            {/* Buttons End */}
        </div>
    )
}