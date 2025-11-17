import Button from "@/components/button";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

interface CtaProps {
    title: string;
    subTitle: string;
}

export default function Cta(
    {
        title,
        subTitle
    }: CtaProps
) {
    return (
        <>
            {/* CTA lAST */}
            <div id="cta" className="md:pt-20 pt-30 mb-15">
                {/* Typography */}
                <div className="text-center">
                    <p className="capitalize font-bold md:text-[64px] text-[35px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        {title}
                    </p>
                    <p className="font-bold md:text-[24px] text-lg">
                        {subTitle}
                    </p>
                </div>
                {/* Typography End */}
                {/* Button */}
                <div className="flex flex-wrap md:flex-row justify-center md:space-x-5 space-y-5 md:space-y-0 pt-10">
                    <Link href="/contact">
                        <Button label="Kickstart Now" icon={<IoCall />} variant="primary" />
                    </Link>
                    <Link href="/portfolio">
                        <Button label="See RIEL.studio Portfolio" icon={<FaArrowRight />} variant="secondary" />
                    </Link>
                </div>
                {/* Button End */}
            </div>
            {/* CTA Last End */}

        </>
    )
}