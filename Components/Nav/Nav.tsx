"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavItemList from "./NavItemList";
import Logo from "../Logo/Logo";

const LOGO_SIZE_STUCK = 120;
const LOGO_SIZE_UNSTUCK = 100;
const NAV_BASE_CLASS = `
    sticky
    top-0
    w-screen
    bg-dbjf-gray
    flex
    justify-between
    items-center
    px-20
    duration-standard
`;
const NAV_STUCK_CLASS = `
    ${NAV_BASE_CLASS}
    h-[120px]
`;
const NAV_UNSTUCK_CLASS = `
    ${NAV_STUCK_CLASS}
    h-[100px]
    drop-shadow-lg
`;

export default function Nav() {
    const [navClass, setNavClass] = useState(NAV_STUCK_CLASS);
    const [logoSize, setLogoSize] = useState(LOGO_SIZE_STUCK);

    useEffect(() => {
        const onScroll = () => {
            const updateNavStyle = (scroll: number) => {
                setNavClass(scroll === 0 ? NAV_STUCK_CLASS : NAV_UNSTUCK_CLASS);
            };
            const updateLogoSize = (scroll: number) => {
                setLogoSize(scroll === 0 ? LOGO_SIZE_STUCK : LOGO_SIZE_UNSTUCK);
            };

            const scroll = window.scrollY;
            updateNavStyle(scroll);
            updateLogoSize(scroll);
        };

        // Fire the scroll handler pre-emptively to ensure that the initial page scroll is taken into account
        onScroll();

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <nav className={navClass}>
            <Link href="/">
                <Logo size={logoSize} />
            </Link>

            <NavItemList navItems={{
                "Home": "/",
                "About Us": "/about",
                "Contact Us": "/contact"
            }} />
        </nav>
    );
}
