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
            md:px-16
            xl:px-32`}>
            {children}
        </section>
    );
}
