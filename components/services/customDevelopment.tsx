import { pillBadgesData } from "@/constants";

import PillBadges from "@/components/pillBadges";
import Button from "@/components/button";

import { PiStarFourBold } from "react-icons/pi";

export default function CustomDevelopment() {
    return (
        <>
            {/* Custom Deplyoment */}
            <div className="pt-30">
                {/* Typography */}
                <div className="text-center">
                    <p className="capitalize font-bold md:text-[64px] text-[35px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        bigger ideas ?, no problem !
                    </p>
                    <p className="md:text-[24px] text-lg font-bold">
                        We&apos;re ready to kickstart it with you !
                    </p>
                </div>
                {/* Typography End */}
                {/* Marquee */}
                <div className="space-x-3 space-y-3 text-center pt-10">
                    {pillBadgesData.map((data) => (
                        <PillBadges key={data.id} label={data.label} icon={data.icon} hexColor={data.hexColor} />
                    ))}
                </div>
                <div className="pt-5 flex justify-center">
                    <Button variant="primary" label="Kickstart It Now !" icon={<PiStarFourBold />} />
                </div>
                {/* Marquee End */}
            </div>
            {/* Custom Deplyoment End */}
        </>
    )
}