import Image from "next/image";

interface TripleImageDisplayProps {
    images: { src: string; alt: string, className?: string }[];
    className?: string;
}

export default function TripleImageDisplay({ images, className }: TripleImageDisplayProps) {
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
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className={`${image.className ?? ""} object-cover`}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                </div>
            ))}
        </div>
    );
}
