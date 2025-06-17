import BuildSomethingAmazing from "@/Components/BuildSomethingAmazingSection/BuildSomethingAmazing";
import H2 from "@/Components/H2/H2";
import HexagonBackground from "@/Components/HexagonBackground/HexagonBackground";
import Section from "@/Components/Section/Section";
import StyledImage from "@/Components/StyledImage/StyledImage";
import ThreeImageDisplay from "@/Components/ThreeImageDisplay/ThreeImageDisplay";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
    const imageWidth = 800;
    const imageHeight = 400;
    const headerLinkClass = `
        border-2 
        border-white 
        hover:border-dbjf-blue
        hover:text-dbjf-blue
        duration-200
        rounded-md
        bg-black/50 
        px-5 
        md:py-2 
        mb-4
        md:mb-0 
        md:text-xl`;
    const expertiseReasonContainerClass = `
        grid 
        grid-cols-1 
        lg:grid-cols-2 
        items-center
        gap-4
        lg:gap-8`;
    const expertiseReasonClass = `
        text-white 
        text-md
        lg:text-lg
        2xl:text-xl`;
    const arrowRight = <FaArrowRightLong className="inline ml-1 mb-[2px]" />;

    return (
        <main>
            <HexagonBackground>
                <h1 className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    text-center
                    font-bold
                    mx-8">
                    DB & JF Home Improvements, LLC
                </h1>
                <div className="mt-20 flex flex-col md:flex-row justify-between md:w-[500px]">
                    <a className={headerLinkClass} href="/services">
                        See Our Services {arrowRight}
                    </a>
                    <a className={headerLinkClass} href="/contact">
                        Contact Us Today! {arrowRight}
                    </a>
                </div>
            </HexagonBackground>

            {/* Splash Image */}
            <Section className="flex flex-col justify-between !pt-0">
                <div className="
                    relative 
                    w-screen 
                    h-[300px] 
                    sm:h-[400px]
                    md:h-[450px]
                    lg:h-[550px]
                    left-1/2 
                    right-1/2 
                    -ml-[50vw] 
                    -mr-[50vw] 
                    mb-10">
                    <Image
                        src="/images/interior_1.jpeg"
                        alt="Interior Photo"
                        fill
                        className="object-cover z-0"
                        priority
                    />
                    <div className="
                        w-full
                        h-full
                        lg:pl-10
                        relative
                        flex
                        items-center
                        bg-black/50">
                        <h1 className="
                            text-white
                            text-[2em]
                            sm:text-[2.5em]
                            lg:text-[3em]
                            xl:text-[3.5em]
                            leading-[1em]
                            z-10
                            w-[70%]
                            pl-10">
                            A contractor you can trust.
                        </h1>
                    </div>
                </div>

                <p>
                    At <strong>DB & JF Home Improvements</strong>, we believe that every home and business deserves expert craftsmanship, honest service, and high-quality results. Whether you&rsquo;re looking to renovate, expand, or enhance your property, our skilled professionals are here to bring your vision to life.
                </p>
                <ThreeImageDisplay
                    className="mt-10"
                    images={[
                        {src: "/images/modern_kitchen.jpg", alt: "Modern Kitchen"},
                        {src: "/images/modern_bathroom.jpg", alt: "Modern Bathroom"},
                        {src: "/images/modern_living_room.jpg", alt: "Modern Living Room"}]} />
            </Section>

            {/* Why Choose Us? */}
            <Section className="bg-dbjf-dark-gray space-y-10 2xl:!px-[350px]">
                <H2>Why Choose Us?</H2>

                <div className={expertiseReasonContainerClass}>
                    <div className="order-1 lg:order-1">
                        <p className={expertiseReasonClass}>
                            <strong className={expertiseReasonClass}>Expertise You Can Trust:</strong> With years of experience in the industry, our team is dedicated to delivering exceptional workmanship on every project.
                        </p>
                    </div>
                    <div className="order-2 lg:order-2">
                        <StyledImage
                            src="/images/working_2.jpg"
                            alt="Interior Photo"
                            width={imageWidth}
                            height={imageHeight}
                        />
                    </div>
                </div>

                <div className={expertiseReasonContainerClass}>
                    <div className="order-1 lg:order-2">
                        <p className={expertiseReasonClass}>
                            <strong className={expertiseReasonClass}>Comprehensive Services:&nbsp;</strong> 
                            From home additions and remodeling to roofing, siding, and interior renovations, we handle all aspects of construction and improvement.&nbsp;
                        </p>
                        <a 
                            href="/services"
                            className={`
                                ${expertiseReasonClass}
                                hover:text-dbjf-blue
                                underline
                                serif-link
                            `}>
                            See our services.
                        </a>
                    </div>
                    <div className="order-2 lg:order-1">
                        <StyledImage
                            src="/images/architect.jpeg"
                            alt="Interior Photo"
                            width={imageWidth}
                            height={imageHeight}
                        />
                    </div>
                </div>

                <div className={expertiseReasonContainerClass}>
                    <div className="order-1 lg:order-1">
                        <p className={expertiseReasonClass}>
                            <strong className={expertiseReasonClass}>Personalized Approach:</strong> We work closely with our clients to ensure each project is tailored to their specific needs, style, and budget. 
                        </p>
                    </div>
                    <div className="order-2 lg:order-2">
                        <StyledImage
                            src="/images/contractor_homeowner.jpg"
                            alt="Interior Photo"
                            width={imageWidth}
                            height={imageHeight} />
                    </div>
                </div>

                <div className={expertiseReasonContainerClass}>
                    <div className="order-1 lg:order-2">
                        <p className={expertiseReasonClass}>
                            <strong className={expertiseReasonClass}>Reliability &amp; Integrity:</strong> Built on a foundation of trust, professionalism, and hard work, we strive to exceed expectations in every detail.
                        </p>
                    </div>
                    <div className="order-2 lg:order-1">
                        <StyledImage
                            src="/images/handshake.jpg"
                            alt="Interior Photo"
                            width={imageWidth}
                            height={imageHeight} />
                    </div>
                </div>
            </Section>

            {/* Let's Build Something Amazing Together */}
            <BuildSomethingAmazing />
        </main>
    );
}
