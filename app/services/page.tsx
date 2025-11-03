import Hero from "@/components/services/hero";
import CustomDevelopment from "@/components/services/customDevelopment";
import Workflow from "@/components/services/workflow";
import Cta from "@/components/cta";

export default function Services() {
    return (
        <>
            {/* Container */}
            <div className="md:px-50 px-10">
                <Hero />
                <CustomDevelopment />
                <Workflow />
                <Cta title="ready to kickstart yours ?" subTitle=" Now it&apos;s your turn to bring yours to life !" />
            </div>
            {/* Container End */}
        </>
    )
}