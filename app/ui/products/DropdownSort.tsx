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
            className="relative p-4 bg-secondary rounded-xl text-sm cursor-pointer border border-slate-600 min-w-44"
            onClick={() => setShowSort(!showSort)}
        >
            <div className="w-full flex items-center justify-between gap-2">
                <p>{selectedSortingOption["name"]}</p>
                <ArrowDown className="w-4 h-4" />
            </div>
            <div
                className={clsx(
                    "w-full flex flex-col bg-secondary absolute left-0 border border-slate-600 border-t-transparent z-[100] transition-all ease-in-out duration-300",
                    {
                        "translate-y-[10%]": showSort,
                        "-translate-y-[300%] h-0 opacity-0": !showSort,
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