import clsx from "clsx";
import DropdownSort from "@/app/ui/products/DropdownSort";
import Filter from "@/app/assets/icons/filter.svg";
import { SortOptions } from "@/app/types/sort";

type HeaderTypes = {
    selectedSortingOption: SortOptions;
    setSelectedSortingOption: (value: SortOptions) => void;
    sortOptions: SortOptions[];
    showFilters: boolean;
    setShowFilters: (value: boolean) => void;
}

export default function ProductsHeader({
    selectedSortingOption,
    setSelectedSortingOption,
    sortOptions,
    showFilters,
    setShowFilters,
}: HeaderTypes) {
    return (
        <div className="w-full flex items-center justify-start gap-6">
            <Filter
                className={clsx(
                    "w-6 h-6 lg:hidden",
                    {
                        "fill-white": showFilters,
                        "fill-transparent": !showFilters,
                    }
                )}
                onClick={() => setShowFilters(!showFilters)}
            />
            <div className="flex items-center justify-center gap-4">
                <div className="font-xs md:font-sm">
                    Sort By:
                </div>
                <DropdownSort
                    selectedSortingOption={selectedSortingOption}
                    setSelectedSortingOption={setSelectedSortingOption}
                    sortOptions={sortOptions}
                />
            </div>
        </div>
    );
}