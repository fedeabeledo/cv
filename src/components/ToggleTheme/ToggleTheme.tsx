"use client";

import useTheme from "@/hooks/useTheme";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export default function ToggleTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-green-950
                hover:bg-gray-300 dark:hover:bg-green-900 transition-colors cursor-pointer z-50"
            aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
            } mode`}
        >
            {theme === "light" ? (
                // Moon icon for dark mode
                <RiMoonFill className="w-6 h-6" />
            ) : (
                // Sun icon for light mode
                <RiSunFill className="w-6 h-6" />
            )}
        </button>
    );
}
