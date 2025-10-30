import CardPortfolio from "@/components/cardPortfolio";

export default function CardPortfolioList() {
    return (
        <>
            {/* Portfolio Done */}
            <div className="flex justify-center pt-15 md:gap-10 gap-10 flex-wrap ">
                <CardPortfolio portfolioTitle="Project Title" portfolioLiveDemoLink="https://github.com/aldinpramudya" portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, velit vitae faucibus ornare, eros sapien venenatis magna." />
                <CardPortfolio portfolioTitle="Project Title" portfolioLiveDemoLink="https://github.com/aldinpramudya" portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, velit vitae faucibus ornare, eros sapien venenatis magna." />
                <CardPortfolio portfolioTitle="Project Title" portfolioLiveDemoLink="https://github.com/aldinpramudya" portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, velit vitae faucibus ornare, eros sapien venenatis magna." />
                <CardPortfolio portfolioTitle="Project Title" portfolioLiveDemoLink="https://github.com/aldinpramudya" portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, velit vitae faucibus ornare, eros sapien venenatis magna." />
                <CardPortfolio portfolioTitle="Project Title" portfolioLiveDemoLink="https://github.com/aldinpramudya" portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, velit vitae faucibus ornare, eros sapien venenatis magna." />
                <CardPortfolio portfolioTitle="Project Title" portfolioLiveDemoLink="https://github.com/aldinpramudya" portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, velit vitae faucibus ornare, eros sapien venenatis magna." />
            </div>
            {/* Portfolio Done End */}
        </>
    )
}