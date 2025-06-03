import React from "react";

type HexagonBackgroundType = {
    children?: React.ReactNode
}

export default function HexagonBackground({ children }: HexagonBackgroundType) {
    return (
        <section className={`
            w-full
            h-96
            gradient-animation`}>
            <div className="
                w-full
                h-full
                bg-hexagons
                bg-no-repeat
                bg-cover">
                <div className="
                    w-full
                    h-full
                    bg-black
                    bg-opacity-40
                    flex
                    flex-col
                    justify-center
                    items-center">
                    {children}
                </div>
            </div>
        </section>
    );
}
