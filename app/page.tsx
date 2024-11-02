import HexagonBackground from "@/Components/HexagonBackground/HexagonBackground";
import Section from "@/Components/Section/Section";
import SectionHeading from "@/Components/Section/SectionHeading";
import Paragraph from "@/Components/Paragraph/Paragraph";

export default function Home() {
    return (
        <main>
            <HexagonBackground>
                <h1 className="
                    text-white
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
                <SectionHeading>Transform Your Space</SectionHeading>
                <Paragraph>
                    DB & JF Home Improvements is your go-to company for all construction and home improvement needs. Let us help you transform your space; we offer expert construction and remodeling services to aid in bringing your vision to life!
                </Paragraph>
            </Section>

            <Section className="
                bg-dbjf-dark-gray">
                <SectionHeading>Enhance Your Property Value</SectionHeading>
                <Paragraph>
                    With DB & JF, you can enhance the value of your property through our professional construction and home improvements services. Increase the appeal and functionality of your space!
                </Paragraph>
            </Section>

            <Section>
                <SectionHeading>Personalized Solutions For Your Needs</SectionHeading>
                <Paragraph>
                    DB & JF provides personalized solutions tailored to your specific needs. Whether it&apos;s a small renovation or a complete home makeover, we&apos;re committed to delivering exceptional results.
                </Paragraph>
            </Section>
        </main>
    );
}
