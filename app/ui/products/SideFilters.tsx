import { SideFiltersProps } from "@/app/types/Filters";
import FilterWrapper from "@/app/ui/products/FilterWrapper";
import { mtbFilters, frameFilters } from "@/app/lib/filters";
import CycleventureLogo from "@/app/ui/cycleventure-logo";

export default function SideFilters({ setFilter }: SideFiltersProps) {
    return (
        <div className="h-[100dvh] min-w-64 overflow-y-auto flex flex-col items-start justify-start gap-12">
            <CycleventureLogo />
            <div className="text-center mb-8 font-bold text-lg">
                Filters
            </div>
            <FilterWrapper title="Mountain Bikes" filters={mtbFilters} />
            <FilterWrapper title="Frame Type" filters={frameFilters} />
        </div>
    );
}