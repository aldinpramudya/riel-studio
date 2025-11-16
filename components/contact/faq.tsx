// Accordion Shadcn
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { frequentlyAskedQuestionData } from "@/constants";

export default function Faq() {
    return (
        <>
            {/* FAQ */}
            <div className="text-center pt-20">
                <p className="capitalize font-bold md:text-[64px] text-[35px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                    Frequently Asked Question
                </p>
                {/* Accordion */}
                <div className="md:px-40 pt-10">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        {frequentlyAskedQuestionData.map((data) => (
                            <AccordionItem key={data.itemValue} value={data.itemValue}>
                                <AccordionTrigger className="md:text-[20px] font-bold">{data.question}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 md:text-[16px] text-start px-5">
                                    <p>
                                        {data.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                {/* Accordion */}
            </div>
            {/* FAQ */}
        </>
    )
}