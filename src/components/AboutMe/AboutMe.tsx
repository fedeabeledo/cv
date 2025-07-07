"use client";
import { BlurIn } from "@/components/animations/BlurIn";

export const AboutMe = () => {
    return (
        <div className="flex flex-col items-center lg:items-start justify-center">
            <BlurIn
                variant="h3"
                className="text-4xl text-center font-semibold mb-4 text-primary"
                delay={0.5}
            >
                About Me
            </BlurIn>
            <BlurIn
                variant="p"
                className="textlg max-w-4xl text-justify border-2 border-[var(--primary)] rounded-md p-5 bg-[var(--card_bg)]"
                delay={0.7}
            >
                I am a computer enthusiast and researcher of new technologies.
                Quick learner, always willing to acquire new skills and
                knowledge to efficiently face technological challenges.
                Detail-oriented and committed, I like to do things right and
                make sure that each project is of the highest possible standard.
            </BlurIn>
        </div>
    );
};
