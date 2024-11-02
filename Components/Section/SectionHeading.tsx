type SectionHeadingProps = {
    children?: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="
            text-white
            text-2xl
            font-bold
            mb-2">
            {children}
        </h2>
    );
}
