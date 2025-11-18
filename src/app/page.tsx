import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Card } from "@/components/Card/Card";
import UADE_LOGO from "@/assets/uade_logo.png";
import { Skills } from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects/Projects";
import { PresentationCard } from "@/components/PresentationCard/PresentationCard";
import Hack4uLogo from "@/assets/hack4u_logo.jpg";
import CiscoLogo from "@/assets/cisco_logo.jpg";
import { BlurIn } from "@/components/animations/BlurIn";
import ToggleTheme from "@/components/ToggleTheme/ToggleTheme";

const certificates = [
    {
        logo: Hack4uLogo,
        logoAlt: "Hack4u Logo",
        logoClassname: "bg-white object-contain rounded-xl w-12 h-12",
        title: "Linux Introduction",
        provider: "Hack4u",
        date: "October 2024",
        inProgress: false,
    },
    {
        logo: Hack4uLogo,
        logoAlt: "Hack4u Logo",
        logoClassname: "bg-white object-contain rounded-xl w-12 h-12",
        title: "Linux Customization",
        provider: "Hack4u",
        date: "August 2024",
        inProgress: false,
    },
    {
        logo: CiscoLogo,
        logoAlt: "Cisco Logo",
        logoClassname: "bg-white object-contain rounded-xl w-12 h-12",
        title: "CCNA: Introduction to Networks",
        provider: "Cisco",
        date: "August 2025 - December 2025",
        inProgress: false,
    },
];

export default function Home() {
    return (
        <>
            <main className="flex flex-col lg:flex-row items-center lg:items-start justify-center p-4 lg:p-8 gap-6 lg:gap-8">
                <ToggleTheme />
                <PresentationCard />
                <div className="flex flex-col items-start justify-center gap-4">
                    <AboutMe />
                    <Card
                        logo={UADE_LOGO}
                        logoAlt="UADE Logo"
                        logoClassname="bg-white object-contain rounded-xl"
                        title="Education"
                        subtitle="Engineering Degree in Computer Science"
                        text="Universidad Argentina de la Empresa (UADE)"
                        startDate="March 2022"
                        endDate="present"
                    >
                        <div className="flex mt-1">
                            <span className="text-md font-medium">
                                29 of 52 subjects completed
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-[var(--card_bg)]">
                            <div
                                className="bg-[var(--primary)] h-3.5 rounded-full"
                                style={{ width: "56%" }}
                            ></div>
                        </div>
                    </Card>
                    <Card
                        title="Experience"
                        subtitle="Collections Management"
                        text="Buerentals - Part Time"
                        startDate="July 2022"
                        endDate="June 2023"
                    >
                        <ol className="list-disc list-inside text-md font-medium">
                            <li>
                                Responsible for contacting customers who have
                                made reservations
                            </li>
                            <li>
                                Resolving questions from clients prior to their
                                stay
                            </li>
                            <li>
                                Using Excel to manage and organize customer and
                                reservation information
                            </li>
                            <li>
                                Effective communication with customers to ensure
                                a satisfactory experience
                            </li>
                        </ol>
                    </Card>
                    <div className="flex flex-col items-center lg:items-start justify-center gap-2 w-full">
                        <BlurIn
                            variant="h1"
                            className="text-4xl font-bold m-4 ml-0 text-primary"
                        >
                            Certificates
                        </BlurIn>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                            {certificates.map((cert, index) => (
                                <Card
                                    key={index}
                                    logo={cert.logo}
                                    logoAlt={cert.logoAlt}
                                    logoClassname={cert.logoClassname}
                                    subtitle={cert.title}
                                    text={cert.provider}
                                    startDate={cert.date}
                                    className="flex flex-col items-center lg:items-start justify-center w-full max-w-xs"
                                    badge={cert.inProgress ? "In Progress" : ""}
                                    badgeColor={
                                        cert.inProgress ? "bg-yellow-600" : ""
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <Skills />
                    <Projects />
                </div>
            </main>
        </>
    );
}
