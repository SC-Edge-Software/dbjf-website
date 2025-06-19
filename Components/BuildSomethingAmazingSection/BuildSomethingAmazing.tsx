import H2 from "../H2/H2";
import Section from "../Section/Section";
import ThreeImageDisplay from "../ThreeImageDisplay/ThreeImageDisplay";

type BuildSomethingAmazingProps = {
    className?: string
}

export default function BuildSomethingAmazing({ className }: BuildSomethingAmazingProps) {
    return (
        <Section className={`${className ?? ""} !pt-10`} >
            <H2>Let&apos;s Build Something Amazing Together!</H2>
            <p className="mt-10">
                Whether you have a clear vision or need expert guidance, DB &amp; JF Home Improvements is ready to make your dream project a reality. Explore our services and see why homeowners and businesses trust us for their construction needs.
            </p>
            <br />
            <p>
                Have questions or ready to start your project? <a className="underline hover:text-dbjf-blue serif-link" href="/contact">Contact us</a> for a consultation, and let&rsquo;s bring your vision to life!
            </p>

            <ThreeImageDisplay
                className="mt-10"
                images={[
                    { src: "/images/mudroom.jpg", alt: "Mudroom" },
                    { src: "/images/home_office.jpg", alt: "Home Office" },
                    { src: "/images/modern_living_room_2.jpg", alt: "Modern Living Room" }]} />
        </Section>
    );
}
