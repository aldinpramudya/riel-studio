import Card from "@/components/card";
import Link from "next/link";

import { servicesPackageStudent } from "@/constants";

import { FaPlus } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

import Button from "@/components/button";

export default function Pricing() {
    return (
        <>
            {/* Pricing */}
            <div className="pt-15">
                <p className="capitalize font-bold md:text-[64px] text-[35px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                    <span className="text-[#343434]">Special Pricing</span> #StudentKickstart
                </p>
                <div className="flex justify-center pt-10 md:gap-10 gap-10 flex-wrap">
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
                            {/* Gap for Mobile */}
                            <div className="mt-13"></div>
                            {/* Gap For Mobile End */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <Link href={service.linkWhatsapp} target="_blank">
                                    <Button label={service.price} variant="secondary" icon={<MdDiscount />}></Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            {/* Pricing End */}
        </>
    )
}