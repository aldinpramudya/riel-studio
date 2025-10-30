import Title from "@/components/portfolio/title";
import CardPortfolioList from "@/components/portfolio/cardPortfolioList";
import Testimonies from "@/components/portfolio/testimonies";
import Cta from "@/components/portfolio/cta";

export default function Portfolio() {
    return (
        <>
            {/* Container */}
            <div className="md:px-50 px-10">
                <Title />
                <CardPortfolioList/>
                <Testimonies />
                <Cta/>
            </div>
            {/* Container End */}
        </>
    )
}