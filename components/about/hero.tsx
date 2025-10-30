import Image from "next/image";
import Button from "@/components/button";

import { RxOpenInNewWindow } from "react-icons/rx";

export default function Hero() {
    return (
        <>
            <div className="text-center">
                {/* Title */}
                <h1 className="capitalize font-bold md:text-[64px] text-[35px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                    about RIEL.studio
                </h1>
                <p className="md:text-[24px] text-lg font-bold">
                    Learn more about who we are and what we believe.
                </p>
                {/* Title End*/}
            </div>
            {/* About Riel.studio */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center md:px-55 md:pt-20 pt-15 space-y-5">
                <Image
                    src="/images/Black On White.png"
                    alt="RIEL.logo"
                    width={200}
                    height={200}
                    className="md:w-[300px] md:h-[300px] rounded-full border border-(--main-color) justify-self-center"
                />
                <div>
                    <p className="font-bold text-(--main-color) md:text-[50px] text-[30px]">
                        Hello !
                    </p>
                    <p className="md:text-[20px] text-[17px] text-justify">
                        <span className="font-bold">
                            I&apos;m Riel, the mind behind RIEL.studio. <br />
                        </span>
                        I collaborate with brands, startups, and individuals to craft digital experiences that are striking and purposefully. <br />
                        Every journey starts with a idea <br />
                        and I&apos;m here to help you kickstart it. <br />
                    </p>
                    <div className="pt-5 md:flex-none flex">
                        <Button label="Know Riel More" variant="primary" icon={<RxOpenInNewWindow size={25} />} />
                    </div>
                </div>
            </div>
            {/* About Riel.studio End */}
        </>
    )
}