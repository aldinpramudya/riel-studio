// Components
import Button from "@/components/button";
import Card from "@/components/card";
import CardPointRounded from "@/components/cardPointRounded";
import CardTestimonies from "@/components/cardTestimonies";
// Icons
import { FaArrowRight } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { MdOutlineColorLens } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LuTabletSmartphone } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { ImQuotesRight } from "react-icons/im";
import { IoCall } from "react-icons/io5";


export default function Home() {
  return (
    <>
      {/* Container Padding X-axis and little bit Padding Y-axis*/}
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
          <div className="text-center">
            <p className="capitalize font-bold text-[32px] text-(--main-color) pt-30">
              services
            </p>
            <p className="text-[40px] font-bold">
              What RIEL.studio Can Do For You ?
            </p>
            <p className="text-[24px] tracking-tight pt-2">
              At RIEL.studio, every idea deserves a strong start. <br />
              We turn your vision into reality and empower your journey forward.
            </p>
          </div>
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
          {/* Why Choose Typography */}
          <div className="text-center">
            <p className="capitalize font-bold text-[32px] text-(--main-color) pt-30">
              why
            </p>
            <p className="text-[40px] font-bold">
              Choose RIEL.studio ?
            </p>
            <p className="text-[24px] tracking-tight pt-2">
              Because your journey deserves more than just a website — <br />
              it deserves a partner who builds with you, from start to finish.
            </p>
          </div>
          {/* Why Choose Typography End*/}
          {/* Card Rounded */}
          <div className="pt-10 grid grid-cols-1 gap-13">
            <CardPointRounded icon={<MdOutlineSupportAgent size={45} />} cardTitle="End to End Support" cardContent="RIEL.studio make sure will be there at every stage, from designing your website to maintaining it for long-term growth" />
            <CardPointRounded icon={<LuTabletSmartphone size={45} />} cardTitle="Responsive. Reliable. Ready." cardContent="Websites that adapt to every device. Optimized for desktop, tablet, and mobile with continuous support you can count on." />
            <CardPointRounded icon={<AiOutlineThunderbolt size={45} />} cardTitle="Fast Loading" cardContent="Fast-loading, high-performing websites that keep your audience engaged from the first click." />
          </div>
          {/* Card Rounded End */}
        </div>
        {/* Why Choose Riel End */}
        {/* Testimonies */}
        <div id="testimonies" className="pt-30 grid grid-cols-2 px-15">
          {/* Typography */}
          <div className="relative flex flex-col items-start justify-center overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute inset-0 flex">
              <ImQuotesRight
                color="#FF4F04"
                size={260}
                className="opacity-60 translate-x-10 -translate-y-10"
              />
            </div>
            {/* Content */}
            <p className="text-[64px] font-bold relative z-10">
              Kickstart It Now !
            </p>
            <p className="text-[24px] font-bold relative z-10">
              They Believed. They Started, They Built — <br />
              All with RIEL.studio by their side.
            </p>
            <div className="pt-2 relative z-10">
              <Button label="See The Works" icon={<FaArrowRight />} variant="secondary" />
            </div>
          </div>
          {/* TypoGraphy End */}
          {/* Cards */}
          <div className="flex space-x-2">
            <CardTestimonies testimonyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a mauris neque. Sed id dolor sed velit maximus tincidunt a at est. Vestibulum semper nisl ac suscipit consectetur" name="Riel" position="Student At Lala Land" />
            <CardTestimonies testimonyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a mauris neque. Sed id dolor sed velit maximus tincidunt a at est. Vestibulum semper nisl ac suscipit consectetur" name="Riel" position="Student At Lala Land" />
          </div>
          {/* Cards End*/}
        </div>
        {/* Testimonies End */}
        {/* CTA lAST */}
        <div id="cta" className="pt-40">
          {/* Typography */}
          <div className="text-center">
            <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
              ready to kickstart yours ?
            </p>
            <p className="font-bold text-[24px]">
              Now it&apos;s your turn to bring yours to life !
            </p>
          </div>
          {/* Typography End */}
          {/* Button */}
          <div className="flex justify-center space-x-5 pt-10">
            <Button label="Kickstart Now" icon={<IoCall />} variant="primary" />
            <Button label="See RIEL.studio Portfolio" icon={<FaArrowRight />} variant="secondary" />
          </div>
          {/* Button End */}
        </div>
        {/* CTA Last End */}
      </div>
      {/* Container Padding X-axis and little bit End */}
    </>
  )
}
