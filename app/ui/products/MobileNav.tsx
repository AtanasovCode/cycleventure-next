import clsx from "clsx";
import Filter from "@/app/assets/icons/filter.svg";

type NavProps = {
    showFilters: boolean;
    setShowFilters: (value: boolean) => void;
}

export default function MobileNav({ setShowFilters, showFilters }: NavProps) {
    return (
        <div className="w-full px-8 py-2 flex items-center justify-start lg:hidden">
            <Filter 
                className={clsx(
                    "w-6 h-6",
                    {
                        "fill-white": showFilters,
                        "fill-transparent": !showFilters,
                    }
                )}
                onClick={() => setShowFilters(!showFilters)}
            />
        </div>
    );
}