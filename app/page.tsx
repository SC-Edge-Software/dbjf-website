import HexagonBackground from "@/Components/HexagonBackground/HexagonBackground";
import Section from "@/Components/Section/Section";
import Image from "next/image";

export default function Home() {
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
            </HexagonBackground>

            <Section>
                <h2>Welcome to DB & JF Home Improvements</h2>
                <p className="mb-1"><i>Where Vision Becomes Reality</i></p>
                <Image 
                    src="/images/interior_1.png" 
                    alt="Interior Photo" 
                    width={800}
                    height={400}
                    className="my-5" />
                <p>
                    At <strong>DB & JF Home Improvements</strong>, we believe that every home and business deserves expert craftsmanship, honest service, and high-quality results. Whether you&rsquo;re looking to renovate, expand, or enhance your property, our skilled professionals are here to bring your vision to life.
                </p>
            </Section>

            <Section className="bg-dbjf-dark-gray">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li><strong>Expertise You Can Trust</strong> &ndash; With years of experience in the industry, our team is dedicated to delivering exceptional workmanship on every project.</li>
                    <li><strong>Comprehensive Services</strong> &ndash; From home additions and remodeling to roofing, siding, and interior renovations, we handle all aspects of construction and improvement.</li>
                    <li><strong>Personalized Approach</strong> &ndash; We work closely with our clients to ensure each project is tailored to their specific needs, style, and budget.</li>
                    <li><strong>Reliability &amp; Integrity</strong> &ndash; Built on a foundation of trust, professionalism, and hard work, we strive to exceed expectations in every detail.</li>
                </ul>
            </Section>

            <Section>
                <h2>Our Services</h2>
                <ul>
                    <li><strong>Home Renovations &amp; Additions</strong> &ndash; Upgrade your living space with custom remodeling and seamless expansions.</li>
                    <li><strong>Exterior Improvements</strong> &ndash; From roofing and siding to decks and fencing, we enhance curb appeal and durability.</li>
                    <li><strong>Interior Transformations</strong> &ndash; Kitchen and bathroom remodels, basement makeovers, flooring, and more.</li>
                    <li><strong>General Contracting</strong> &ndash; Electrical, plumbing, framing, drywall, and comprehensive construction solutions.</li>
                </ul>
            </Section>

            <Section className="bg-dbjf-dark-gray">
                <h2>Let&rsquo;s Build Something Amazing Together!</h2>
                <p>
                    Whether you have a clear vision or need expert guidance, DB &amp; JF Home Improvements is ready to make your dream project a reality. Explore our services and see why homeowners and businesses trust us for their construction needs.
                </p>
                <p>
                    <strong>Get in Touch Today!</strong> Have questions or ready to start your project? <a href="#">Contact us</a> for a consultation, and let&rsquo;s bring your vision to life!
                </p>
            </Section>
        </main>
    );
}
