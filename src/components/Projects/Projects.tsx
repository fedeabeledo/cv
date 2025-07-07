import { ProjectCard } from "./ProjectCard";
import { BlurIn } from "@/components/animations/BlurIn";
import TRILATERATION from "@/assets/projects/trilateration.jpg";
import PATITAS_PELUDAS from "@/assets/projects/patitas_peludas.png";
import REGISTRATION_SYSTEM from "@/assets/projects/registration_system.jpg";
import PORTFOLIO from "@/assets/projects/portfolio.png";

const projects = [
    {
        image: TRILATERATION,
        title: "Trilateration",
        description:
            "Developing a trilateration solution that calculates the intersection of three circles based on their coordinates and radius, using mathematical algorithms to determine the precise location.",
        skills: ["Java", "Spring Boot", "Postman"],
        startDate: "August 2023",
        endDate: "December 2023",
        repositories: [
            { url: "https://github.com/rrrrho/tpo-poo", name: "Source" },
        ],
    },
    {
        image: PATITAS_PELUDAS,
        title: "Patitas Peludas",
        description:
            "Development of a full-stack e-commerce platform for a pet shop, including user authentication with roles (admin, buyer, seller), product and order management.",
        skills: ["Java", "Spring Boot", "JWT", "MySQL", "React", "API Rest"],
        startDate: "March 2024",
        endDate: "July 2024",
        repositories: [
            {
                url: "https://github.com/fedeabeledo/backend-api-grupo-seis",
                name: "Backend",
            },
            {
                url: "https://github.com/rrrrho/frontend-api-grupo-seis",
                name: "Frontend",
            },
        ],
    },
    {
        image: REGISTRATION_SYSTEM,
        title: "Registration System for Universities",
        description:
            " A platform for educational institutions to streamline registration, management, tracking, and payments with reliable, interconnected modules.",
        skills: ["Java", "Spring Boot", "Unit Testing", "SOLID", "Grasp"],
        startDate: "March 2024",
        endDate: "July 2024",
        repositories: [
            {
                url: "https://github.com/valentincampestri/Registration-system-for-universities",
                name: "Source",
            },
        ],
    },
    {
        image: PORTFOLIO,
        title: "CV",
        description:
            "A personal portfolio website showcasing my skills, projects, and experience as a software developer.",
        skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        startDate: "July 2025",
        repositories: [
            { url: "https://github.com/fedeabeledo/portfolio", name: "Source" },
        ],
    },
];

export const Projects = () => {
    return (
        <div className="flex flex-col items-center lg:items-start justify-center gap-4 p-3 sm:p-5 pl-0 sm:pl-0">
            <BlurIn
                variant="h2"
                className="text-4xl font-bold mb-4 text-primary text-center"
            >
                Projects
            </BlurIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl">
                {projects.map((project, index) => (
                    <BlurIn key={index} delay={index * 0.2}>
                        <ProjectCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            skills={project.skills}
                            startDate={project.startDate}
                            endDate={project.endDate}
                            repositories={project.repositories}
                        />
                    </BlurIn>
                ))}
            </div>
        </div>
    );
};
