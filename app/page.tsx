import Button from "@/components/button";
import Card from "@/components/card";
import { FaArrowRight } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { MdOutlineColorLens } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";

export default function Home() {
  return (
    <>
      {/* Container Padding X-axis and little bit */}
      <div className="px-50 py-15">
        {/* Hero Centered Content Container */}
        <div id="hero" className="text-center">
          {/* Tagline */}
          <h1 className="capitalize font-bold text-[96px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
            kickstart your ideas <br /> empower your journey
          </h1>
          {/* Tagline End */}
          {/* Description */}
          <div className="text-[24px]">
            <p className="font-semibold">
              Every great idea needs a first step
            </p>
            <p className="tracking-tight">
              <span className="font-semibold">RIEL.studio</span> here to help you build a website that&apos;s not only visually stunning, <br /> but also functional, fast, and ready to elevate your brand or business to the next level.
            </p>
          </div>
          {/* Description End*/}
          {/* Buttons */}
          <div className="space-x-5 pt-10">
            <Button label="Start Now" icon={<LuSparkles />} variant="primary" />
            <Button label="See What Riel. Built" icon={<FaArrowRight />} variant="secondary" />
          </div>
          {/* Buttons End */}
        </div>
        {/* Hero Centered Content Container */}
        {/* Services Content */}
        <div id="services" className="pt-30">
          <h2 className="capitalize text-center font-bold text-[32px] text-(--main-color) pt-30">
            services
          </h2>
          <h3 className="text-[40px] text-center font-bold">
            What RIEL.studio Can Do For You ?
          </h3>
          {/* Card */}
          <div className="flex justify-center pt-10 gap-30 flex-wrap">
            <Card icon={<MdOutlineColorLens size={32} />} cardTitle="UI/UX Design" cardContent="Empower your journey with designs that inspire, engage, and guide users seamlessly." />
            <Card icon={<IoCodeSlash size={32} />} cardTitle="Custom Development" cardContent="Kickstart your idea with a fully tailored website — designed, built, and deployed to empower your journey from concept to reality." />
          </div>
          {/* Card End */}
        </div>
        {/* Services Content End */}
        {/* Why Choose Riel */}
        <div id="why-choose">
          <div className="text-center">
            <h2 className="capitalize font-bold text-[32px] text-(--main-color) pt-30">
              why
            </h2>
            <h3 className="text-[40px] font-bold">
              Choose RIEL.studio ?
            </h3>
            <p className="text-[24px] tracking-tight">
              Because your journey deserves more than just a website — <br />
              it deserves a partner who builds with you, from start to finish.
            </p>
          </div>
        </div>
        {/* Why Choose Riel End */}
      </div>
      {/* Container Padding X-axis and little bit End */}
    </>
  )
}
