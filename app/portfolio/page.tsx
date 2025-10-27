// Components
import Button from "@/components/button"
import CardPortfolio from "@/components/cardPortfolio";
import PillBadges from "@/components/pillBadges";

// Icons
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Portfolio() {
    return (
        <>
            {/* Container */}
            <div className="px-50">
                {/* Title */}
                <div className="text-center">
                    {/* Title */}
                    <h1 className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        RIEL.studio portfolio
                    </h1>
                    <p className="text-[24px] font-bold">
                        Ideas made real, Journeys empowered. <br /> Explore the works that define RIEL.studio —
                    </p>
                    {/* Title End*/}
                </div>
                {/* Portfolio Done */}
                <div className="pt-15">
                    <CardPortfolio portfolioTitle="Project Title" portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, velit vitae faucibus ornare, eros sapien venenatis magna."  />

                </div>
                {/* Portfolio Done End */}
                {/* CTA */}
                <div className="pt-20">
                    {/* Typography */}
                    <div className="text-center">
                        <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                            kickstart it now !
                        </p>
                        <p className="font-bold text-[24px]">
                            Let RIEL.studio know your idea and start your journey now !
                        </p>
                    </div>
                    {/* Typography End */}
                    {/* Button */}
                    <div className="flex justify-center space-x-5 pt-10">
                        <Button label="Kickstart Now" icon={<IoCall />} variant="primary" />
                        <Button label="See What RIEL.studio Built" icon={<FaArrowRight />} variant="secondary" />
                    </div>
                    {/* Button End */}
                </div>
                {/* CTA End */}
            </div>
            {/* Container End */}
        </>
    )
}