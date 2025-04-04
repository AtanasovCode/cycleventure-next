import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useCartStore } from "@/useCartStore";
import ToggleIcon from "@/app/ui/navigation/ToggleIcon";

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
            className="flex items-center justify-center cursor-pointer"
            onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
        >
            <ToggleIcon />
        </button>
    );
}
