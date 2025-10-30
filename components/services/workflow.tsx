import { workflowData } from "@/constants";

import CardPointRounded from "@/components/cardPointRounded";

export default function Workflow() {
    return (
        <>
            {/* Our Workflow */}
            <div className="pt-30">
                {/* Title */}
                <div className="text-center">
                    <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        RIEL.studio Workflows
                    </p>
                    <p className="text-[24px] font-bold">
                        A clear process to turn ideas to realities.
                    </p>
                </div>
                {/* Title */}
            </div>
            {/* Points */}
            <div className="flex justify-evenly pt-10">
                {workflowData.map((data) => (
                    <CardPointRounded key={data.id} cardTitle={data.cardTitle} cardContent={data.cardContent} icon={data.icon} cardTitleClassName="text-[24px]" iconClassName="text-[30px] text-white" />
                ))}
            </div>
            {/* Points */}
            {/* Our Workflow End */}
        </>
    )
}