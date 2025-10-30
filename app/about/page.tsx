// Components
import Hero from "@/components/about/hero";
import AboutTagline from "@/components/about/aboutTagline";
import Cta from "@/components/about/Cta";

export default function About() {
    return (
        <>
            {/* Container Padding X-Axis and Liitle bit */}
            <div className="px-50">
                <Hero />
                <AboutTagline/>
                <Cta />
            </div>
        </>
    )
}