import Image from "next/image";
import Button from "@/components/button";

import { RxOpenInNewWindow } from "react-icons/rx";

export default function Hero() {
    return (
        <>
            <div className="text-center">
                {/* Title */}
                <h1 className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                    about RIEL.studio
                </h1>
                <p className="text-[24px] font-bold">
                    Learn more about who we are and what we believe.
                </p>
                {/* Title End*/}
            </div>
            {/* About Riel.studio */}
            <div className="grid grid-cols-2 items-center px-55 pt-20">
                <Image
                    src="/images/Black On White.png"
                    alt="RIEL.logo"
                    width={300}
                    height={300}
                    className="rounded-full border border-(--main-color)"
                />
                <div>
                    <p className="font-bold text-(--main-color) text-[32px]">
                        Hello !
                    </p>
                    <p className="text-[20px] text-justify">
                        <span className="font-bold">
                            I&apos;m Riel, the mind behind RIEL.studio. <br />
                        </span>
                        I collaborate with brands, startups, and individuals to craft digital experiences that are striking and purposefully. <br />
                        Every journey starts with a idea — <br />
                        and I&apos;m here to help you kickstart it. <br />
                    </p>
                    <div className="pt-5">
                        <Button label="Know Riel More" variant="primary" icon={<RxOpenInNewWindow size={25} />} />
                    </div>
                </div>
            </div>
            {/* About Riel.studio End */}
        </>
    )
}