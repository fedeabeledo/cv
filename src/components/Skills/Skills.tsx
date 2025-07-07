import { SkillItem } from "./SkillItem";
import { BlurIn } from "@/components/animations/BlurIn";
import {
    typeScriptLogo,
    javaScriptLogo,
    htmlLogo,
    cssLogo,
    javaLogo,
    pythonLogo,
    nodejsLogo,
    mongodbLogo,
    mysqlLogo,
    neo4jLogo,
    redisLogo,
    springLogo,
    sqlServerLogo,
    sqliteLogo,
    expressJsDarkLogo,
    flaskDarkLogo,
    postgresqlLogo,
    gitLogo,
    reactDarkLogo,
    linuxLogo,
    postmanLogo,
    argentinaFlag,
    ukFlag,
    nextjsLogo,
} from "@/assets/logos";
import {
    RiCodeBoxFill,
    RiDashboardHorizontalFill,
    RiDatabase2Fill,
    RiEarthFill,
    RiSettings3Fill,
    RiToolsFill,
} from "react-icons/ri";

const skills = {
    foundation: [
        {
            title: "SOLID",
        },
        {
            title: "GRASP",
        },
        {
            title: "API REST",
        },
        {
            title: "JWT",
        },
        {
            title: "Socket.IO",
        },
        {
            title: "Agile",
        },
        {
            title: "Unit Testing",
        },
    ],
    programmingLanguages: [
        {
            logo: javaLogo,
            logoAlt: "Java Logo",
            title: "Java",
        },
        {
            logo: pythonLogo,
            logoAlt: "Python Logo",
            title: "Python",
        },
        {
            logo: typeScriptLogo,
            logoAlt: "TypeScript Logo",
            title: "TypeScript",
        },
        {
            logo: javaScriptLogo,
            logoAlt: "JavaScript Logo",
            title: "JavaScript",
        },
        {
            logo: htmlLogo,
            logoAlt: "HTML5 Logo",
            title: "HTML",
        },
        {
            logo: cssLogo,
            logoAlt: "CSS Logo",
            title: "CSS",
        },
    ],
    frameworks: [
        {
            logo: springLogo,
            logoAlt: "Spring Logo",
            title: "Spring Boot",
        },
        {
            logo: flaskDarkLogo,
            logoAlt: "Flask Logo",
            title: "Flask",
        },
        {
            logo: nodejsLogo,
            logoAlt: "Node.js Logo",
            title: "Node.js",
        },
        {
            logo: expressJsDarkLogo,
            logoAlt: "Express.js Logo",
            title: "Express.js",
        },
        {
            logo: reactDarkLogo,
            logoAlt: "React Logo",
            title: "React",
        },
        {
            logo: nextjsLogo,
            logoAlt: "Next.js Logo",
            title: "Next.js",
        },
    ],
    databases: [
        {
            logo: mysqlLogo,
            logoAlt: "MySQL Logo",
            title: "MySQL",
        },
        {
            logo: postgresqlLogo,
            logoAlt: "PostgreSQL Logo",
            title: "PostgreSQL",
        },
        {
            logo: sqlServerLogo,
            logoAlt: "SQL Server Logo",
            title: "SQL Server",
        },
        {
            logo: sqliteLogo,
            logoAlt: "SQLite Logo",
            title: "SQLite",
        },
        {
            logo: mongodbLogo,
            logoAlt: "MongoDB Logo",
            title: "MongoDB",
        },
        {
            logo: redisLogo,
            logoAlt: "Redis Logo",
            title: "Redis",
        },
        {
            logo: neo4jLogo,
            logoAlt: "Neo4j Logo",
            title: "Neo4j",
        },
    ],
    tools: [
        {
            logo: gitLogo,
            logoAlt: "Git Logo",
            title: "Git",
        },
        {
            logo: linuxLogo,
            logoAlt: "Linux Logo",
            title: "Linux",
        },
        {
            logo: postmanLogo,
            logoAlt: "Postman Logo",
            title: "Postman",
        },
    ],
    languages: [
        {
            logo: argentinaFlag,
            logoAlt: "Argentina Flag",
            title: "Spanish",
        },
        {
            logo: ukFlag,
            logoAlt: "UK Flag",
            title: "English",
        },
    ],
};

