import Button from "@/components/button";

// Icons
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Cta() {
    return (
        <>
            {/* CTA */}
            <div className="pt-20">
                {/* Typography */}
                <div className="text-center">
                    <p className="capitalize font-bold md:text-[64px] text-[35px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        kickstart it now !
                    </p>
                    <p className="font-bold md:text-[24px] text-lg">
                        Let RIEL.studio know your idea and start your journey now !
                    </p>
                </div>
                {/* Typography End */}
                {/* Button */}
                <div className="flex flex-col md:flex-row justify-center md:space-x-5 space-y-5 md:space-y-0 pt-10">
                    <Button label="Kickstart Now" icon={<IoCall />} variant="primary" />
                    <Button label="See What RIEL.studio Built" icon={<FaArrowRight />} variant="secondary" />
                </div>
                {/* Button End */}
            </div>
            {/* CTA End */}
        </>
    )
}