type H2Props = {
    children: React.ReactNode
    className?: string
}

export default function H2({ children, className }: H2Props) {
    return (
        <h2 className={`${className ?? ""} text-white text-4xl font-bold text-center mb-8`}>
            {children}
        </h2>
    );
}
