import Card from "@/components/card";

import { PiTargetBold } from "react-icons/pi";
import { PiStarFourBold } from "react-icons/pi";


export default function AboutTagline() {
    return (
        <>
            {/* Tagline RIEL.studio */}
            <div className="pt-10">
                {/* Title */}
                <p className="text-center capitalize font-bold text-[32px] text-(--main-color) pt-30">
                    behind the words
                </p>
                <p className="text-center capitalize font-bold text-[80px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                    kickstart your ideas <br /> empower your journey
                </p>
                {/* Title End */}
                {/* Typography and Card */}
                <div className="pt-15 grid grid-cols-2 gap-20 items-center">
                    <div>
                        <p className="font-semibold text-[25px] text-justify">
                            In RIEL.studio, every idea is priceless -
                            a spark that holds endless possibilites.
                            That&apos;s why RIEL.studio treat every concept with care, creativity, and purpose.
                            Together, we&apos;ll turn what you imagine into what you can achieve.
                        </p>
                    </div>
                    <div className="flex space-x-5">
                        <Card icon={<PiTargetBold size={32} />} cardTitle="Our Goal">
                            <p>
                                To help individuals and brand kickstart their ideas and turn them into meaningful digital experiences. Through thoughtful design and seamless development, <span className="font-bold">RIEL.studio aim to empower every journey from concept to creation.</span>
                            </p>
                        </Card>
                        <Card icon={<PiStarFourBold size={32} />} cardTitle="Our Vision">
                            <p>
                                To be creative partner where every idea - no matter how small - finds its spark. <span className="font-bold">RIEL.studio envision a world where creativity is not limited by fear and doubt, but empowered by collaboration, innovation, and purpose.</span>
                            </p>
                        </Card>
                    </div>
                </div>
                {/* Typography and Card End */}
            </div>
            {/* Tagline RIEL.studio End */}
        </>
    )
}