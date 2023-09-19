import HexagonBackground from "@/Components/HexagonBackground/HexagonBackground";

export default function Home() {
    return (
        <main>
            <section>
                <HexagonBackground>
                    <h1 className="
                        text-white
                        text-4xl
                        md:text-5xl
                        lg:text-6xl
                        text-center
                        font-bold
                        mx-8
                    ">
                        DB & JF Home Improvements LLC
                    </h1>
                </HexagonBackground>
            </section>

            <section>
                <h2>Transform Your Space</h2>
                <p>
                    DB & JF Home Improvements is your go-to company for all construction and home improvement needs. Let us help you transform your space; we offer expert construction and remodeling services to aid in bringing your vision to life!
                </p>
            </section>

            <section>
                <h2>Enhance Your Property Value</h2>
                <p>
                    With DB & JF, you can enhance the value of your property through our professional construction and home improvements services. Increase the appeal and functionality of your space!
                </p>
            </section>

            <section>
                <h2>Personalized Solutions For Your Needs</h2>
                <p>
                    DB & JF provides personalized solutions tailored to your specific needs. Whether it&apos;s a small renovation or a complete home makeover, we&apos;re committed to delivering exceptional results.
                </p>
            </section>
        </main>
    );
}
