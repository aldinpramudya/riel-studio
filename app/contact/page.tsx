import Title from "@/components/portfolio/title";
import FormContact from "@/components/contact/formContacts";
import Faq from "@/components/contact/faq";
import Cta from "@/components/contact/cta";


export default function Contact() {
    return (
        <>
            <div className="md:px-50 px-10">
                <Title />
                <FormContact />
                <Faq />
                <Cta />
            </div>
        </>
    )
}