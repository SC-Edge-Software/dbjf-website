import type { Metadata } from "next";
import Nav from "@/Components/Nav/Nav";
import "./globals.css";

export const metadata: Metadata = {
    title: "DB & JF Home Improvements LLC",
    description: "Company website for DB & JF Home Improvements LLC",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
