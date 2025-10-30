import Title from "@/components/portfolio/title";
import FormContact from "@/components/contact/formContacts";
import Faq from "@/components/contact/faq";
import Cta from "@/components/contact/cta";


export default function Contact() {
    return (
        <>
            <div className="px-50">
                <Title />
                <FormContact />
                <Faq />
                <Cta />
            </div>
        </>
    )
}