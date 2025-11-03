import Button from "@/components/button";

import { ImQuotesRight } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import CardTestimonies from "@/components/cardTestimonies";

import Link from "next/link";

export default function Testimonies() {
    return (
        <>
            {/* Testimonies */}
            <div id="testimonies" className="pt-30 grid md:grid-cols-2 md:px-15">
                {/* Typography */}
                <div className="relative flex flex-col items-start justify-center overflow-hidden">
                    {/* Decorative Quote Icon */}
                    <div className="absolute inset-0 flex ">
                        <ImQuotesRight
                            color="#FF4F04"
                            size={260}
                            className="opacity-60 translate-x-10 -translate-y-10"
                        />
                    </div>
                    {/* Content */}
                    <p className="md:text-[64px] text-[30px] font-bold relative z-10">
                        Kickstart It Now !
                    </p>
                    <p className="md:text-[24px] text-[15px] font-bold relative z-10">
                        They Believed. They Started, They Built. <br />
                        All with RIEL.studio by their side.
                    </p>
                    <div className="pt-2 relative z-10">
                        <Link href="/portfolio">
                            <Button label="See The Works" icon={<FaArrowRight />} variant="secondary" />
                        </Link>
                    </div>
                </div>
                {/* TypoGraphy End */}
                {/* Cards */}
                <div className="md:flex md:space-x-2 md:pt-0 pt-5 space-y-3">
                    <CardTestimonies testimonyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a mauris neque. Sed id dolor sed velit maximus tincidunt a at est. Vestibulum semper nisl ac suscipit consectetur" name="Riel" position="Student At Lala Land" />
                    <CardTestimonies testimonyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a mauris neque. Sed id dolor sed velit maximus tincidunt a at est. Vestibulum semper nisl ac suscipit consectetur" name="Riel" position="Student At Lala Land" />
                </div>
                {/* Cards End*/}
            </div>
            {/* Testimonies End */}
        </>
    )
}