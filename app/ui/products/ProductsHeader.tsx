import DropdownSort from "@/app/ui/products/DropdownSort";
import { SortOptions } from "@/app/types/sort";

type HeaderTypes = {
    selectedSortingOption: SortOptions;
    setSelectedSortingOption: (value: SortOptions) => void;
    sortOptions: SortOptions[];
}

export default function ProductsHeader({
    selectedSortingOption,
    setSelectedSortingOption,
    sortOptions,
}: HeaderTypes) {
    return (
        <div className="w-full flex items-center justify-start">
            <div className="flex items-center justify-center gap-4">
                <div className="font-sm">
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