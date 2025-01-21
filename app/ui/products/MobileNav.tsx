import Filter from "@/app/assets/icons/filter.svg";

type NavProps = {
    setShowFilters: (value: boolean) => void;
}

export default function MobileNav({ setShowFilters }: NavProps) {
    return (
        <div className="w-full p-8 bg-secondary flex items-center justify-center relative lg:hidden">
            <Filter 
                className="w-6 h-6 absolute top-1/2 left-[5%] -translate-y-1/2" 
                onClick={() => setShowFilters(true)}
            />
            <div className="text-text font-bold text-2xl">
                cycleventure
            </div>
        </div>
    );
}