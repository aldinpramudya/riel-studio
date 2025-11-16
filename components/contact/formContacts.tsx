import Form from "@/components/form";
import ContactDetail from "@/components/contactDetail";

import { contactsData } from "@/constants";

export default function FormContact() {
    return (
        <>
            {/* Form and Contact Details */}
            <div className="flex md:flex-row flex-col flex-wrap pt-15 justify-evenly">
                <Form />
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