import Button from "@/components/button";

import { FaArrowRight } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


export default function Cta() {
    return (
        <>
            {/* CTA */}
            <div className="pt-40">
                {/* Typography */}
                <div className="text-center">
                    <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        ready to kickstart yours ?
                    </p>
                    <p className="font-bold text-[24px]">
                        Now it&apos;s your turn to bring yours to life !
                    </p>
                </div>
                {/* Typography End */}
                {/* Button */}
                <div className="flex justify-center space-x-5 pt-10">
                    <Button label="Kickstart Now" icon={<IoCall />} variant="primary" />
                    <Button label="See RIEL.studio Portfolio" icon={<FaArrowRight />} variant="secondary" />
                </div>
                {/* Button End */}
            </div>
            {/* CTA */}
        </>
    )
}