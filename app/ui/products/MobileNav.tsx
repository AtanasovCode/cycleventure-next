import clsx from "clsx";
import Filter from "@/app/assets/icons/filter.svg";

type NavProps = {
    showFilters: boolean;
    setShowFilters: (value: boolean) => void;
}

export default function MobileNav({ setShowFilters, showFilters }: NavProps) {
    return (
        <div className="w-full p-8 bg-secondary flex items-center justify-center relative lg:hidden">
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