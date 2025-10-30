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
            <div className="flex items-center justify-between w-full px-10 py-10 text-[#efeff9] rounded-lg bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] shadow-sm">
                <div>
                    <p className="font-bold text-[20px]">
                        Kickstart Your Ideas, Even Before Graduation. with
                    </p>
                    {/* Tagline */}
                    <h1 className="font-bold text-[96px] underline hover:scale-105 hover:-translate-y-1  transition-all duration-300 ease-out">
                        #StudentKickstart
                    </h1>
                    {/* Tagline End */}
                    <p className="text-[20px]">
                        Because every great journey starts with a spark <br />
                        RIEL.studio here to help students and college creators turn their concepts into something real.
                    </p>
                </div>
                <div className="px-40 space-y-5 flex flex-col">
                    <Button label="Kickstart Now" icon={<PiConfettiBold />} variant="white" className="shadow-2xl" />
                    <Button label="Learn More" icon={<FaLongArrowAltDown />} variant="white" className="shadow-2xl" onClick={scrollToSection} />
                </div>
            </div>
            {/* Card Welcome End */}
        </>
    )
}