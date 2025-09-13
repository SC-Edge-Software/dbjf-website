type SectionProps = {
    children?: React.ReactNode
    className?: string
}

export default function Section({ className, children }: SectionProps) {
    return (
        <section className={`
            ${className ?? ""}
            w-full
            px-6
            sm:px-10
            py-10
            md:px-16
            lg:px-24
            xl:px-52`}>
            {children}
        </section>
    );
}
