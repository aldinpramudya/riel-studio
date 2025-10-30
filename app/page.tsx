// Components
import Button from "@/components/button";
import CardTestimonies from "@/components/cardTestimonies";
// Icons
import { FaArrowRight } from "react-icons/fa6";
import { ImQuotesRight } from "react-icons/im";
import { IoCall } from "react-icons/io5";

// Component Pages
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import WhyChooseUs from "@/components/home/whyChoose";
import Testimonies from "@/components/home/testimonies";
import Cta from "@/components/home/cta";

export default function Home() {
  return (
    <>
      {/* Container Padding X-axis and little bit Padding Y-axis*/}
      <div className="md:px-50 md:py-15 px-10">
        <Hero />
        <Services />
        <WhyChooseUs/>
        <Testimonies />
        <Cta/>
      </div>
      {/* Container Padding X-axis and little bit End */}
    </>
  )
}
