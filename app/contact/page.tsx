// Components
import Form from "@/components/form";
import ContactDetail from "@/components/contactDetail";
import Button from "@/components/button";

// Constants Data
import { contactsData, frequentlyAskedQuestionData } from "@/constants/index";

// Icons
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

// Accordion Shadcn
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Contact() {
    return (
        <>
            <div className="px-50">
                {/* Title */}
                <div className="text-center">
                    {/* Title */}
                    <h1 className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        RIEL.studio contact
                    </h1>
                    <p className="text-[24px] font-bold">
                        Your idea deserves to be heard. Kickstart your idea today.
                    </p>
                    {/* Title End*/}
                </div>
                {/* Form and Contact Details */}
                <div className="flex flex-row flex-wrap pt-15 pr-35 justify-center space-x-20">
                    <Form />
                    {/* Links */}
                    <div>
                        <p className="text-[25px] font-bold text-(--main-color)">
                            Reach RIEL.studio Here
                        </p>
                        {/* Links Contacts */}
                        <div className="space-y-6 pt-5">
                            {contactsData.map((data) => (
                                <ContactDetail key={data.id} name={data.name} detail={data.detail} icon={data.icon} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Form And Contact Details End */}
                {/* FAQ */}
                <div className="text-center pt-20">
                    <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                        Frequently Asked Question
                    </p>
                    {/* Accordion */}
                    <div className="px-40 pt-10">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                        >
                            {frequentlyAskedQuestionData.map((data) => (
                                <AccordionItem key={data.itemValue} value={data.itemValue}>
                                    <AccordionTrigger className="text-[20px] font-bold">{data.question}</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-[16px] text-start px-5">
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
                {/* CTA */}
                <div className="pt-20">
                    {/* Typography */}
                    <div className="text-center">
                        <p className="capitalize font-bold text-[64px] tracking-tight bg-linear-to-r from-[#FF4F04] via-[#FFA743] to-[#F68554] bg-clip-text text-transparent">
                            kickstart it now !
                        </p>
                        <p className="font-bold text-[24px]">
                            Let RIEL.studio know your idea and start your journey now !
                        </p>
                    </div>
                    {/* Typography End */}
                    {/* Button */}
                    <div className="flex justify-center space-x-5 pt-10">
                        <Button label="Kickstart Now" icon={<IoCall />} variant="primary" />
                        <Button label="See What RIEL.studio Built" icon={<FaArrowRight />} variant="secondary" />
                    </div>
                    {/* Button End */}
                </div>
                {/* CTA End */}
            </div>
        </>
    )
}