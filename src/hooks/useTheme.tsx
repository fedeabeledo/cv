"use client";

import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export default function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        // Check if there's a theme stored in localStorage
        const storedTheme = localStorage.getItem("theme") as Theme;
        // Check system preferences
        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        // Set initial theme
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle(
                "dark",
                storedTheme === "dark"
            );
        } else if (systemPrefersDark) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
    };

    return { theme, toggleTheme };
}
