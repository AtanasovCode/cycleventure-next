import { useState } from "react";
import clsx from "clsx";
import ArrowDown from "@/app/assets/icons/arrow-down.svg";

type SortOptions = {
    name: string;
    value: string;
};

export default function DropdownSort() {

    const [showSort, setShowSort] = useState<boolean>(false);
    const sortOptions: SortOptions[] = [
        { name: "Price (low to high)", value: "price-low-to-high" },
        { name: "Price (high to low)", value: "price-high-to-low" },
        { name: "A-Z", value: "a-z" },
    ];

    return (
        <div
            className="relative p-4 bg-secondary rounded-xl text-sm cursor-pointer border border-slate-600"
            onClick={() => setShowSort(!showSort)}
        >
            <div className="flex items-center justify-cetner gap-2">
                <p>Price (low to high)</p>
                <ArrowDown className="w-4 h-4" />
            </div>
            <div
                className={clsx(
                    "w-full flex flex-col bg-secondary absolute left-0 border border-slate-600 border-t-transparent z-[100] transition-all ease-in-out duration-300",
                    {
                        "translate-y-[10%]": showSort,
                        "-translate-y-full opacity-0": !showSort,
                    }
                )}
            >
                {
                    sortOptions.map((option) => {
                        return (
                            <div className="w-full text-left text-sm py-2 px-4 border border-transparent border-b-slate-600 cursor-pointer rounded-bl-xl rounded-br-xl">
                                {option.name}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}