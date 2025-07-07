"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { BlurIn } from "@/components/animations/BlurIn";
import { RiGithubFill } from "react-icons/ri";

interface Repository {
    url: string;
    name: string;
}

interface ProjectCardProps {
    image?: string | StaticImport;
    imageAlt?: string;
    title: string;
    description: string;
    skills: string[];
    startDate: string;
    endDate?: string;
    repositories?: Repository[];
}

export const ProjectCard = ({
    image,
    imageAlt = "Project Image",
    title,
    description,
    skills,
    startDate,
    endDate,
    repositories = [],
}: ProjectCardProps) => {
    return (
        <BlurIn className="flex flex-col h-full w-full p-3 sm:p-4 border-2 border-[var(--primary)] rounded-md bg-[var(--card_bg)] min-h-[400px] max-w-[420px]">
            {image && (
                <div className="w-full aspect-video mb-2 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                        src={image}
                        alt={imageAlt}
                    />
                </div>
            )}
            <div className="flex flex-col flex-grow">
                <BlurIn
                    variant="h3"
                    className="text-lg sm:text-xl font-semibold mb-1.5 text-center"
                    delay={0.2}
                >
                    {title}
                </BlurIn>
                <BlurIn variant="div" delay={0.4}>
                    <p className="text-sm sm:text-base text-left flex-grow mb-1.5">
                        {description}
                    </p>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-400 block text-left">
                        {startDate} {endDate ? `- ${endDate}` : ""}
                    </span>
                </BlurIn>
                <div className="mt-1.5">
                    <BlurIn
                        className="flex flex-wrap gap-1.5 mb-2 justify-start"
                        delay={0.8}
                    >
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-transparent border-2 border-secondary dark:border-accent px-2 py-1 rounded-full text-xs"
                            >
                                {skill}
                            </span>
                        ))}
                    </BlurIn>
                </div>
            </div>
            {repositories.length > 0 && (
                <BlurIn
                    className="flex flex-col items-start w-full"
                    delay={1.0}
                >
                    <div className="flex flex-wrap gap-2">
                        {repositories.map((repo, index) => (
                            <a
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                <button
                                    className="bg-transparent border-2 border-secondary dark:border-accent px-3 py-1.5 rounded
                                        text-xs sm:text-sm flex items-center gap-2 cursor-pointer
                                        transition-all duration-300 ease-in-out
                                        hover:scale-105 hover:shadow-[2px_2px_0_var(--secondary)] dark:hover:shadow-[2px_2px_0_var(--accent)]"
                                >
                                    <RiGithubFill className="text-base" />
                                    {repo.name}
                                </button>
                            </a>
                        ))}
                    </div>
                </BlurIn>
            )}
        </BlurIn>
    );
};
