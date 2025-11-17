import Image from "next/image";
import Button from "@/components/button";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";

interface CardPortfolioProps {
    portfolioTitle: string;
    portfolioImage? : string;
    portfolioDescription: string;
    portfolioLiveDemoLink?: string;
    portfolioGithubLink?: string;
}

export default function CardPortfolio({
    portfolioTitle,
    portfolioImage = "/images/bg-main-color.png",
    portfolioDescription,
    portfolioLiveDemoLink = "",
    portfolioGithubLink = "",
}: CardPortfolioProps) {
    const hasLiveDemo = portfolioLiveDemoLink && portfolioLiveDemoLink.trim() !== "";
    const hasGithub = portfolioGithubLink && portfolioGithubLink.trim() !== "";

     return (
        <div className="group w-full max-w-md rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#FF4F04]/20 flex flex-col h-full">
            {/* Image with accent line */}
            <div className="relative overflow-hidden">
                <Image 
                    src={portfolioImage}
                    alt="Projects Photo"
                    width={400}
                    height={200}
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF4F04] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Content - flex-grow */}
            <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 group-hover:text-[#FF4F04] transition-colors duration-300">
                    {portfolioTitle}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                    {portfolioDescription}
                </p>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Buttons - Always at bottom */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    {hasLiveDemo && (
                        <a href={portfolioLiveDemoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button 
                                label="Live Demo" 
                                labelClassName="text-sm sm:text-base" 
                                icon={<RxOpenInNewWindow />}
                                className="w-full"
                            />
                        </a>
                    )}
                    {hasGithub && (
                        <a href={portfolioGithubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button 
                                label="Github" 
                                variant="secondary" 
                                labelClassName="text-sm sm:text-base" 
                                icon={<FiGithub />}
                                className="w-full"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}