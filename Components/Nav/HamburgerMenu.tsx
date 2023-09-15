import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MENU_BASE_CLASS = `
    bg-dbjf-dark-gray
    w-48
    sticky
    left-full
    scale-up-ver-top
    rounded-b-lg
    drop-shadow-lg
    duration-standard
    z-90
`;
const MENU_STUCK_CLASS = `
    ${MENU_BASE_CLASS}
    top-[120px]
`;
const MENU_UNSTUCK_CLASS = `
    ${MENU_BASE_CLASS}
    top-[100px]
`;
const NAV_LINK_BASE_CLASS = `
    text-white
    font-bold
    p-1
    border-2
    border-transparent
    duration-standard
`;
const NAV_LINK_ACTIVE_CLASS = `
    ${NAV_LINK_BASE_CLASS}
    border-b-white
`;
const NAV_LINK_INACTIVE_CLASS = `
    ${NAV_LINK_BASE_CLASS}
    rounded-md
    hover:border-white
    hover:bg-white
    hover:text-dbjf-dark-gray
`;

type HamburgerMenuProps = {
    navItems: Record<string, string>
}

export default function HamburgerMenu({ navItems }: HamburgerMenuProps) {
    const [menuStyle, setMenuStyle] = useState(MENU_STUCK_CLASS);
    const currentUrl = usePathname();

    const isLinkActive = (link: string): boolean => {
        return currentUrl === link;
    };

    useEffect(() => {
        const onScroll = () => {
            const updateMenuStyle = (scroll: number) => {
                setMenuStyle(scroll === 0 ? MENU_STUCK_CLASS : MENU_UNSTUCK_CLASS);
            };

            const scroll = window.scrollY;
            updateMenuStyle(scroll);
        };

        // Fire the scroll handler pre-emptively to ensure that the initial page scroll is taken into account
        onScroll();

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className={menuStyle}>
            <ul className="
                flex
                flex-col
                justify-start
                items-center
            ">
                {Object.keys(navItems).map(linkName => {
                    const link = navItems[linkName];
                    return (
                        <li key={link + "-hamburger-menu"} className="
                            my-4
                        ">
                            <Link href={link}  className={isLinkActive(link) ? NAV_LINK_ACTIVE_CLASS : NAV_LINK_INACTIVE_CLASS}>{linkName}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
