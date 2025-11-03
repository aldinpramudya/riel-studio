import CardHero from "@/components/student-kickstart/cardHero";
import WhatSection from "@/components/student-kickstart/whatSection";
import WhyJoin from "@/components/student-kickstart/whyJoin";
import Pricing from "@/components/student-kickstart/pricing";
import Cta from "@/components/cta";

export default function StudentKickstart() {
    return (
        <>
            <div className="md:px-40 px-10">
                <CardHero/>
                <WhatSection />
                <WhyJoin />
                <Pricing />
                <Cta title="ready to kickstart with #studentKickstart ?" subTitle="Whether you&apos;re a student, a dreamer, or a future creator. let&apos;s make your idea happen." />
            </div>
        </>
    )
}