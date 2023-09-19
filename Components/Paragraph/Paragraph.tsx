type ParagraphProps = {
    className?: string
    children?: React.ReactNode
}

export default function Paragraph({ className, children }: ParagraphProps) {
    return (
        <p className={`
            ${className ?? ""}
            text-white
        `}>
            {children}
        </p>
    );
}
