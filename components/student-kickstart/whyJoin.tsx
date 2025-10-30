import Card from "@/components/card";
import { MdOutlineDiscount } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";



export default function WhyJoin() {
    return (
        <>
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
        </>
    )
}