import Image from "next/image";
import logo from "../../public/images/logo.svg";

export default function UnderConstruction() {
    return (
        <div className="
            w-screen
            h-screen
            bg-[#2e3537ff]
            flex
            flex-col
            justify-start
            items-center
            text-white
            text-center
        ">
            <Image 
                src={logo}
                alt="DB & JF Logo"
                width={300}
                height={300} 
                className="
                    mt-10
                " />
            <h1 className="text-3xl mt-10 font-bold text-[#ff6700]">Under Construction</h1>
            <p className="text-3xl mt-2 text-[#ff6700]">Check back soon!</p>
        </div>
    );
}
