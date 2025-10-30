"use client"

// Components
import Button from "@/components/button"
import Card from "@/components/card";
import CardPointRounded from "@/components/cardPointRounded";

// Icons
import { PiConfettiBold } from "react-icons/pi";
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";


// Import constants
import { servicesPackageStudent } from "@/constants";


export default function StudentKickstart() {
    const scrollToSection = () => {
        const section = document.getElementById("studentKickstart");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
            <div className="px-50">
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
                {/* What is this */}
                <div id="studentKickstart" className="pt-15">
                    <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        <span className="text-[#343434]">What is</span> #StudentKickstart ?
                    </p>
                    <div>
                        <p className="text-[20px] font-semibold">
                            <span className="font-bold bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">#StudentKickstart</span> is RIEL.studio special initiative for students and college creators who dare to dream big.
                        </p>
                        <p className="text-[20px] font-semibold">
                            Whether it&apos;s a class project, a portfolio idea, or the start of something greater — RIEL.studio here to help you bring your vision to the next level.
                        </p>
                        <p className="text-[20px] font-semibold">
                            Because RIEL.studio believe your ideas deserve more than imagination — they deserve realization.
                        </p>
                    </div>
                </div>
                {/* What is this End */}
                {/* Why Join Here */}
                <div className="pt-15">
                    <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        <span className="text-[#343434]">Why join</span> #StudentKickstart ?
                    </p>
                    <div className="flex space-x-5 justify-center pt-5">
                        <Card icon={<MdOutlineDiscount size={32} />} cardTitle="Special Pricing">
                            <p>
                                Kickstart with special prices — making it easier for you to start without breaking your budget.
                            </p>
                        </Card>
                        <Card icon={<IoRocketOutline size={32} />} cardTitle="Portfolio-Ready Results">
                            <p>
                                Build something real you can proudly showcase — from landing pages to mini web apps.
                            </p>
                        </Card>
                        <Card icon={<FaRegLightbulb size={32} />} cardTitle="Professional Guidance">
                            <p>
                                RIEL.studio help shape your idea from concept to execution, providing creative direction and technical support.
                            </p>
                        </Card>
                    </div>
                </div>
                {/* Why Join Here End */}
                {/* Pricing */}
                <div className="pt-15">
                    <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        <span className="text-[#343434]">Special Pricing</span> #StudentKickstart
                    </p>
                    <div className="flex justify-center pt-10 space-x-20 ">
                        {servicesPackageStudent.map((service) => (
                            <Card key={service.id} icon={service.icon} cardTitle={service.packageName}>
                                <p>
                                    {service.description}
                                </p>
                                <ul className="list-none space-y-2 pt-5">
                                    {service.points.map((point, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <FaPlus color="#FF4F04" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <Button label={service.price} variant="secondary" icon={<MdDiscount/>}></Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                {/* Pricing End */}
                {/* How it Works End */}
                {/* CTA */}
                <div className="pt-20">
                    {/* Typography */}
                    <div className="text-center">
                        <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                            ready to kickstart with #studentKickstart ?
                        </p>
                        <p className="font-bold text-[24px]">
                            Whether you&apos;re a student, a dreamer, or a future creator — let&apos;s make your idea happen.
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