import Card from "@/components/card";

import { PiTargetBold } from "react-icons/pi";
import { PiStarFourBold } from "react-icons/pi";


export default function AboutTagline() {
    return (
        <>
            {/* Tagline RIEL.studio */}
            <div className="pt-10">
                {/* Title */}
                <p className="text-center capitalize font-bold md:text-[32px] text-3xl text-(--main-color) pt-30">
                    behind the words
                </p>
                <p className="md:pt-0 pt-5 text-center capitalize font-bold md:text-[80px] text-4xl tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                    kickstart your ideas <br /> empower your journey
                </p>
                {/* Title End */}
                {/* Typography and Card */}
                <p className="font-semibold md:text-[25px] text-[18px] text-center pt-10">
                    In RIEL.studio, every idea is priceless
                    a spark that holds endless possibilites.
                    That&apos;s why RIEL.studio treat every concept with care, creativity, and purpose.
                    Together, we&apos;ll turn what you imagine into what you can achieve.
                </p>
                <div className="flex justify-center pt-10 md:gap-10 gap-10 flex-wrap">
                    <Card icon={<PiTargetBold size={32} />} cardTitle="Our Goal">
                        <p className="">
                            To help individuals and brand kickstart their ideas and turn them into meaningful digital experiences. Through thoughtful design and seamless development, <span className="font-bold">RIEL.studio aim to empower every journey from concept to creation.</span>
                        </p>
                    </Card>
                    <Card icon={<PiStarFourBold size={32} />} cardTitle="Our Vision">
                        <p>
                            To be creative partner where every idea - no matter how small - finds its spark. <span className="font-bold">RIEL.studio envision a world where creativity is not limited by fear and doubt, but empowered by collaboration, innovation, and purpose.</span>
                        </p>
                    </Card>
                </div>
                {/* Typography and Card End */}
            </div>
            {/* Tagline RIEL.studio End */}
        </>
    )
}