import ArrowDown from "@/app/assets/icons/arrow-down.svg";

export default function DropdownSort() {
    return (
        <div className="relative p-4 bg-secondary rounded-xl text-sm cursor-pointer">
            <div className="flex items-center justify-cetner gap-2">
                <p>Price (low to high)</p>
                <ArrowDown className="w-4 h-4" />
            </div>
            <div></div>
        </div>
    );
}