import { SideFiltersProps } from "@/app/types/Filters";
import FilterWrapper from "@/app/ui/products/FilterWrapper";
import {
    mtbFilters,
    roadBikes,
    frameFilters
} from "@/app/lib/filters";
import CycleventureLogo from "@/app/ui/cycleventure-logo";

export default function SideFilters({ setFilters }: SideFiltersProps) {
    return (
        <div className="hidden md:flex h-[100dvh] min-w-64 overflow-y-auto flex-col items-start justify-start gap-8">
            <div className="text-text font-bold text-lg md:text-xl lg:text-2xl">
                cycleventure
            </div>
            <div className="text-center -mb-5 font-bold text-lg">
                Filters
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
                <FilterWrapper setFilter={setFilters} title="Mountain Bikes" filters={mtbFilters} />
                <FilterWrapper setFilter={setFilters} title="Road Bikes" filters={roadBikes} />
                <FilterWrapper setFilter={setFilters} title="Frame Type" filters={frameFilters} />
            </div>
        </div>
    );
}