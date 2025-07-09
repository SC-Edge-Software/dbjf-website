import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

type ContactInfoProps = {
    className?: string 
};

export default function ContactInfo({ className }: ContactInfoProps) {
    const sharedItemClass = "flex items-center text-white";
    const iconClass = "mr-4 text-dbjf-blue text-xl";
    const textClass = "text-sm";

    return (
        <div className={`
            ${className ?? ""}
            px-8 
            py-6
            bg-dbjf-dark-gray 
            w-full
            max-w-[450px]
            rounded-lg
            shadow-xl`}>
            <ul className="list-none p-0 m-0">
                <li className={`${sharedItemClass} mb-3`}>
                    <FaPhoneAlt className={iconClass} />
                    <span className={textClass}>(347) 553-2424</span>
                </li>
                <li className={`${sharedItemClass} mb-3`}>
                    <FaEnvelope className={iconClass} />
                    <span className={textClass}>db.jf.improvements@gmail.com</span>
                </li>
                <li className={sharedItemClass}>
                    <FaMapMarkerAlt className={iconClass} />
                    <span className={textClass}>65 M St, Haverhill, MA 01835</span>
                </li>
            </ul>
        </div>
    );
}
