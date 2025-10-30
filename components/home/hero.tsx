import Button from "@/components/button";

import { FaArrowRight } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";

export default function Hero() {
    return (
        <>
            {/* Hero Centered Content Container */}
            <div id="hero">
                {/* Tagline */}
                <h1 className="text-center capitalize font-bold md:text-[96px] text-[35px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                    kickstart your ideas <br /> empower your journey
                </h1>
                {/* Tagline End */}
                {/* Description */}
                <div className="md:text-[30px] text-lg">
                    <p className="font-semibold text-center">
                        Every great idea needs a first step.
                    </p>
                    <p className="tracking-tight md:text-2xl text-[12px] pt-2 text-center">
                        <span className="font-semibold">RIEL.studio</span> here to help you build a website that&apos;s not only visually stunning, <br /> but also functional, fast, and ready to elevate your brand or business to the next level.
                    </p>
                </div>
                {/* Description End*/}
                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-center md:space-x-5 space-y-5 md:space-y-0 pt-10">
                    <Button label="Start Now" icon={<LuSparkles />} variant="primary" labelClassName="text-[15px] md:text-[20px]" />
                    <Button label="See What Riel. Built" icon={<FaArrowRight />} variant="secondary" labelClassName="text-[15px] md:text-[20px]" />
                </div>
                {/* Buttons End */}
            </div>
            {/* Hero Centered Content Container */}
        </>
    )
}