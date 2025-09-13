type ImageTextBundle = {
    text: React.ReactNode
    image: React.ReactNode
}

type AlternatingImageTextDisplayProps = {
    items: ImageTextBundle[]
}

export default function AlternatingImageTextDisplay({ items }: AlternatingImageTextDisplayProps) {
    return (
        <div className="space-y-10">
            {items.map((item, index) => {
                const isEven = index % 2 === 0;
                const textOrderClass = isEven ? "order-1 lg:order-1" : "order-1 lg:order-2";
                const imageOrderClass = isEven ? "order-2 lg:order-2" : "order-2 lg:order-1";

                return (
                    <div key={`alternating-image-text-display-${index}`} 
                        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8">
                        <div className={textOrderClass}>
                            {item.text}
                        </div>
                        <div className={imageOrderClass}>
                            {item.image}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
