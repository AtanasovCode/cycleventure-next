import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import clsx from "clsx";
import { User } from "@supabase/supabase-js";
import { fetchUserCart } from "@/app/lib/data";
import CycleventureLogo from "@/app/ui/cycleventure-logo";
import CartIcon from "@/app/assets/icons/cart.svg";
import ProfileIcon from "@/app/assets/icons/profile.svg";
import CardWrapper from "@/app/ui/navigation/CardWrapper";
import AuthCard from "@/app/ui/navigation/AuthCard";
import ProfileCard from "@/app/ui/navigation/ProfileCard";
import Cart from "@/app/ui/navigation/Cart";
import ThemeToggle from "@/app/ui/navigation/ThemeToggle";
import Triangle from "@/app/assets/icons/triangle.svg";
import { useCartStore } from "@/useCartStore";


type NavProps = {}

export default function Navigation() {

    const supabase = createClient();

    const [user, setUser] = useState<User | null>(null);

    const {
        localCart, setLocalCart,
        userCart, setUserCart,
        showCart, setShowCart,
        showAuthCard, setShowAuthCard,
        totalCartPrice, setTotalCartPrice,
    } = useCartStore();

    useEffect(() => {
        supabase.auth.getUser().then((session) => {
            // do something here with the session like  ex: setState(session)
            setUser(session.data.user)
        });
    }, []);

    // fetch data for both types of carts
    useEffect(() => {
        if (user?.id) {
            const fetchCart = async () => {
                const cartData = await fetchUserCart(user.id);

                if (cartData && (cartData.cartItems?.length > 0 || cartData.totalCartPrice > 0)) {
                    const { cartItems, totalCartPrice } = cartData;
                    setUserCart(cartItems);
                    setTotalCartPrice(totalCartPrice ?? 0);
                } else {
                    setUserCart(null);
                    setTotalCartPrice(0);
                }
            }

            fetchCart();
        } else {
            try {
                const cart = sessionStorage.getItem("localCart");
                cart && setLocalCart(JSON.parse(cart));
            } catch (error) {
                console.error("Error parsing localCart from sessionStorage:", error);
                setLocalCart(null);
            }

        }
    }, [user]);

    useEffect(() => {
        setTotalCartPrice(localCart?.reduce((total, item) => total + item.final_price, 0) ?? 0);
    }, [localCart])

    return (
        <div
            id="navigation"
            className="w-full px-6 py-2 sticky top-0 left-0 z-40 border-b-2 border-slate-500 bg-background flex items-center justify-between gap-4"
        >
            <CycleventureLogo />
            <div className="flex items-center justify-center relative gap-2">
                <ThemeToggle />
                <div
                    className="flex items-center justify-center relative"

                >
                    <ProfileIcon
                        className={clsx(
                            "h-6 w-auto cursor-pointer fill-text",
                        )}
                        onClick={() => setShowAuthCard(!showAuthCard)}
                    />
                    {
                        showAuthCard && (
                            <>
                                <Triangle className="w-[48px] h-auto absolute z-30 left-1/2 -translate-x-1/2 -bottom-[160%] stroke-none fill-secondary pointer-events-none" />
                                <CardWrapper>
                                    {
                                        user ? (
                                            <ProfileCard
                                                email={user.email}
                                                setUser={setUser}
                                            />
                                        ) : (
                                            <AuthCard />
                                        )
                                    }
                                </CardWrapper>
                            </>
                        )
                    }
                </div>
                <div
                    className="flex items-center justify-center relative"
                >
                    <CartIcon
                        className={clsx(
                            "w-6 h-8 cursor-pointer fill-text",
                        )}
                        onClick={() => setShowCart(!showCart)}
                    />
                    {
                        showCart && (
                            <>
                                <Triangle className="w-[48px] h-auto absolute z-30 left-1/2 -translate-x-1/2 -bottom-[110%] stroke-none fill-secondary pointer-events-none" />
                                <Cart
                                    user={user}
                                />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}