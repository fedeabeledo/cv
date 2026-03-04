"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";

interface BlurInProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    variant?: "h1" | "h2" | "h3" | "p" | "div" | "span" | "button";
    duration?: number;
    delay?: number;
    onClick?: () => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const BlurIn: React.FC<BlurInProps> = ({
    children,
    className = "",
    style,
    variant = "div",
    duration = 1.2,
    delay = 0,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const [forceVisible, setForceVisible] = React.useState(false);

    React.useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setForceVisible(true);
        }, 1200);

        return () => window.clearTimeout(timeoutId);
    }, []);

    const MotionComponent = motion[variant];
    const shouldShow = isInView || forceVisible;

    return (
        <MotionComponent
            ref={ref}
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={shouldShow ? { filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ duration, delay }}
            className={className}
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </MotionComponent>
    );
};
