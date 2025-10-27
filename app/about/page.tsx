import Image from "next/image";
import Button from "@/components/button";
import Card from "@/components/card";

// Icons
import { RxOpenInNewWindow } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { PiStarFourBold } from "react-icons/pi";

export default function About() {
    return (
        <>
            {/* Container Padding X-Axis and Liitle bit */}
            <div className="px-50">
                <div className="text-center">
                    {/* Title */}
                    <h1 className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        about RIEL.studio
                    </h1>
                    <p className="text-[24px] font-bold">
                        Learn more about who we are and what we believe.
                    </p>
                    {/* Title End*/}
                </div>
                {/* About Riel.studio */}
                <div className="grid grid-cols-2 items-center px-55 pt-20">
                    <Image
                        src="/images/Black On White.png"
                        alt="RIEL.logo"
                        width={300}
                        height={300}
                        className="rounded-full border border-(--main-color)"
                    />
                    <div>
                        <p className="font-bold text-(--main-color) text-[32px]">
                            Hello !
                        </p>
                        <p className="text-[20px] text-justify">
                            <span className="font-bold">
                                I&apos;m Riel, the mind behind RIEL.studio. <br />
                            </span>
                            I collaborate with brands, startups, and individuals to craft digital experiences that are striking and purposefully. <br />
                            Every journey starts with a idea — <br />
                            and I&apos;m here to help you kickstart it. <br />
                        </p>
                        <div className="pt-5">
                            <Button label="Know Riel More" variant="primary" icon={<RxOpenInNewWindow size={25} />} />
                        </div>
                    </div>
                </div>
                {/* About Riel.studio End */}
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
                {/* CTA */}
                <div className="pt-20">
                    {/* Typography */}
                    <div className="text-center">
                        <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                            kickstart it now !
                        </p>
                        <p className="font-bold text-[24px]">
                            Let RIEL.studio know your idea and start your journey now !
                        </p>
                    </div>
                    {/* Typography End */}
                    {/* Button */}
                    <div className="flex justify-center space-x-5 pt-10">
                        <Button label="Kickstart Now" icon={<IoCall />} variant="primary" />
                        <Button label="See What RIEL.studio Built" icon={<FaArrowRight />} variant="secondary" />
                    </div>
                    {/* Button End */}
                </div>
                {/* CTA End */}
            </div>
        </>
    )
}