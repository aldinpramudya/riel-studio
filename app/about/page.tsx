// Components
import Hero from "@/components/about/hero";
import AboutTagline from "@/components/about/aboutTagline";
import Cta from "@/components/cta";

export default function About() {
    return (
        <>
            {/* Container Padding X-Axis and Liitle bit */}
            <div className="md:px-50 px-10">
                <Hero />
                <AboutTagline />
                <Cta title="ready to kickstart yours ?" subTitle=" Now it&apos;s your turn to bring yours to life !" />
            </div>
        </>
    )
}