type AITD_textProps = {
    text: string
    title?: string
}

export default function AITD_text({ text, title }: AITD_textProps) {
    const textClass = "text-white text-md lg:text-lg 2xl:text-xl";
    const titleElement = title === null 
        ? null 
        : <strong className={textClass}>{title}</strong>;

    return (
        <p className={textClass}>
            {titleElement} {text}
        </p>
    );
}
