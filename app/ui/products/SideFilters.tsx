import { Filters, DifferentFilters } from "@/app/types/Filters";
import FilterWrapper from "@/app/ui/products/FilterWrapper";

type SideFiltersProps = {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

import {
    mtbFilters,
    roadBikes,
    frameFilters
} from "@/app/lib/filters";

export default function SideFilters({ filters, setFilters }: SideFiltersProps) {
    return (
        <div className="hidden md:flex h-[100dvh] min-w-64 overflow-y-auto flex-col items-start justify-start gap-8">
            <div className="text-text font-bold text-lg md:text-xl lg:text-2xl">
                cycleventure
            </div>
            <div className="text-center -mb-5 font-bold text-lg">
                Filters
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
                <FilterWrapper title="Mountain Bikes" differentFilters={mtbFilters} setFilters={setFilters} />
                <FilterWrapper title="Road Bikes" differentFilters={roadBikes} setFilters={setFilters} />
                <FilterWrapper title="Frame Type" differentFilters={frameFilters} setFilters={setFilters} />
            </div>
        </div>
    );
}