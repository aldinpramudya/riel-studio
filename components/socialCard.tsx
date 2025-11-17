interface SocialCardProps {
    title: string;
    description: string;
    contact: string;
    link: string;
    icon: React.ReactNode;
    bgColor: string;
    hoverColor: string;
}

// Reusable Social Card Component
export default function SocialCard({ title, description, contact, link, icon, bgColor, hoverColor }: SocialCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgColor} ${hoverColor} rounded-xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group`}
        >
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <div className="text-white text-3xl sm:text-4xl">
                        {icon}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">
                        {title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base mb-3">
                        {description}
                    </p>
                    <p className="text-white font-semibold text-base sm:text-lg">
                        {contact}
                    </p>
                </div>
            </div>
        </a>
    );
}