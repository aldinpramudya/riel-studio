import CardHero from "@/components/student-kickstart/cardHero";
import WhatSection from "@/components/student-kickstart/whatSection";
import WhyJoin from "@/components/student-kickstart/whyJoin";
import Pricing from "@/components/student-kickstart/pricing";
import Cta from "@/components/student-kickstart/cta";

export default function StudentKickstart() {
    return (
        <>
            <div className="px-50">
                <CardHero/>
                <WhatSection />
                <WhyJoin />
                <Pricing />
                <Cta/>
            </div>
        </>
    )
}