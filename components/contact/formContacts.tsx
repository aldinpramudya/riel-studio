import Form from "@/components/form";
import ContactDetail from "@/components/contactDetail";

import { contactsData } from "@/constants";

export default function FormContact() {
    return (
        <>
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
        </>
    )
}