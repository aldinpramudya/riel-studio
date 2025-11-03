import Title from "@/components/portfolio/title";
import CardPortfolioList from "@/components/portfolio/cardPortfolioList";
import Testimonies from "@/components/portfolio/testimonies";
import Cta from "@/components/cta";

export default function Portfolio() {
    return (
        <>
            {/* Container */}
            <div className="md:px-30 px-10">
                <Title />
                <CardPortfolioList />
                <Testimonies />
                <Cta title="ready to kickstart yours ?" subTitle=" Now it&apos;s your turn to bring yours to life !" />
            </div>
            {/* Container End */}
        </>
    )
}