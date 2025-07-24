"use client"

import React, { useEffect, useState } from "react";

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if the 'dark' class is currently applied to the document root
        const isCurrentlyDark = document.documentElement.classList.contains("dark");
        setIsDark(isCurrentlyDark);
    }, []);

    const toggleTheme = () => {
        // Toggle the theme state
        const newTheme = !isDark;
        setIsDark(newTheme);
        // Save the new theme preference in localStorage
        localStorage.setItem("theme", newTheme ? "dark" : "light");
        // Add or remove the 'dark' class on the document root accordingly
        document.documentElement.classList.toggle("dark", newTheme);
    };

    return (
        <div
            onClick={toggleTheme}
            className="block relative cursor-pointer transition-colors text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-gray-300"
        >
            {/* Sun icon shown when dark mode is enabled */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-7 h-7 ${isDark ? "inline-block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
            </svg>

            {/* Moon icon shown when light mode is enabled */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-7 h-7 ${isDark ? "hidden" : "inline-block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
            </svg>
        </div>
    );
}

export default ThemeToggle;
