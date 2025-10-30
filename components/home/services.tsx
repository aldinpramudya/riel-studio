import Card from "@/components/card";

import { MdOutlineColorLens } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";

export default function Services() {
    return (
        <>
            {/* Services Content */}
            <div id="services" className="md:pt-15">
                <div className="text-center">
                    <p className="capitalize font-bold md:text-[32px] text-3xl text-(--main-color) pt-30">
                        services
                    </p>
                    <p className="md:text-[40px] text-[17px] font-bold">
                        What RIEL.studio Can Do For You ?
                    </p>
                    <p className="md:text-[24px] text-[13px] tracking-tight pt-2">
                        At RIEL.studio, every idea deserves a strong start. <br />
                        We turn your vision into reality and empower your journey forward.
                    </p>
                </div>
                {/* Card */}
                <div className="flex justify-center pt-10 md:gap-30 gap-10 flex-wrap">
                    <Card icon={<MdOutlineColorLens size={32} />} cardTitle="UI/UX Design">
                        <p>Empower your journey with designs that inspire, engage, and guide users seamlessly.</p>
                    </Card>
                    <Card icon={<IoCodeSlash size={32} />} cardTitle="Custom Development">
                        <p>Kickstart your idea with a fully tailored website — designed, built, and deployed to empower your journey from concept to reality.</p>
                    </Card>
                </div>
                {/* Card End */}
            </div>
            {/* Services Content End */}
        </>
    )
}