"use client"

import Button from "@/components/button";

import { PiConfettiBold } from "react-icons/pi";
import { FaLongArrowAltDown } from "react-icons/fa";


export default function CardHero() {
    const scrollToSection = () => {
        const section = document.getElementById("studentKickstart");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
            {/* Card Welcome Student Kickstart */}
            <div className="flex flex-col md:flex-row md:items-center justify-between md:px-10 px-6 md:py-10 py-8 text-[#efeff9] rounded-2xl bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] shadow-md gap-6 md:gap-0">
                {/* Left Section */}
                <div className="space-y-3 md:space-y-4 md:w-3/5">
                    <p className="font-semibold md:text-[20px] text-[14px] leading-snug">
                        Kickstart Your Ideas, Even Before Graduation. with
                    </p>

                    {/* Tagline */}
                    <h1 className="font-extrabold md:text-[96px] text-[30px] underline hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out text-center md:text-left leading-tight">
                        #StudentKickstart
                    </h1>
                    {/* Tagline End */}

                    <p className="md:text-[18px] text-[14px] leading-relaxed">
                        Because every great journey starts with a spark <br className="hidden md:block" />
                        <span className="md:block">RIEL.studio here to help students and college creators turn their concepts into something real.</span>
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:w-2/5 justify-center items-center md:items-end space-y-3">
                    <Button
                        label="Kickstart Now"
                        icon={<PiConfettiBold />}
                        variant="white"
                        className="shadow-lg w-full md:w-auto"
                    />
                    <Button
                        label="Learn More"
                        icon={<FaLongArrowAltDown />}
                        variant="white"
                        className="shadow-lg w-full md:w-auto"
                        onClick={scrollToSection}
                    />
                </div>
            </div>
            {/* Card Welcome End */}

        </>
    )
}