import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";

export default function Home() {
  return (
    <>
      {/* Container Padding X-axis and little bit */}
      <div className="px-50 py-10">
        <div className="text-center">
          {/* Tagline */}
          <h1 className="capitalize font-bold text-[96px] tracking-tight">
            kickstart your ideas <br /> empower your journey
          </h1>
          {/* Tagline End */}
          {/* Description */}
          <div className="text-[24px]">
            <p className="font-semibold">
              Every great idea needs a first step
            </p>
            <p className="">
              <span className="font-semibold">RIEL.studio</span> here to help you build a website that&apos;s not only visually stunning, <br /> but also functional, fast, and ready to elevate your brand or business to the next level.
            </p>
          </div>
          {/* Description End*/}
        {/* Buttons */}
        <div className="space-x-5 pt-10">
          <Button label="Start Now" icon={<LuSparkles/>} variant="primary"/>
          <Button label="See What Riel. Built" icon={<FaArrowRight />} variant="secondary"/>
        </div>
        {/* Buttons End */}
        </div>
      </div>
    </>
  )
}
