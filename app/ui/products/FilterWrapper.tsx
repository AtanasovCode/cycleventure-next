import { Filters, DifferentFilters } from "@/app/types/Filters";

type FilterWrapperProps = {
    title: string;
    differentFilters: DifferentFilters[];
    handleFilterChange: (filterName: string) => void;
    checkFilter: (filterName: string) => boolean;
};

export default function FilterWrapper({ title, differentFilters, handleFilterChange, checkFilter }: FilterWrapperProps) {
    return (
        <div className="flex flex-col items-start justify-start gap-4">
            <div className="font-bold text-base">
                {title}
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
                {differentFilters.map((filter) => {
                    return (
                        <div
                            key={filter.value}
                            className="w-full flex items-center justify-start gap-2 cursor-pointer ml-2"
                            onClick={() => handleFilterChange(filter.value)}
                        >
                            <div
                                className="w-3 aspect-square border border-text rounded-sm"
                                style={{ backgroundColor: checkFilter(filter.value) ? "white" : undefined }}
                            />
                            <div className="text-sm">{filter.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}