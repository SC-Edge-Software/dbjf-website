type SectionProps = {
    children?: React.ReactNode
    className?: string
}

export default function Section({ className, children }: SectionProps) {
    return (
        <section className={`
            ${className ?? ""}
            w-full
            px-10
            py-5
            sm:px-20
            md:px-24
            lg:px-32
            xl:px-80
        `}>
            {children}
        </section>
    );
}
