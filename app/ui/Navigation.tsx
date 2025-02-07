import { useState } from "react";
import { User } from "@supabase/supabase-js";
import CycleventureLogo from "@/app/ui/cycleventure-logo";
import CartIcon from "@/app/assets/icons/cart.svg";
import ProfileIcon from "@/app/assets/icons/profile.svg";
import AuthCard from "@/app/ui/navigation/AuthCard";
import ProfileCard from "@/app/ui/navigation/ProfileCard";

type NavProps = {
    user: User | null;
    setUser: (value: User | null) => void;
}

export default function Navigation({
    user,
    setUser,
}: NavProps) {

    const [showAuthCard, setShowAuthCard] = useState<boolean>(false);

    return (
        <div
            id="navigation"
            className="w-full p-6 sticky top-0 left-0 z-40 bg-background flex items-center justify-between gap-4 border-b-2 border-slate-600"
        >
            <CycleventureLogo />
            <div className="flex items-center justify-center gap-4"></div>
            <div className="flex items-center justify-center relative gap-4">
                <div
                    className="flex items-center justify-center relative cursor-pointer"
                    onClick={() => setShowAuthCard(!showAuthCard)}
                >
                    <ProfileIcon className="h-8 w-auto" />
                    {
                        user ? (
                            <ProfileCard
                                email={user.email}
                                show={showAuthCard}
                                setUser={setUser}
                            />
                        ) : (
                            <AuthCard
                                show={showAuthCard}
                                setShow={setShowAuthCard}
                                setUser={setUser}
                            />
                        )
                    }
                </div>
                <CartIcon className="w-8 h-8 cursor-pointer" />
            </div>
        </div>
    );
}