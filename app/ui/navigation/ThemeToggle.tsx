import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useCartStore } from "@/useCartStore";
import Moon from "@/app/assets/icons/moon.svg";
import Sun from "@/app/assets/icons/sun.svg";

export default function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const { currentTheme, setCurrentTheme } = useCartStore();

    // Sync Zustand store with actual applied theme on first load
    useEffect(() => {
        if (currentTheme === "system" && resolvedTheme) {
            setCurrentTheme(resolvedTheme);
        }
    }, [resolvedTheme]);

    // Watch for user preference changes (system dark/light)
    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const updateTheme = (e: MediaQueryListEvent) => {
            if (currentTheme === "system") {
                setCurrentTheme(e.matches ? "dark" : "light");
            }
        };

        mq.addEventListener("change", updateTheme);
        return () => mq.removeEventListener("change", updateTheme);
    }, [currentTheme]);

    // Apply the selected theme to `next-themes`
    useEffect(() => {
        setTheme(currentTheme);
    }, [currentTheme]);

    const changeTheme = (newTheme: string) => {
        setCurrentTheme(newTheme);
    };

    // ❗ prevent rendering until theme is ready
    // avoid wrong theme flashing before correct theme is applied
    if (!resolvedTheme) return null;

    return (
        <button
            className="flex items-center justify-center cursor-pointer text-white gap-2"
            onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <Sun className="w-6 h-auto" style={{ stroke: "var(--primary-dark)", fill: "var(--primary-dark)" }} />
            ) : (
                <Moon className="w-6 h-auto" style={{ fill: "var(--primary-dark)" }} />
            )}
        </button>
    );
}
