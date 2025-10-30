import Image from "next/image"
import Link from "next/link";

// Icon
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6"

// FOOTER ON THE WAY
export default function Footer() {
    return (
        // Footer Start
        <footer className="w-full py-6 mt-auto border-y border-[#dbdbdb]">
            {/* container all */}
            <div className="container mx-auto flex flex-col md:flex-row md:justify-around items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">

                {/* RIEL.studio */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="relative right-0 md:right-9">
                        <Image
                            src="/images/logo-white.png"
                            alt="Riel Logo Black on White"
                            width={126}
                            height={126}
                        />
                    </div>
                    <p className="font-bold capitalize mt-2">
                        kickstart your idea, <br /> empower your journey.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col capitalize mt-0 md:mt-6">
                    <p className="font-bold">navigations</p>
                    <div className="flex flex-col space-y-2 mt-3">
                        <Link href="/">home</Link>
                        <Link href="/about">about</Link>
                        <Link href="/services">services</Link>
                        <Link href="/portfolio">portfolio</Link>
                        <Link href="/contact">contact</Link>
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col items-center md:items-start mt-0 md:mt-6">
                    <p className="font-bold">Contacts</p>
                    <div className="flex flex-col space-y-2 mt-3">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <MdOutlineEmail color="#FF4F04" />
                            <a href="mailto:rielelesia@gmail.com" target="_blank">rielelesia@gmail.com</a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <IoCallOutline color="#FF4F04" />
                            <a href="tel:+6281234567890" target="_blank">+62 812-3456-7890</a>
                        </div>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex flex-col items-center md:items-start mt-0 md:mt-6">
                    <p className="font-bold">Socials</p>
                    <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
                        <FaInstagram color="#FF4F04" />
                        <a href="https://www.instagram.com/riel.studio_/" target="_blank">riel.studio_</a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="h-20 flex justify-center items-center pt-10 text-center px-5">
                <p className="font-semibold opacity-35">
                    © {new Date().getFullYear()} RIEL.studio — Kickstart Your Ideas, Empower Your Journey.
                </p>
            </div>
        </footer>

        // Footer End
    )
}