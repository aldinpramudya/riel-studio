import Card from "@/components/card";

import { servicesPackageStudent } from "@/constants";

import { FaPlus } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

import Button from "@/components/button";

export default function Pricing() {
    return (
        <>
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
                                <Button label={service.price} variant="secondary" icon={<MdDiscount />}></Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            {/* Pricing End */}
        </>
    )
}