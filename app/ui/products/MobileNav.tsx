import clsx from "clsx";
import Filter from "@/app/assets/icons/filter.svg";

type NavProps = {
    showFilters: boolean;
    setShowFilters: (value: boolean) => void;
}

export default function MobileNav({ setShowFilters, showFilters }: NavProps) {
    return (
        <div className="w-full px-8 py-2 h-24 bg-secondary flex items-center justify-center lg:hidden fixed top-0 left-0 z-50">
            <Filter 
                className={clsx(
                    "w-6 h-6 absolute top-1/2 left-[5%] -translate-y-1/2",
                    {
                        "fill-white": showFilters,
                        "fill-transparent": !showFilters,
                    }
                )}
                onClick={() => setShowFilters(!showFilters)}
            />
            <div className="text-text font-bold text-2xl">
                cycleventure
            </div>
        </div>
    );
}