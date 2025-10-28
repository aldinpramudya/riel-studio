"use client"; 

import Link from 'next/link';
import Button from "@/components/button";

import { RiHome2Line } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";

export default function NotFound() {
    return (
        <div className="px-50">
            <div className="text-center">
                <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                    404
                </p> <br />
                <p className="capitalize font-bold text-[45px] tracking-tight text-(--main-color)">
                    OOOPSS, Pages Not Found
                </p>
                <p className='pt-10 font-semibold '>
                    This page could be still in development or still (lost) somewhere
                </p>
                <div className="flex justify-center space-x-5 pt-10">
                    <Link href="/">
                        <Button label="Go To Home Page" icon={<RiHome2Line />} variant="primary" />
                    </Link>
                    <Button label="Got To Previous Page" icon={<IoMdArrowBack />} variant="secondary" onClick={() => window.history.back()} />
                </div>
            </div>
        </div>
    )
}