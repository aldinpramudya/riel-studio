import CardPointRounded from "@/components/cardPointRounded";
import Card from "@/components/card";
import Button from "@/components/button";
import PillBadges from "@/components/pillBadges";

// Icons
import { FaPlus } from "react-icons/fa";
import { PiStarFourBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

// Constants
import { servicesPackage, pillBadgesData, workflowData } from "@/constants";


export default function Services() {
    return (
        <>
            {/* Container */}
            <div className="px-50">
                {/* Title */}
                <div className="text-center">
                    {/* Title */}
                    <h1 className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        RIEL.studio services
                    </h1>
                    <p className="text-[24px] font-bold">
                        Explore what we can create together.
                    </p>
                    {/* Title End*/}
                </div>
                {/* Card */}
                <div className="flex justify-center pt-10 space-x-20 ">
                    {servicesPackage.map((service) => (
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
                                <Button label={service.price} variant="secondary"></Button>
                            </div>
                        </Card>
                    ))}
                </div>
                {/* Card End */}
                {/* Custom Deplyoment */}
                <div className="pt-30">
                    {/* Typography */}
                    <div className="text-center">
                        <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                            bigger ideas ?, no problem !
                        </p>
                        <p className="text-[24px] font-bold">
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
                {/* Our Workflow */}
                <div className="pt-30">
                    {/* Title */}
                    <div className="text-center">
                        <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                            RIEL.studio Workflows
                        </p>
                        <p className="text-[24px] font-bold">
                            A clear process to turn ideas to realities.
                        </p>
                    </div>
                    {/* Title */}
                </div>
                {/* Points */}
                <div className="flex justify-evenly pt-10">
                    {workflowData.map((data) => (
                        <CardPointRounded key={data.id} cardTitle={data.cardTitle} cardContent={data.cardContent} icon={data.icon} cardTitleClassName="text-[24px]" iconClassName="text-[30px] text-white" />
                    ))}
                </div>
                {/* Points */}
                {/* Our Workflow End */}
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
            </div>
            {/* Container End */}
        </>
    )
}