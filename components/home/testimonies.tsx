"use client"

// Use Effect, State
import { useEffect, useState } from "react";

import Button from "@/components/button";

import { ImQuotesRight } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import CardTestimonies from "@/components/cardTestimonies";

import Link from "next/link";

// Data Types Testimonies
import type { ITestimonies } from "@/types/testimonies";
import { supabase } from "@/lib/db";


export default function Testimonies() {
    const [testimonies, setTestimonies] = useState<ITestimonies[]>([]);

    useEffect(() => {
        const fetchTestimonies = async () => {
            const { data, error } = await supabase
                .from('testimonies')
                .select('*');
            if (error) {
                console.log('Erro Fetch Data: ', error);
            } else {
                setTestimonies(data);
            }
        };

        fetchTestimonies();
    }, [supabase]);

    return (
        <>
            {/* Testimonies */}
            <div id="testimonies" className="pt-30 grid md:grid-cols-2 md:px-15">
                {/* Typography */}
                <div className="relative flex flex-col items-start justify-center overflow-hidden">
                    {/* Decorative Quote Icon */}
                    <div className="absolute inset-0 top-25 flex">
                        <ImQuotesRight
                            color="#FF4F04"
                            size={260}
                            className="opacity-60 translate-x-10 -translate-y-10"
                        />
                    </div>
                    {/* Content */}
                    <p className="md:text-[64px] text-[30px] font-bold relative z-10">
                        Kickstart It Now !
                    </p>
                    <p className="md:text-[24px] text-[15px] font-bold relative z-10">
                        They Believed. They Started, They Built. <br />
                        All with RIEL.studio by their side.
                    </p>
                    <div className="pt-2 relative z-10">
                        <Link href="/portfolio">
                            <Button label="See The Works" icon={<FaArrowRight />} variant="secondary" />
                        </Link>
                    </div>
                </div>
                {/* TypoGraphy End */}
                {/* Cards */}
                <div className="md:flex md:space-x-2 md:pt-0 pt-5 space-y-2">
                    {testimonies.slice(0, 2).map((data: ITestimonies) => (
                        <div key={data.id}>
                            <CardTestimonies testimonyText={data.client_testimonies} name={data.client_name} position={data.client_position} />
                        </div>
                    ))}
                </div>
                {/* Cards End*/}
            </div>
            {/* Testimonies End */}
        </>
    )
}