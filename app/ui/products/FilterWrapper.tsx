import { Filters } from "@/app/types/Filters";

type FilterProps = {
    title: string;
    filters: Filters[];
}

export default function FilterWrapper({ title, filters }: FilterProps) {
    return (
        <div className="flex flex-col items-start justify-start gap-4">
            <div className="font-bold text-base">
                {title}
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-4">
                {filters.map((filter) => {
                    return (
                        <div 
                            key={filter.value}
                            className="w-full flex items-center justify-start gap-2 cursor-pointer"
                        >
                            <div className="w-4 aspect-square border border-text rounded-xl" />
                            <div className="text-sm">{filter.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}