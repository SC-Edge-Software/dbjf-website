import StyledImage from "../StyledImage/StyledImage";

type ThreeImageDisplay = {
    images: { src: string; alt: string }[];
    className?: string;
}

export default function ThreeImageDisplay({ images, className }: ThreeImageDisplay) {
    if (images.length !== 3) {
        console.error("TripleImageDisplay expects exactly 3 images.");
        return null;
    }

    return (
        <div className={`
            ${className ?? ""} 
            flex 
            flex-col
            md:flex-row
            h-[600px] 
            md:h-[400px] 
            w-full 
            gap-4`}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className="
                        relative 
                        flex-1 
                        basis-[32%] 
                        h-full 
                        overflow-hidden 
                        rounded-md">
                    <StyledImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
            ))}
        </div>
    );
}
