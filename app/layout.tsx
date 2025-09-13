import type { Metadata } from "next";
import Nav from "@/Components/Nav/Nav";
import Footer from "@/Components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "DB & JF Home Improvements",
    description: "Company website for DB & JF Home Improvements LLC",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Nav />

                <main className="flex-grow">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
