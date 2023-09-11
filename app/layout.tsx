import type { Metadata } from "next";
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
            <body>{children}</body>
        </html>
    );
}
