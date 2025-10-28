import { IoIosBrush, IoMdPhotos } from "react-icons/io";
import { IoRocket, IoCallOutline } from "react-icons/io5"
import { TiCode } from "react-icons/ti";
import { FaGraduationCap, FaComment, FaNewspaper, FaPaintBrush } from "react-icons/fa";
import { FaCity } from "react-icons/fa6";
import { MdAppRegistration, MdGames, MdOutlineSpatialTracking } from "react-icons/md";
import { PiBrain } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"

export const servicesPackage = [
    {
        id: 1,
        packageName: "Vision Package",
        icon: <IoIosBrush size={32} />,
        description: "Perfect for crafting intuitive interfaces, elevating user experience, and transforming ideas into engaging digital products.",
        points: [
            "Premium UI/UX Design",
            "Comprehensive user & persona research",
            "Wireframing and prototyping for testing",
            "Presentation model or booklet design if needed",
        ],
        price: "Starting at IDR. 300.000,-",
    }, {
        id: 2,
        packageName: "Launcher Package",
        icon: <TiCode size={32} />,
        description: " Perfect for launching products, showcasing portfolio, promoting event, and introduce your brand.",
        points: [
            "1 Year Included Domain (.com)",
            "Security SSL Certificated (HTTPS)",
            "~7 days Works",
            "1 Page Premium Design",
            "Basic SEO",
            "Responsive Design Through Devices"
        ],
        price: "Starting at IDR. 650.000,-",
    },
];

export const pillBadgesData = [
    { id: 1, label: "E-Learning Websites", icon: <FaGraduationCap />, hexColor: "#150578" },
    { id: 2, label: "Company Profile Websites", icon: <FaCity />, hexColor: "#674ca1" },
    { id: 3, label: "Feedback or Review Web App", icon: <FaComment />, hexColor: "#71110c" },
    { id: 4, label: "Online Registration System", icon: <MdAppRegistration />, hexColor: "#ff56b2" },
    { id: 5, label: "Games Landing Page", icon: <MdGames />, hexColor: "#68b204" },
    { id: 6, label: "Project Tracking & Task Management Tool", icon: <MdOutlineSpatialTracking />, hexColor: "#ce2d98" },
    { id: 7, label: "Blog or Digital Magazine", icon: <FaNewspaper />, hexColor: "#bd35fc" },
    { id: 8, label: "Photography / Art Showcase Web", icon: <IoMdPhotos />, hexColor: "#575a57" },
];

export const workflowData = [
    {id : 1, cardTitle : "Understanding Your Vision",icon : <PiBrain/> , cardContent : "We take time to learn what you need, what you dream of, and what success means for you."},
    {id : 2, cardTitle : "Designing Your Experience",icon : <FaPaintBrush />,cardContent : "Ideas start to take shape through clear structure, intuitive flow, and a design that reflects your identity."},
    {id : 3, cardTitle : "Developing With Purposes",icon : <TiCode/>, cardContent : "We turn design into a fully functional website — fast, responsive, and built to last."},
    {id : 4, cardTitle : "Long-Term Maintenance",icon : <IoRocket/>, cardContent : "Because great ideas don't stop at launch. We ensure everything runs perfectly long after going live."}
];

export const contactsData = [
    {id : 1, name : "Email", detail : "rielelesia@gmail.com", icon : <MdOutlineEmail/>},
    {id : 2, name : "Phone", detail : "+62 85954352919", icon : <IoCallOutline/>},
    {id : 3, name : "Instagram", detail : "@riel.studio_", icon : <FaInstagram/> },
    {id : 4, name : "Availability", detail : "Daily 09 AM - 05 PM", icon : <FaRegClock/> },

]

