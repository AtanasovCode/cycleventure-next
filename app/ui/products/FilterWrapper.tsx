import { Filters, DifferentFilters } from "@/app/types/Filters";

type FilterWrapperProps = {
    title: string;
    differentFilters: DifferentFilters[];
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export default function FilterWrapper({ title, differentFilters, setFilters }: FilterWrapperProps) {
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
                        >
                            <div className="w-3 aspect-square border border-text rounded-sm" />
                            <div className="text-sm">{filter.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}