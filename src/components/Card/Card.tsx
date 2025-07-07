import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { RiCalendarEventFill } from "react-icons/ri";
import { BlurIn } from "@/components/animations/BlurIn";

interface CardProps {
    logo?: string | StaticImport;
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
    logoClassname?: string;
    title?: string;
    subtitle: string;
    text: string;
    startDate: string;
    endDate?: string;
    children?: React.ReactNode;
}

export const Card = ({
    logo,
    logoAlt = "Logo",
    logoWidth = 100,
    logoHeight = 100,
    logoClassname,
    title,
    subtitle,
    text,
    startDate,
    endDate,
    children,
}: CardProps) => {
    return (
        <div className="flex flex-col items-center lg:items-start justify-center">
            {title && (
                <BlurIn
                    variant="h1"
                    className="text-4xl font-bold m-4 ml-0 text-primary"
                >
                    {title}
                </BlurIn>
            )}
            <BlurIn
                className="flex flex-col items-start justify-center border-2 border-[var(--primary)] rounded-md p-5 bg-[var(--card_bg)]"
                delay={0.3}
            >
                <div className="flex flex-col justify-center min-w-3xs gap-1 mb-2">
                    {logo && (
                        <Image
                            width={logoWidth}
                            height={logoHeight}
                            className={logoClassname}
                            src={logo}
                            alt={logoAlt}
                        />
                    )}
                    <h3 className="text-2xl font-semibold ">{subtitle}</h3>
                    <h4 className="text-xl text-left">{text}</h4>
                    <span className="text-md font-medium  flex items-center gap-1">
                        <RiCalendarEventFill />
                        {startDate} {endDate ? `- ${endDate}` : ""}
                    </span>
                </div>

                {children}
            </BlurIn>
        </div>
    );
};
