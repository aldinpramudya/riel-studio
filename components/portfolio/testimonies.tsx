"use client"

// Use Effect, State
import { useEffect, useState } from "react";

// Components Card Testimonies
import CardTestimonies from "@/components/cardTestimonies";

// Data Types Testimonies
import type { ITestimonies } from "@/types/testimonies";
import { supabase } from "@/lib/db";


export default function Testimonies() {
    const [testimonies, setTestimonies] = useState<ITestimonies[]>([]);

    useEffect(() => {
        const fetchTestimonies = async () => {
            const {data, error} = await supabase
                .from('testimonies')
                .select('*');
            if(error){
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
            <div className="pt-15">
                {/* Typography */}
                <div className="text-center">
                    <p className="capitalize font-bold md:text-[64px] text-[35px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        Hear it From Our Clients
                    </p>
                    <p className="font-bold md:text-[24px] text-lg">
                        They Started. They Built. They Spoke
                    </p>
                </div>
                {/* Typography End */}
                {/* Cards Testimonies */}
                <div className="flex md:flex-row flex-col justify-center space-x-2 pt-15">
                    {testimonies.map((data : ITestimonies) => (
                        <CardTestimonies key={data.id} testimonyText={data.client_testimonies} name={data.client_name} position={data.client_position}/>                        
                    ))};
                </div>
                {/* Card Testimonies */}
            </div>
            {/* Testimonies End */}
        </>
    )
}