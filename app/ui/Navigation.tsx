import CycleventureLogo from "@/app/ui/cycleventure-logo";
import CartIcon from "@/app/assets/icons/cart.svg";
import ProfileIcon from "@/app/assets/icons/profile.svg";

export default function Navigation() {
    return (
        <div 
            id="navigation"
            className="w-full p-6 sticky top-0 left-0 z-40 bg-background flex items-center justify-between gap-4 border-b-2 border-slate-600"
        >
            <CycleventureLogo />
            <div className="flex items-center justify-center gap-4"></div>
            <div className="flex items-center justify-center relative gap-4">
                <ProfileIcon className="w-8 h-auto cursor-pointer" />
                <CartIcon className="w-8 h-8 cursor-pointer" />
            </div>
        </div>
    );
}