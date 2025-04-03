import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useCartStore } from "@/useCartStore";
import Moon from "@/app/assets/icons/moon.svg";
import Sun from "@/app/assets/icons/sun.svg";

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme();
    const { currentTheme, setCurrentTheme } = useCartStore();

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");

        if (mq.matches && currentTheme === "system") {
            setCurrentTheme("dark")
        } else if (!mq.matches && currentTheme === "system") {
            setCurrentTheme("light")
        }

        // This callback will fire if the perferred color scheme changes without a reload
        mq.addEventListener("change", (evt) => setCurrentTheme(evt.matches ? "dark" : "light"));
    }, [])

    useEffect(() => {
        setTheme(currentTheme);
    }, [currentTheme])

    const changeTheme = (newTheme: string) => {
        setCurrentTheme(newTheme);
    }

    return (
        <button
            className="flex items-center justify-center cursor-pointer text-white gap-2"
            onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
        >
            <p>
                Theme: {theme}
            </p>
            {
                theme === "dark" ?
                    <Sun className="w-6 h-auto" style={{ stroke: "var(--primary-dark)", fill: "var(--primary-dark)" }} />
                    :
                    <Moon className="w-6 h-auto" style={{ fill: "var(--primary-dark)" }} />
            }
        </button>
    );
}