import { FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import ContactDetail from "@/components/contactDetail";
import SocialCard from "@/components/socialCard";

import { contactsData } from "@/constants";

export default function FormContact() {
    return (
        <>
            {/* Form and Contact Details */}
            <div className="flex md:flex-row flex-col space-x-10 justify-center pt-15">
                <div className="grid space-y-2">
                    {/* WhatsApp Card */}
                    <SocialCard
                        title="WhatsApp"
                        description="Tell me your idea directly to me !"
                        contact="+62 859-5435-2919"
                        link="https://wa.me/6285954352919/?text=Hai%20Kak%20Riel%20%21%20Saya%20tertarik%20untuk%20membicarakan%20tentang%20ide%20untuk%20website%20saya%20%21"
                        icon={<FaWhatsapp />}
                        bgColor="bg-[#25D366]"
                        hoverColor="hover:bg-[#20BA5A]"
                    />

                    {/* Email Card */}
                    <SocialCard
                        title="Email"
                        description="Email me your plan !"
                        contact="rielelesia@gmail.com"
                        link="mailto:rielelesia@gmail.com" 
                        icon={<HiMail />}
                        bgColor="bg-[#EA4335]"
                        hoverColor="hover:bg-[#D33426]"
                    />
                </div>
                {/* Links */}
                <div>
                    <p className="text-[25px] font-bold text-(--main-color) md:pt-0 pt-5">
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
        </>
    )
}