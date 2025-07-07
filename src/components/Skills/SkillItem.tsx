import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface SkillItemProps {
    logo?: string | StaticImport;
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
    logoClassname?: string;
    title: string;
}

export const SkillItem = ({
    logo,
    logoAlt = "Logo",
    logoWidth = 20,
    logoHeight = 20,
    logoClassname,
    title,
}: SkillItemProps) => {
    return (
        <div className="flex items-center gap-1 p-2 bg-[#115711a9] dark:bg-background rounded-lg w-fit min-w-fit h-fit min-h-fit hover:bg-accent transition-colors duration-300 ease-in-out cursor-default">
            {logo && (
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <Image
                        width={logoWidth}
                        height={logoHeight}
                        className={`max-w-full max-h-full object-contain ${
                            logoClassname || ""
                        }`}
                        src={logo}
                        alt={logoAlt}
                    />
                </div>
            )}
            <span className="text-sm font-semibold text-left leading-tight whitespace-nowrap">
                {title}
            </span>
        </div>
    );
};
