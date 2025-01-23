export type SortOptions = {
    name: string;
    value: string;
};

export type DropdownTypes = {
    selectedSortingOption: SortOptions;
    setSelectedSortingOption: (value: SortOptions) => void;
    sortOptions: SortOptions[];
}