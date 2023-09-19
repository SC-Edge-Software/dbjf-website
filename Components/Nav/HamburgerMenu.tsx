import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINK_BASE_CLASS = `
    text-white
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
    const currentUrl = usePathname();

    const isLinkActive = (link: string): boolean => {
        return currentUrl === link;
    };

    return (
        <div className="
            bg-dbjf-dark-gray
            w-full
            sticky
            left-full
            scale-up-ver-top
            rounded-b-lg
            drop-shadow-lg
            duration-standard
            top-[80px]
            z-90
        ">
            <ul className="
                flex
                flex-col
                justify-start
                items-center
            ">
                {Object.keys(navItems).map(linkName => {
                    const link = navItems[linkName];
                    return (
                        <li key={link + "-hamburger-menu"} className="my-4">
                            <Link href={link}  className={isLinkActive(link) ? NAV_LINK_ACTIVE_CLASS : NAV_LINK_INACTIVE_CLASS}>{linkName}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
