import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINK_BASE_CLASS = `
    text-white
    ml-5
    p-1
    border-transparent
    duration-standard
    border-2
    border-transparent
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
    hover:text-dbjf-gray
`;

type NavItemListProps = {
    navItems: Record<string, string>
}

export default function NavItemList({ navItems }: NavItemListProps) {
    const currentUrl = usePathname();

    const isLinkActive = (link: string): boolean => {
        return currentUrl === link;
    };

    return (
        <ul className="
            hidden
            h-full
            md:flex
            items-center">
            {Object.keys(navItems).map(linkName => {
                const link = navItems[linkName];
                return (
                    <li key={linkName + "-nav-list"}>
                        <Link href={link} className={isLinkActive(link) ? NAV_LINK_ACTIVE_CLASS : NAV_LINK_INACTIVE_CLASS}>
                            {linkName}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
