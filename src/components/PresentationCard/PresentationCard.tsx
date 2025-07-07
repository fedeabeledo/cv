"use client";
import Image from "next/image";
import { BlurIn } from "@/components/animations/BlurIn";
import {
    RiDownloadFill,
    RiGithubFill,
    RiLinkedinFill,
    RiWhatsappFill,
    RiMailFill,
} from "react-icons/ri";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

export const PresentationCard = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/Federico-Abeledo-Resume.pdf";
        link.download = "Federico Abeledo Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const socialLinks = [
        {
            href: "https://github.com/fedeabeledo",
            icon: RiGithubFill,
            label: "GitHub",
            color: "#333",
        },
        {
            href: "https://linkedin.com/in/federico-abeledo", // Cambia por tu LinkedIn real
            icon: RiLinkedinFill,
            label: "LinkedIn",
            color: "#0077b5",
        },
        {
            href: "https://wa.me/1234567890", // Cambia por tu número de WhatsApp
            icon: RiWhatsappFill,
            label: "WhatsApp",
            color: "#25d366",
        },
        {
            href: "mailto:tu-email@ejemplo.com", // Cambia por tu email
            icon: RiMailFill,
            label: "Email",
            color: "#dd4b39",
        },
    ];

    return (
        <div className="p-4 lg:p-6 lg:sticky lg:top-0 lg:h-fit">
            <ToggleTheme />
            <div
                className="flex flex-col items-center justify-center gap-4 lg:gap-6
                         border-2 border-secondary dark:border-primary rounded-md p-4 lg:p-6 bg-[var(--card_bg)]
                         dark:bg-[#1a1a19f0] backdrop-blur-sm lg:min-w-[320px]"
            >
                <BlurIn className="flex-shrink-0" duration={1.5}>
                    <Image
                        width={120}
                        height={120}
                        className="w-20 h-20 lg:w-32 lg:h-32 rounded-full"
                        src="https://gravatar.com/avatar/4dafcd4e24f476e1ecfbddb68302f9b385072f3b2d427f67ec033633d9460cec?s=500"
                        alt="Federico Abeledo's Avatar"
                    />
                </BlurIn>

                <div className="flex flex-col items-center text-center">
                    <BlurIn
                        variant="h1"
                        className="text-4xl font-bold text-[var(--primary)] mb-1"
                        delay={0.2}
                    >
                        Federico Abeledo
                    </BlurIn>
                    <BlurIn
                        variant="h3"
                        className="text-2xl font-semibold text-[var(--secondary)] mb-3"
                        delay={0.4}
                    >
                        Software Developer
                    </BlurIn>
                </div>

                <div className="flex flex-col gap-3 items-center w-full">
                    <BlurIn
                        variant="button"
                        className="relative py-2 px-4 font-semibold bg-none
                                 border-2 border-secondary dark:border-primary rounded-lg cursor-pointer overflow-hidden
                                 transition-all duration-300 ease-in-out flex items-center gap-2 text-sm min-w-50 justify-center"
                        style={
                            {
                                background: `linear-gradient(var(--secondary) 0 0) no-repeat calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.2em)`,
                                transition:
                                    "0.3s var(--t, 0s), background-position 0.3s calc(0.3s - var(--t, 0s))",
                                "--p": "0%",
                                "--t": "0s",
                            } as React.CSSProperties & {
                                "--p": string;
                                "--t": string;
                            }
                        }
                        delay={0.6}
                        onClick={handleDownloadCV}
                        onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                            const target = e.currentTarget as HTMLElement;
                            const isDark = window.matchMedia(
                                "(prefers-color-scheme: dark)"
                            ).matches;
                            const bgColor = isDark
                                ? "var(--primary)"
                                : "var(--secondary)";
                            target.style.background = `linear-gradient(${bgColor} 0 0) no-repeat calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.2em)`;
                            target.style.setProperty("--p", "100%");
                            target.style.setProperty("--t", "0.3s");
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                            const target = e.currentTarget as HTMLElement;
                            const isDark = window.matchMedia(
                                "(prefers-color-scheme: dark)"
                            ).matches;
                            const bgColor = isDark
                                ? "var(--primary)"
                                : "var(--secondary)";
                            target.style.background = `linear-gradient(${bgColor} 0 0) no-repeat calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.2em)`;
                            target.style.setProperty("--p", "0%");
                            target.style.setProperty("--t", "0s");
                        }}
                    >
                        <RiDownloadFill className="text-lg relative z-10" />
                        <span className="relative z-10">Download CV</span>
                    </BlurIn>

                    <BlurIn
                        className="flex gap-3 mt-2 justify-center w-full"
                        delay={0.8}
                    >
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-8 h-8 bg-secondary dark:bg-primary text-center rounded-full overflow-hidden z-10
                                         transition-all duration-500 ease-in-out hover:scale-110 flex items-center justify-center"
                                style={{
                                    display: "flex",
                                    position: "relative",
                                }}
                                title={link.label}
                                onMouseEnter={(e) => {
                                    const target = e.currentTarget;
                                    const before = target.querySelector(
                                        ".before-element"
                                    ) as HTMLElement;
                                    const icon = target.querySelector(
                                        ".icon"
                                    ) as HTMLElement;
                                    if (before && icon) {
                                        before.style.top = "0";
                                        icon.style.color = "#fff";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.currentTarget;
                                    const before = target.querySelector(
                                        ".before-element"
                                    ) as HTMLElement;
                                    const icon = target.querySelector(
                                        ".icon"
                                    ) as HTMLElement;
                                    if (before && icon) {
                                        before.style.top = "100%";
                                        icon.style.color = "#262626";
                                    }
                                }}
                            >
                                <div
                                    className="before-element absolute top-full left-0 w-full h-full transition-all duration-500 ease-in-out z-20"
                                    style={{
                                        backgroundColor: link.color,
                                    }}
                                />
                                <link.icon
                                    className="icon relative text-[#262626] transition-all duration-500 ease-in-out z-30 text-lg"
                                    style={{
                                        position: "relative",
                                        zIndex: 30,
                                    }}
                                />
                            </a>
                        ))}
                    </BlurIn>
                </div>
            </div>
        </div>
    );
};
