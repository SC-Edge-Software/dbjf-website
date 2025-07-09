import BuildSomethingAmazing from "@/Components/BuildSomethingAmazingSection/BuildSomethingAmazing";
import H2 from "@/Components/H2/H2";
import Section from "@/Components/Section/Section";
import ThreeImageDisplay from "@/Components/ThreeImageDisplay/ThreeImageDisplay";

export default function About() {
    return (
        <>
            {/* Building Trust Through Craftsmanship */}
            <Section className="bg-dbjf-dark-gray">
                <H2>Building Trust Through Craftsmanship</H2>
                <p>
                    At <strong>DB &amp; JF Home Improvements, LLC</strong>, we&apos;re more than just contractors — we’re partners in building the spaces where life happens. Our journey began with a shared commitment to quality construction, honest communication, and meaningful relationships with our clients. Over the years, we’ve built a reputation for reliability, creativity, and results that speak for themselves.
                </p>

                <ThreeImageDisplay 
                    className="mt-10"
                    images={[
                        { src: "/images/roof_work.jpg", alt: "Worker On Roof" },
                        { src: "/images/worker_precision.jpg", alt: "Worker Making Precise Cut" },
                        { src: "/images/worker_router.jpg", alt: "Worker Using Router" }]} />
            </Section>

            {/* Our Mission */}
            <Section>
                <H2>Our Mission</H2>
                <p>
                    We believe that every home and business deserves to be functional, beautiful, and built to last. Our mission is simple: <strong>Deliver exceptional workmanship and a seamless customer experience — every time.</strong>
                </p>
            </Section>

            {/* What Sets Us Apart */}
            <Section className="bg-dbjf-dark-gray">
                <H2>What Sets Us Apart</H2>
                <ul className="space-y-4">
                    <li>
                        <strong>Experienced Craftsmanship:</strong> With years of hands-on experience across all facets of residential and commercial construction, we know how to bring your vision to life — down to the last detail.
                    </li>
                    <li>
                        <strong>Full-Service Expertise:</strong> From remodeling kitchens and bathrooms to roofing, siding, and structural additions, our team handles projects of every size with care and precision.
                    </li>
                    <li>
                        <strong>Client-First Approach:</strong> We listen, plan, and build with your goals in mind. Your satisfaction drives every decision we make.
                    </li>
                    <li>
                        <strong>Professional Integrity:</strong> Transparency, punctuality, and professionalism aren&apos;t just promises — they&apos;re our standard operating procedure.
                    </li>
                </ul>

                <ThreeImageDisplay 
                    className="mt-10"
                    images={[
                        { src: "/images/modern_living_room_3.jpg", alt: "Modern Living Room" },
                        { src: "/images/modern_kitchen_2.jpg", alt: "Modern Kitchen" },
                        { src: "/images/home_exterior.jpg", alt: "Home Exterior" }]} />
            </Section>

            {/* A Team You Can Rely On */}
            <Section>
                <H2>A Team You Can Rely On</H2>
                <p>
                    Our team is made up of skilled professionals who take pride in their work. We collaborate closely with homeowners, architects, designers, and subcontractors to ensure each project is smooth, efficient, and built to the highest standards.
                </p>
            </Section>

            <BuildSomethingAmazing className="bg-dbjf-dark-gray" />
        </>
    );
}
