import { useState } from "react";
import clsx from "clsx";
import ArrowDown from "@/app/assets/icons/arrow-down.svg";
import { DropdownTypes, SortOptions } from "@/app/types/sort";

export default function DropdownSort({
    selectedSortingOption,
    setSelectedSortingOption,
    sortOptions,
}: DropdownTypes) {

    const [showSort, setShowSort] = useState<boolean>(false);

    return (
        <div
            className="relative p-2 bg-secondary text-xs md:text-sm cursor-pointer border border-slate-700 min-w-32 lg:min-w-40"
            onClick={() => setShowSort(!showSort)}
        >
            <div className="w-full flex items-center justify-between gap-2">
                <p>{selectedSortingOption["name"]}</p>
                <ArrowDown className="w-4 h-4" />
            </div>
            <div
                className={clsx(
                    "w-full flex flex-col bg-secondary overflow-hidden absolute left-0 translate-y-[3%] border border-slate-600 border-t-transparent z-[100] transition-all ease-in-out duration-300",
                    {
                        "max-h-0 pointer-events-none border-none": !showSort, // Hidden
                        "max-h-64 pointer-events-auto": showSort, // Visible
                    }
                )}
            >
                {
                    sortOptions.map((option) => {
                        return (
                            <div
                                key={option["value"]}
                                onClick={() => {
                                    setSelectedSortingOption(option);
                                    setShowSort(false);
                                }}
                                className="w-full text-left text-sm py-2 px-4 border border-transparent border-b-slate-600 cursor-pointer rounded-bl-xl rounded-br-xl"
                            >
                                {option["name"]}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}