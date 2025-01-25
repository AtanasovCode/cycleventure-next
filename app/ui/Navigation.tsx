import CycleventureLogo from "@/app/ui/cycleventure-logo";

export default function Navigation() {
    return (
        <div className="w-full p-6 flex items-center justify-between gap-4 border-b-2 border-slate-600">
            <CycleventureLogo />
            <div className="flex items-center justify-center gap-4"></div>
        </div>
    );
}