// Const
import { servicesPackage } from "@/constants";
// Components
import Card from "@/components/card";
import Button from "@/components/button";
// Icons
import { FaPlus } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            {/* Title */}
            <div className="text-center">
                {/* Title */}
                <h1 className="capitalize font-bold md:text-[64px] text-[35px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                    RIEL.studio services
                </h1>
                <p className="md:text-[24px] text-lg font-bold">
                    Explore what we can create together.
                </p>
                {/* Title End*/}
            </div>
            {/* Card */}
            <div className="flex justify-center pt-10 md:gap-10 gap-10 flex-wrap">
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
                        {/* Gap for Mobile */}
                        <div className="mt-13"></div>
                        {/* Gap For Mobile End */}
                        <div className="absolute mt-14 bottom-8 left-8 right-8">
                            <Button label={service.price} variant="secondary"></Button>
                        </div>
                    </Card>
                ))}
            </div>
            {/* Card End */}
        </>
    )
}