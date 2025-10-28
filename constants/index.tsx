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
            "~ 7-9 days work",
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
            "1-2 weeks works",
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
    { id: 1, cardTitle: "Understanding Your Vision", icon: <PiBrain />, cardContent: "We take time to learn what you need, what you dream of, and what success means for you." },
    { id: 2, cardTitle: "Designing Your Experience", icon: <FaPaintBrush />, cardContent: "Ideas start to take shape through clear structure, intuitive flow, and a design that reflects your identity." },
    { id: 3, cardTitle: "Developing With Purposes", icon: <TiCode />, cardContent: "We turn design into a fully functional website — fast, responsive, and built to last." },
    { id: 4, cardTitle: "Long-Term Maintenance", icon: <IoRocket />, cardContent: "Because great ideas don't stop at launch. We ensure everything runs perfectly long after going live." }
];

export const contactsData = [
    { id: 1, name: "Email", detail: "rielelesia@gmail.com", icon: <MdOutlineEmail /> },
    { id: 2, name: "Phone", detail: "+62 85954352919", icon: <IoCallOutline /> },
    { id: 3, name: "Instagram", detail: "@riel.studio_", icon: <FaInstagram /> },
    { id: 4, name: "Availability", detail: "Daily 09 AM - 05 PM", icon: <FaRegClock /> },

];

export const frequentlyAskedQuestionData = [
    {
        itemValue: "item-1",
        question: "How long does it take to complete a project?",
        answer: "For a landing page, usually takes around 1 - 2 week and for the UI/UX model takes around a weeks. While for a bigger project may takes time more depends on the project's scale"
    },
    {
        itemValue: "item-2",
        question: "I only have an idea — can you help me build it from scratch?",
        answer: "Absolutely!, RIEL.studio is here to help you to kickstart your ideas and turn them into a real, impactful, and functional project"
    },
    {
        itemValue: "item-3",
        question: "Do you offer post-launch support or maintenance?",
        answer: "Yes, we offer maintenance plans to ensure your websites and projects stays fast, secure and up-to-date"
    },
    {
        itemValue : "item-4",
        question : "My projects or idea seems not on one of your Services package, can i still work with you ?",
        answer : "Absolutely! Don't worry — even if your idea isn't listed in our packages, you can still collaborate with RIEL.studio.We're always open to explore new ideas and will do our best to help bring your project to life."
    }
]

