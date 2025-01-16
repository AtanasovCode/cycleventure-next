import { Filters } from "@/app/types/Filters";

type FilterProps = {
    setFilter: (filter: string) => void;
    title: string;
    filters: Filters[];
}

export default function FilterWrapper({ setFilter, title, filters }: FilterProps) {
    return (
        <div className="flex flex-col items-start justify-start gap-4">
            <div className="font-bold text-base">
                {title}
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
                {filters.map((filter) => {
                    return (
                        <div 
                            key={filter.value}
                            onClick={() => setFilter(filter.value)}
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