import AITD_text from "@/Components/AlternatingImageTextDisplay/AITD_text";
import AlternatingImageTextDisplay from "@/Components/AlternatingImageTextDisplay/AlternatingImageTextDisplay";
import BuildSomethingAmazing from "@/Components/BuildSomethingAmazingSection/BuildSomethingAmazing";
import H2 from "@/Components/H2/H2";
import Section from "@/Components/Section/Section";
import StyledImage from "@/Components/StyledImage/StyledImage";

export default function Services() {
    const imageWidth = 1200;
    const imageHeight = 0;

    return (
        <main>
            {/* Our Services */}
            <Section className="bg-dbjf-dark-gray 2xl:!px-[350px]">
                <H2 className="mb-16">Our Services</H2>

                <AlternatingImageTextDisplay
                    items={[
                        {
                            text: 
                                <AITD_text 
                                    title="Home Renovations & Additions:"
                                    text="Upgrade your living space with custom remodeling and seamless expansions." />,
                            image:
                                <StyledImage
                                    src="/images/modern_kitchen_3.jpg"
                                    alt="Modern Kitchen"
                                    width={imageWidth}
                                    height={imageHeight} />
                        },
                        {
                            text: 
                                <AITD_text 
                                    title="Exterior Improvements:"
                                    text="From roofing and siding to decks and fencing, we enhance curb appeal and durability." />,
                            image:
                                <StyledImage
                                    src="/images/home_exterior_2.jpg"
                                    alt="Home Exterior"
                                    width={imageWidth}
                                    height={imageHeight} />
                        },
                        {
                            text: 
                                <AITD_text 
                                    title="Interior Transformations:"
                                    text="Kitchen and bathroom remodels, basement makeovers, flooring, and more." />,
                            image:
                                <StyledImage
                                    src="/images/interior_2.jpg"
                                    alt="Home Interior"
                                    width={imageWidth}
                                    height={imageHeight} />
                        },
                        {
                            text: 
                                <AITD_text 
                                    title="General Contracting:"
                                    text="Electrical, plumbing, framing, drywall, and comprehensive construction solutions." />,
                            image:
                                <StyledImage
                                    src="/images/drywall_install.jpg"
                                    alt="Drywall Installation"
                                    width={imageWidth}
                                    height={imageHeight} />
                        },
                    ]} />
            </Section>

            <BuildSomethingAmazing />
        </main>
    );
}
