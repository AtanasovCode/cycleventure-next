import { DifferentFilters } from "@/app/types/Filters";
import Checkmark from "@/app/assets/icons/checkmark.svg";
import clsx from "clsx";

type FilterWrapperProps = {
    title: string;
    differentFilters: DifferentFilters[];
    handleFilterChange: (filterName: string) => void;
    checkFilter: (filterName: string) => boolean;
};

export default function FilterWrapper({ title, differentFilters, handleFilterChange, checkFilter }: FilterWrapperProps) {
    return (
        <div className="flex flex-col items-start justify-start gap-4">
            <div className="font-bold text-xl lg:text-base">
                {title}
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-4">
                {differentFilters.map((filter) => {
                    return (
                        <div
                            key={filter.value}
                            className="w-full flex items-center justify-start gap-3 cursor-pointer ml-2"
                            onClick={() => {
                                handleFilterChange(filter.value)
                                window.scrollTo(0, 0)
                            }}
                        >
                            <div
                                className={clsx(
                                    "w-5 lg:w-4 aspect-square overflow-hidden rounded-sm border border-text flex items-center justify-center",
                                )}
                            >
                                <Checkmark 
                                    className={clsx(
                                        "w-[100%] h-[100%] fill-text",
                                        {
                                            "hidden": !checkFilter(filter.value),
                                            "inline-block": checkFilter(filter.value)
                                        }
                                    )}
                                />
                            </div>
                            <div className="text-xl lg:text-sm">{filter.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}