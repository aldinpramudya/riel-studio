import CardPointRounded from "@/components/cardPointRounded";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LuTabletSmartphone } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function WhyChooseUs() {
    return (
        <>
            {/* Why Choose Riel */}
            <div id="why-choose" className="md:pt-15">
                {/* Why Choose Typography */}
                <div className="text-center">
                    <p className="capitalize font-bold md:text-[32px] text-3xl text-(--main-color) pt-30">
                        why
                    </p>
                    <p className="md:text-[40px] text-[17px] font-bold">
                        Choose RIEL.studio ?
                    </p>
                    <p className="md:text-[24px] text-[12px] tracking-tight pt-2">
                        Because your journey deserves more than just a website. <br />
                        it deserves a partner who builds with you, from start to finish.
                    </p>
                </div>
                {/* Why Choose Typography End*/}
                {/* Card Rounded */}
                <div className="pt-10 grid grid-cols-1 gap-13">
                    <CardPointRounded icon={<MdOutlineSupportAgent size={45} />} cardTitle="End to End Support" cardContent="RIEL.studio make sure will be there at every stage, from designing your website to maintaining it for long-term growth" cardTitleClassName="md:text-[35px] text-[25px]" cardContentClassName="md:text-[24px] text-[15px]" />
                    <CardPointRounded icon={<LuTabletSmartphone size={45} />} cardTitle="Responsive. Reliable. Ready." cardContent="Websites that adapt to every device. Optimized for desktop, tablet, and mobile with continuous support you can count on." cardTitleClassName="md:text-[35px] text-[20px]" cardContentClassName="md:text-[24px] text-[15px]" />
                    <CardPointRounded icon={<AiOutlineThunderbolt size={45} />} cardTitle="Fast Loading" cardContent="Fast-loading, high-performing websites that keep your audience engaged from the first click." cardTitleClassName="md:text-[35px] text-[25px]" cardContentClassName="md:text-[24px] text-[15px]" />
                </div>
                {/* Card Rounded End */}
            </div>
            {/* Why Choose Riel End */}
        </>
    )
}