export const Skills = () => {
    return (
        <div className="flex flex-col items-center lg:items-start justify-center">
            <BlurIn
                variant="h1"
                className="text-4xl font-bold m-4 ml-0 text-primary"
            >
                Skills
            </BlurIn>

            <div className="w-full max-w-4xl mb-6">
                <BlurIn
                    variant="h2"
                    className="text-2xl flex items-center gap-2 font-bold mb-3 text-secondary"
                    delay={0.2}
                >
                    <RiDashboardHorizontalFill /> Foundation
                </BlurIn>
                <div className="flex flex-wrap justify-start gap-4 border-2 border-primary rounded-md p-5 bg-[var(--card_bg)] dark:bg-[#1a1a19a5]">
                    {skills.foundation.map((skill, index) => (
                        <BlurIn
                            key={index}
                            delay={0.2 + index * 0.1}
                            duration={0.8}
                        >
                            <SkillItem title={skill.title} />
                        </BlurIn>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-4xl mb-6">
                <BlurIn
                    variant="h2"
                    className="text-2xl flex items-center gap-2 font-bold mb-3 text-secondary"
                    delay={0.4}
                >
                    <RiCodeBoxFill /> Programming Languages
                </BlurIn>
                <div className="flex flex-wrap justify-start gap-4 border-2 border-primary rounded-md p-5 bg-[var(--card_bg)] dark:bg-[#1a1a19a5]">
                    {skills.programmingLanguages.map((skill, index) => (
                        <BlurIn
                            key={index}
                            delay={0.4 + index * 0.1}
                            duration={0.8}
                        >
                            <SkillItem
                                logo={skill.logo}
                                logoAlt={skill.logoAlt}
                                title={skill.title}
                            />
                        </BlurIn>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-4xl mb-6">
                <BlurIn
                    variant="h2"
                    className="text-2xl flex items-center gap-2 font-bold mb-3 text-secondary"
                    delay={0.6}
                >
                    <RiSettings3Fill /> Frameworks
                </BlurIn>
                <div className="flex flex-wrap justify-start gap-4 border-2 border-primary rounded-md p-5 bg-[var(--card_bg)] dark:bg-[#1a1a19a5]">
                    {skills.frameworks.map((skill, index) => (
                        <BlurIn
                            key={index}
                            delay={0.6 + index * 0.1}
                            duration={0.8}
                        >
                            <SkillItem
                                logo={skill.logo}
                                logoAlt={skill.logoAlt}
                                title={skill.title}
                            />
                        </BlurIn>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-4xl mb-6">
                <BlurIn
                    variant="h2"
                    className="text-2xl flex items-center gap-2 font-bold mb-3 text-secondary"
                    delay={0.8}
                >
                    <RiDatabase2Fill /> Databases
                </BlurIn>
                <div className="flex flex-wrap justify-start gap-4 border-2 border-primary rounded-md p-5 bg-[var(--card_bg)] dark:bg-[#1a1a19a5]">
                    {skills.databases.map((skill, index) => (
                        <BlurIn
                            key={index}
                            delay={0.8 + index * 0.1}
                            duration={0.8}
                        >
                            <SkillItem
                                logo={skill.logo}
                                logoAlt={skill.logoAlt}
                                title={skill.title}
                            />
                        </BlurIn>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-4xl mb-6">
                <BlurIn
                    variant="h2"
                    className="text-2xl flex items-center gap-2 font-bold mb-3 text-secondary"
                    delay={1.0}
                >
                    <RiToolsFill /> Tools
                </BlurIn>
                <div className="flex flex-wrap justify-start gap-4 border-2 border-primary rounded-md p-5 bg-[var(--card_bg)] dark:bg-[#1a1a19a5]">
                    {skills.tools.map((skill, index) => (
                        <BlurIn
                            key={index}
                            delay={1.0 + index * 0.1}
                            duration={0.8}
                        >
                            <SkillItem
                                logo={skill.logo}
                                logoAlt={skill.logoAlt}
                                title={skill.title}
                            />
                        </BlurIn>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-4xl mb-6">
                <BlurIn
                    variant="h2"
                    className="text-2xl flex items-center gap-2 font-bold mb-3 text-secondary"
                    delay={1.2}
                >
                    <RiEarthFill /> Languages
                </BlurIn>
                <div className="flex flex-wrap justify-start gap-4 border-2 border-primary rounded-md p-5 bg-[var(--card_bg)] dark:bg-[#1a1a19a5]">
                    {skills.languages.map((skill, index) => (
                        <BlurIn
                            key={index}
                            delay={1.2 + index * 0.1}
                            duration={0.8}
                        >
                            <SkillItem
                                logo={skill.logo}
                                logoAlt={skill.logoAlt}
                                title={skill.title}
                            />
                        </BlurIn>
                    ))}
                </div>
            </div>
        </div>
    );
};
