import type { Metadata } from "next";
import { PT_Serif, Montserrat } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
    variable: "--font-pt-serif",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Federico Abeledo",
    description: "Personal website of Federico Abeledo.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${ptSerif.variable} ${montserrat.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
