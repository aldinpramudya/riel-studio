"use client"

// Use Effect, Use State
import { useEffect, useState } from "react";

// Components Card Testimonies
import CardPortfolio from "@/components/cardPortfolio";

// Data Types Portfolios
import type { IPortfolios } from "@/types/portfolios";
import { supabase } from "@/lib/db";

export default function CardPortfolioList() {
    const [portfolios, setPortfolios] = useState<IPortfolios[]>([]);

    useEffect(() => {
        const fetchPortfolios = async () => {
            const { data, error } = await supabase.from('portfolios').select('*');
            if (error) {
                console.log('Error Fetch Data: ', error);
            } else {
                setPortfolios(data);
            }
        };

        fetchPortfolios();

    }, [supabase])

    return (
        <>
            {/* Portfolio Done */}
            <div className="flex flex-wrap justify-center gap-10 pt-15 px-4 max-w-7xl mx-auto">
                {portfolios.map((data) => (
                    <div key={data.id} className="w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.667rem)]">
                        <CardPortfolio
                            portfolioImage={data.image}
                            portfolioTitle={data.title}
                            portfolioLiveDemoLink={data.live_link}
                            portfolioDescription={data.description}
                        />
                    </div>
                ))}
            </div>
            {/* Portfolio Done End */}
        </>
    )
}