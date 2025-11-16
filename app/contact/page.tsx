import Title from "@/components/contact/title";
import FormContact from "@/components/contact/formContacts";
import Faq from "@/components/contact/faq";
import Cta from "@/components/cta";


export default function Contact() {
    return (
        <>
            <div className="md:px-30 px-10">
                <Title />
                <FormContact />
                <Faq />
                <Cta title="ready to kickstart yours ?" subTitle=" Now it&apos;s your turn to bring yours to life !" />
            </div>
        </>
    )
}