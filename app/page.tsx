// Component Pages
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import WhyChooseUs from "@/components/home/whyChoose";
import Testimonies from "@/components/home/testimonies";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      {/* Container Padding X-axis and little bit Padding Y-axis*/}
      <div className="md:px-50 px-10">
        <Hero />
        <Services />
        <WhyChooseUs/>
        <Testimonies />
        <Cta title="ready to kickstart yours ?" subTitle=" Now it&apos;s your turn to bring yours to life !"/>
      </div>
      {/* Container Padding X-axis and little bit End */}
    </>
  )
}
