"use client";
import Image from "next/image";
import { BlurIn } from "@/components/animations/BlurIn";
import { RiDownloadFill } from "react-icons/ri";

export const AboutMe = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/Federico-Abeledo-Resume.pdf"; // Cambia esto por la ruta real de tu CV
        link.download = "Federico Abeledo Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <BlurIn className="w-50 h-50 rounded-full" duration={1.5}>
                <Image
                    width={300}
                    height={300}
                    className="w-50 h-50 rounded-full"
                    src="https://gravatar.com/avatar/4dafcd4e24f476e1ecfbddb68302f9b385072f3b2d427f67ec033633d9460cec?s=500"
                    alt="Federico Abeledo's Avatar"
                />
            </BlurIn>
            <BlurIn
                variant="h1"
                className="text-7xl text-center font-bold m-4 text-[var(--primary)]"
                delay={0.3}
            >
                Federico Abeledo
            </BlurIn>
            <BlurIn
                variant="h3"
                className="text-5xl text-center font-semibold mb-4 text-[var(--secondary)]"
                delay={0.5}
            >
                Software Developer
            </BlurIn>
            <BlurIn
                variant="p"
                className="text-xl max-w-4xl text-justify border-2 border-[var(--primary)] rounded-md p-5 bg-[#1a1a19a5]"
                delay={0.7}
            >
                I am a computer enthusiast and researcher of new technologies.
                Quick learner, always willing to acquire new skills and
                knowledge to efficiently face technological challenges.
                Detail-oriented and committed, I like to do things right and
                make sure that each project is of the highest possible standard.
            </BlurIn>

            <BlurIn
                variant="button"
                className="mt-6 relative py-3 px-6 font-semibold text-white bg-none border-2 border-[var(--primary)] rounded-lg
                cursor-pointer overflow-hidden transition-all duration-300 ease-in-out
                flex items-center gap-2 text-lg group"
                style={
                    {
                        background: `linear-gradient(var(--primary) 0 0) no-repeat calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.2em)`,
                        transition:
                            "0.3s var(--t, 0s), background-position 0.3s calc(0.3s - var(--t, 0s))",
                        "--p": "0%",
                        "--t": "0s",
                    } as React.CSSProperties & { "--p": string; "--t": string }
                }
                delay={0.9}
                onClick={handleDownloadCV}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.setProperty("--p", "100%");
                    target.style.setProperty("--t", "0.3s");
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.setProperty("--p", "0%");
                    target.style.setProperty("--t", "0s");
                }}
            >
                <RiDownloadFill className="text-xl relative z-10" />
                <span className="relative z-10">Download CV</span>
            </BlurIn>
        </div>
    );
};
