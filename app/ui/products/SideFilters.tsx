
import { Filters, DifferentFilters } from "@/app/types/Filters";
import FilterWrapper from "@/app/ui/products/FilterWrapper";
import clsx from "clsx";

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
                "fixed lg:relative h-screen overflow-y-auto lg:overflow-y-clip lg:min-h-dvh w-dvw lg:w-auto lg:min-w-64 bg-secondary lg:bg-background z-50 lg:z-auto flex flex-col items-start justify-start gap-6 transition-transform duration-300 ease-in-out p-12 lg:pt-0",
                {
                    "-translate-x-full lg:translate-x-0": !showFilters, // Hidden state
                    "translate-x-0 lg:relative": showFilters,   // Visible state
                }
            )}
        >
            <div className="text-left font-bold text-lg p-4">
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