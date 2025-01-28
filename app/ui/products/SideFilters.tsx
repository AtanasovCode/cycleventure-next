
import clsx from "clsx";
import { Filters } from "@/app/types/Filters";
import FilterWrapper from "@/app/ui/products/FilterWrapper";
import FilterIcon from "@/app/assets/icons/filter.svg";
import CloseIcon from "@/app/assets/icons/close.svg";

type SideFiltersProps = {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    showFilters: boolean;
    setShowFilters: (value: boolean) => void;
};

import {
    mtbFilters,
    roadBikes,
    frameFilters,
    brandFilters,
} from "@/app/lib/filters";

export default function SideFilters({ filters, setFilters, showFilters, setShowFilters }: SideFiltersProps) {

    const addOrRemoveFilter = (filterName: string, filterType: keyof Filters) => {
        setFilters((prevFilters) => {
            const isFilterPresent = prevFilters[filterType].includes(filterName);

            return {
                ...prevFilters,
                [filterType]: isFilterPresent
                    ? prevFilters[filterType].filter((filter) => filter !== filterName) // Remove filter
                    : [...prevFilters[filterType], filterName], // Add filter
            };
        });
    };

    const checkIfFilterIsSelected = (filterName: string, filterType: keyof Filters): boolean => {
        return filters[filterType]?.some((filter) => filter === filterName) ?? false;
    };

    const returnAllFilters = () => {
        const category = filters.category || [];
        const brand = filters.brand || [];
        const frame = filters.frameType || [];

        // Combine all selected filters into a single array
        const allFilters = [...category, ...brand, ...frame];

        return allFilters;
    };

    return (
        <div
            className={clsx(
                "fixed top-0 left-0 xl:relative h-dvh overflow-y-auto border-none xs:border-r-2 border-slate-700 xl:overflow-y-clip xl:min-h-screen w-screen xs:w-2/3 md:w-1/3 xl:w-auto xl:min-w-64 bg-secondary xl:bg-background flex flex-col items-start justify-start gap-6 transition-transform duration-300 ease-in-out p-12 xl:pt-0",
                {
                    "-translate-x-full xl:translate-x-0": !showFilters, // Hidden state
                    "translate-x-0 z-50 xl:relative xl:z-auto": showFilters,   // Visible state
                }
            )}
        >
            <div 
                className="absolute top-[3%] right-[3%] cursor-pointer xl:hidden"
                onClick={() => setShowFilters(false)}
            >
                <CloseIcon className="w-8 h-8" />
            </div>
            <div className="text-left font-bold text-lg py-2 flex items-center justify-start gap-2">
                <FilterIcon className="w-5 h-auto fill-white" />
                Filters
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
                <FilterWrapper
                    title="Brand"
                    differentFilters={brandFilters}
                    checkFilter={(filterName) => checkIfFilterIsSelected(filterName, "brand")}
                    handleFilterChange={(filterName) => addOrRemoveFilter(filterName, "brand")}
                />
                <FilterWrapper
                    title="Mountain Bikes"
                    differentFilters={mtbFilters}
                    checkFilter={(filterName) => checkIfFilterIsSelected(filterName, "category")}
                    handleFilterChange={(filterName) => addOrRemoveFilter(filterName, "category")}
                />
                <FilterWrapper
                    title="Road Bikes"
                    differentFilters={roadBikes}
                    checkFilter={(filterName) => checkIfFilterIsSelected(filterName, "category")}
                    handleFilterChange={(filterName) => addOrRemoveFilter(filterName, "category")}
                />
                <FilterWrapper
                    title="Frame Type"
                    differentFilters={frameFilters}
                    checkFilter={(filterName) => checkIfFilterIsSelected(filterName, "frameType")}
                    handleFilterChange={(filterName) => addOrRemoveFilter(filterName, "frameType")}
                />
            </div>
        </div >
    );
}