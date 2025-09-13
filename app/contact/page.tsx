import ContactForm from "@/Components/ContactForm/ContactForm";
import ContactInfo from "@/Components/ContactInfo/ContactInfo";
import H2 from "@/Components/H2/H2";
import Section from "@/Components/Section/Section";

export default function Contact() {
    return (
        <>
            <Section className="bg-dbjf-gray">
                <H2>Contact Us</H2>

                <div className={`
                    w-full 
                    flex 
                    flex-col 
                    xl:flex-row 
                    justify-between 
                    xl:justify-center 
                    items-center 
                    xl:items-start`}>
                    <ContactForm />
                    <ContactInfo className="mt-6 xl:mt-0 xl:ml-10" />
                </div>
            </Section>            
        </>
    );
}
