import { Filters, DifferentFilters } from "@/app/types/Filters";
import FilterWrapper from "@/app/ui/products/FilterWrapper";

type SideFiltersProps = {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

import {
    mtbFilters,
    roadBikes,
    frameFilters,
    brandFilters,
} from "@/app/lib/filters";

export default function SideFilters({ filters, setFilters }: SideFiltersProps) {

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


    return (
        <div className="hidden md:flex h-[100dvh] min-w-64 overflow-y-auto flex-col items-start justify-start gap-8">
            <div className="text-text font-bold text-lg md:text-xl lg:text-2xl">
                cycleventure
            </div>
            <div className="text-center -mb-5 font-bold text-lg">
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
        </div>
    );
}