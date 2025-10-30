// Components
import Hero from "@/components/about/hero";
import AboutTagline from "@/components/about/aboutTagline";
import Cta from "@/components/about/Cta";

export default function About() {
    return (
        <>
            {/* Container Padding X-Axis and Liitle bit */}
            <div className="md:px-50 px-10">
                <Hero />
                <AboutTagline/>
                <Cta />
            </div>
        </>
    )
}