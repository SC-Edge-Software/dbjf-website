import Image from "next/image";
import logo from "../../public/images/logo_no_caption.svg";

type LogoProps = {
    size: number
}

export default function Logo({ size }: LogoProps) {
    return (
        <Image 
            src={logo}
            alt="DB & JF Home Improvements LLC Logo"
            width={size}
            height={size}
            className="duration-standard"/>
    );
}
