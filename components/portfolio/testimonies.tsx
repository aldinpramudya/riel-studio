import CardTestimonies from "@/components/cardTestimonies";

export default function Testimonies() {
    return (
        <>
            {/* Testimonies */}
            <div className="pt-15">
                {/* Typography */}
                <div className="text-center">
                    <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        Hear it From Our Clients
                    </p>
                    <p className="font-bold text-[24px]">
                        They Started. They Built. They Spoke
                    </p>
                </div>
                {/* Typography End */}
                {/* Cards Testimonies */}
                <div className="flex justify-center space-x-2 pt-15">
                    <CardTestimonies testimonyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a mauris neque. Sed id dolor sed velit maximus tincidunt a at est. Vestibulum semper nisl ac suscipit consectetur" name="Riel" position="Student At Lala Land" />
                    <CardTestimonies testimonyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a mauris neque. Sed id dolor sed velit maximus tincidunt a at est. Vestibulum semper nisl ac suscipit consectetur" name="Riel" position="Student At Lala Land" />
                </div>
                {/* Card Testimonies */}
            </div>
            {/* Testimonies End */}
        </>
    )
}