"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import NavItemList from "./NavItemList";
import Hamburger from "./Hamburger";
import HamburgerMenu from "./HamburgerMenu";

const MAX_WINDOW_WIDTH_FOR_MENU = 768;
const LOGO_SIZE = 80;
const NAV_ITEMS = {
    "Home": "/",
    "Our History": "/our-history",
    "Vision": "/vision",
    "Why Invest In Your Property?": "/why-invest",
    "Contact Us": "/contact"
};

export default function Nav() {
    const [hamburgerMenuIsVisible, setHamburgerMenuIsVisible] = useState(false);

    useEffect(() => {
        const onWindowResize = () => {
            const width = window.innerWidth;
            if (width >= MAX_WINDOW_WIDTH_FOR_MENU) {
                // Hide the hamburger menu if the window is sufficiently wide
                setHamburgerMenuIsVisible(false);
            }
        };

        window.addEventListener("resize", onWindowResize);

        return () => {
            window.removeEventListener("resize", onWindowResize);
        };
    });

    return (
        <>
            <nav className="
                sticky
                top-0
                w-screen
                bg-dbjf-gray
                flex
                justify-between
                items-center
                px-10
                md:px-20
                duration-standard
                drop-shadow-lg
                h-[80px]
                z-100">
                <Link href="/">
                    <Logo size={LOGO_SIZE} />
                </Link>

                <NavItemList navItems={NAV_ITEMS} />

                <Hamburger 
                    hamburgerMenuIsVisible={hamburgerMenuIsVisible}
                    setHamburgerMenuIsVisible={setHamburgerMenuIsVisible}
                />
            </nav>

            {hamburgerMenuIsVisible && <HamburgerMenu navItems={NAV_ITEMS} />}
        </>
    );
}
