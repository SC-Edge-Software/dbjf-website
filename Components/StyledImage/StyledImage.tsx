import Image from "next/image";

type StyledImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    className?: string;
};

export default function StyledImage(props: StyledImageProps) {
    return (
        <Image 
            className={`
                ${props.className ?? ""}
                rounded-lg 
                shadow-lg`}
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            fill={props.fill ?? false}
            sizes={props.sizes ?? ""} />
    );
}
