'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Icons
import { LuSunMedium } from "react-icons/lu";
import { BsTranslate } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        // Container
        <nav className="sticky top-0 left-0 md:w-full z-50 backdrop-blur-lg">
            <div className="md:w-7xl mx-auto md:px-6 md:py-4 flex items-center justify-between px-4 py-3">
                {/* LEFT: Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/logo-white.png"
                        alt="Riel Logo Black on White"
                        width={126}
                        height={126}
                        className="w-[90px] md:w-[126px]" // sedikit kecil di mobile
                    />
                </div>

                {/* RIGHT: Icons + Mobile Menu Button */}
                <div className="flex items-center space-x-3 md:space-x-4">
                    {/* Icons - visible both desktop & mobile */}
                    <div className="flex items-center space-x-3 text-xl md:text-[43px]">
                        <LuSunMedium className="cursor-pointer" />
                        <BsTranslate className="cursor-pointer" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-800 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <IoClose size={28} /> : <RiMenu3Fill size={28} />}
                    </button>
                </div>

                {/* DESKTOP Menu */}
                <div className="hidden md:flex space-x-8 text-black font-bold capitalize ml-10">
                    <Link href="/" className="text-black">home</Link>
                    <Link href="/about" className="text-black">about</Link>
                    <Link href="/services" className="text-black">services</Link>
                    <Link href="/portfolio" className="text-black">portfolio</Link>
                    <Link href="/contact" className="text-black">contact</Link>
                    <Link
                        href="/student-kickstart"
                        className="bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent"
                    >
                        #studentKickstart
                    </Link>
                </div>
            </div>

            {/* MOBILE Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="flex flex-col items-center font-bold space-y-4 py-4 capitalize w-full">
                        <Link href="/" onClick={() => setIsOpen(false)}>home</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>about</Link>
                        <Link href="/services" onClick={() => setIsOpen(false)}>services</Link>
                        <Link href="/portfolio" onClick={() => setIsOpen(false)}>portfolio</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>contact</Link>
                        <Link
                            href="/student-kickstart"
                            className="bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent"
                            onClick={() => setIsOpen(false)}
                        >
                            #studentKickstart
                        </Link>
                    </div>
                </div>
            )}
        </nav>

        // COntainer End
    );
}