const BAR_CLASS_BASE = `
    bg-white
    w-full
    h-[2px]
    duration-standard
`;

type HamburgerProps = {
    hamburgerMenuIsVisible: boolean
    setHamburgerMenuIsVisible: (isVisible: boolean) => void
}

export default function Hamburger({ hamburgerMenuIsVisible, setHamburgerMenuIsVisible }: HamburgerProps) {
    let firstBarClass = BAR_CLASS_BASE;
    let secondBarClass = BAR_CLASS_BASE;
    let thirdBarClass = BAR_CLASS_BASE;
    if (hamburgerMenuIsVisible) {
        firstBarClass += `
            rotate-45
            translate-y-[7px] 
        `;
        secondBarClass += `
            hidden
        `;
        thirdBarClass += `
            -rotate-45
            -translate-y-[7px]
        `;
    }

    return (
        <div onClick={() => setHamburgerMenuIsVisible(!hamburgerMenuIsVisible)} className="
            w-6
            h-4
            flex
            flex-col
            justify-between
            items-center
            md:hidden
            hover:cursor-pointer">
            <div className={firstBarClass}></div>
            <div className={secondBarClass}></div>
            <div className={thirdBarClass}></div>
        </div>
    );
}
