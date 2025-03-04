import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import clsx from "clsx";
import { User } from "@supabase/supabase-js";
import { fetchUserCart } from "@/app/lib/data";
import CycleventureLogo from "@/app/ui/cycleventure-logo";
import CartIcon from "@/app/assets/icons/cart.svg";
import ProfileIcon from "@/app/assets/icons/profile.svg";
import AuthCard from "@/app/ui/navigation/AuthCard";
import ProfileCard from "@/app/ui/navigation/ProfileCard";
import Cart from "@/app/ui/navigation/Cart";

type NavProps = {}

export default function Navigation() {

    const supabase = createClient();

    const [user, setUser] = useState<User | null>(null);
    const [showAuthCard, setShowAuthCard] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);

    useEffect(() => {
        supabase.auth.getUser().then((session) => {
            // do something here with the session like  ex: setState(session)
            setUser(session.data.user)
        });
    }, [])

    return (
        <div
            id="navigation"
            className="w-full px-6 py-2 sticky top-0 left-0 z-40 bg-background border-b-2 border-slate-600 flex items-center justify-between gap-4"
        >
            <CycleventureLogo />
            <div className="flex items-center justify-center relative gap-2">
                <div
                    className="flex items-center justify-center relative cursor-pointer"
                    onClick={() => setShowAuthCard(!showAuthCard)}
                >
                    <ProfileIcon className={clsx(
                        "h-6 w-auto",
                        {
                            "fill-white": showAuthCard, // shown
                            "fill-primary": !showAuthCard // hidden
                        }
                    )} />
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
                            />
                        )
                    }
                </div>
                <div
                    className="flex items-center justify-center relative cursor-pointer"
                    onClick={() => setShowCart(!showCart)}
                >
                    <CartIcon className={clsx(
                        "w-6 h-8",
                        {
                            "fill-white": showCart, // shown
                            "fill-primary": !showCart // hidden
                        }
                    )} />
                    {
                        showCart && (
                            <Cart
                                show={showCart}
                                user={user}
                                setUser={setUser}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}