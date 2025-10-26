import Image from "next/image"
import Link from "next/link";

// Icon
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

// FOOTER ON THE WAY
export default function Footer() {
    return (
        // Footer Start
        <footer className="w-full py-6 mt-auto border-y border-[#dbdbdb]">
            {/* container all */}
            <div className="container mx-auto flex justify-around">
                {/* RIEL.studio */}
                <div className="flex flex-col">
                    <div className="relative right-9">
                        <Image
                            src="/images/logo-white.png"
                            alt="Riel Logo Black on White"
                            width={126}
                            height={126}
                        />
                    </div>
                    <p className="font-bold capitalize">
                        kickstart your idea, <br /> empower your journey.
                    </p>
                </div>
                {/* Navigation */}
                <div className="flex flex-col capitalize mt-6">
                    <p className="font-bold">navigation</p>
                    <div className="flex flex-col space-y-2 mt-3">
                        <Link href="/" className="">home</Link>
                        <Link href="/about" className="">about</Link>
                        <Link href="/services" className="">services</Link>
                        <Link href="/portfolio" className="">portfolio</Link>
                        <Link href="/contact" className="">contact</Link>
                    </div>
                </div>
                {/* Contact */}
                <div className="mt-6">
                    <p className="font-bold">Contact</p>
                    <div className="flex flex-col space-y-2 mt-3">
                        <p>
                            <MdOutlineEmail color="#FF4F04"/> <a href="mailto:rielelesia@gmail.com">rielelesia@gmail.com</a>
                        </p>
                        <IoCallOutline color="#FF4F04" /> <a href="tel:+6281234567890">+62 812-3456-7890</a>
                    </div>
                </div>
            </div>
            {/* container ALL End */}
            {/* Copyright */}
            <div className="h-20 flex justify-center items-center pt-10">
                <p className="font-semibold opacity-35"> © {new Date().getFullYear()} RIEL.studio — Kickstart Your Ideas, Empower Your Journey.</p>
            </div>
        </footer>
        // Footer End
    )
}