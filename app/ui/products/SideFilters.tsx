import { SideFiltersProps } from "@/app/types/Filters";
import FilterWrapper from "@/app/ui/products/FilterWrapper";
import { mtbFilters, frameFilters } from "@/app/lib/filters";
import CycleventureLogo from "@/app/ui/cycleventure-logo";

export default function SideFilters({ setFilter }: SideFiltersProps) {
    return (
        <div className="hidden md:flex h-[100dvh] min-w-64 overflow-y-auto flex-col items-start justify-start gap-10">
            <div className="text-text font-bold text-lg md:text-xl lg:text-2xl">
                cycleventure
            </div>
            <div className="text-center -mb-6 font-bold text-lg">
                Filters
            </div>
            <FilterWrapper title="Mountain Bikes" filters={mtbFilters} />
            <FilterWrapper title="Frame Type" filters={frameFilters} />
        </div>
    );
}