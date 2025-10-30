import Hero from "@/components/services/hero";
import CustomDevelopment from "@/components/services/customDevelopment";
import Workflow from "@/components/services/workflow";
import Cta from "@/components/services/cta";

export default function Services() {
    return (
        <>
            {/* Container */}
            <div className="px-50">
                <Hero />
                <CustomDevelopment />
                <Workflow />
                <Cta />
            </div>
            {/* Container End */}
        </>
    )
}