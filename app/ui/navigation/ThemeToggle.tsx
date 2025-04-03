import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useCartStore } from "@/useCartStore";
import Moon from "@/app/assets/icons/moon.svg";
import Sun from "@/app/assets/icons/sun.svg";

export default function ThemeToggle() {

    const { setTheme } = useTheme();
    const {
        currentTheme,
        setCurrentTheme,
    } = useCartStore();

    useEffect(() => {
        const mq = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        if (mq.matches) {
            setCurrentTheme("dark");
        }

        // This callback will fire if the perferred color scheme changes without a reload
        mq.addEventListener("change", (evt) => setCurrentTheme(evt.matches ? "dark" : "light"));
    }, []);

    const changeTheme = (theme: string) => {
        setTheme(theme);
        setCurrentTheme(theme);
    }

    return (
        <button
            className="flex items-center justify-center cursor-pointer"
            onClick={() => changeTheme(currentTheme === "dark" ? "light" : "dark")}
        >
            {
                currentTheme === "dark" ?
                    <Sun className="w-6 h-auto" style={{ stroke: "var(--primary-dark)", fill: "var(--primary-dark)" }} />
                    :
                    <Moon className="w-6 h-auto" style={{ fill: "var(--primary-dark)" }} />
            }
        </button>
    );
}