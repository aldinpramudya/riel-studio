import { BsPersonCircle } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";

interface CardTestimoniesProps {
    // PICTURES OTW
    testimonyText: string;
    name: string;
    position: string;
}

export default function CardTestimonies(
    {
        testimonyText,
        name,
        position,
    }: CardTestimoniesProps
) {
    return (
        <div className="px-10 py-10 shadow-xl w-[320px]">
            <BsPersonCircle size={40} />
            {/* Testimonies */}
            <div className="pt-3">
                <ImQuotesRight size={40} color="#FF4F04" />
                <p className="font-bold">
                    {testimonyText}
                </p>
            </div>
            {/* Testimonies End */}
            {/* Name */}
            <div className="flex items-center space-x-1.5 pt-10">
                <div className="bg-(--main-color) w-1 h-12" />
                <div>
                    <p className=" font-bold">
                        {name}
                    </p>
                    <p>
                        {position}
                    </p>
                </div>
            </div>
            {/* Name */}

        </div>
    );
};