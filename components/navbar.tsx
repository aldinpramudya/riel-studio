'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuSunMedium } from "react-icons/lu";
import { BsTranslate } from "react-icons/bs";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        // Container
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    {/* RIEL. Logo */}
                    <Image
                        src="/images/logo-white.png"
                        alt="Riel Logo Black on White"
                        width={126}
                        height={126}
                    />
                    {/* RIEL. Logo End */}
                    {/* Menu */}
                    <div className="hidden md:flex space-x-8 text-black font-bold capitalize">
                        <Link href="/" className="">home</Link>
                        <Link href="/about" className="">about</Link>
                        <Link href="/services" className="">services</Link>
                        <Link href="/portfolio" className="">portfolio</Link>
                        <Link href="/contact" className="">contact</Link>
                    </div>
                    {/* Menu End */}
                </div>
                {/* Icons */}
                <div className="flex space-x-4">
                    <LuSunMedium size={43}/>
                    <BsTranslate size={43}/>
                </div>
                {/* Icons End */}
                {/* Mobile Button OTW  */}
                
                {/* Mobile Button End */}
            </div>
        </nav>
        // COntainer End
    );
}