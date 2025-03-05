import { useState, useEffect } from "react";
import clsx from "clsx";
import CartItems from "@/app/ui/navigation/CartItems";
import CartTotal from "@/app/ui/navigation/CartTotal";
import CartAuthMessage from "@/app/ui/navigation/CartAuthMessage";
import ClearCartButton from "@/app/ui/navigation/ClearCartButton";
import { fetchUserCart } from "@/app/lib/data";
import { CartItemProps } from "@/app/types/cart-types";
import { User } from "@supabase/supabase-js";

// icons
import Triangle from "@/app/assets/icons/triangle.svg";

type CartProps = {
    show: boolean;
    user: User | null;
    setUser: (value: User | null) => void;
}

export default function Cart({
    show,
    user,
    setUser,
}: CartProps) {

    const [localCart, setLocalCart] = useState<CartItemProps[] | null>(null); // viewing cart as guest
    const [userCart, setUserCart] = useState<CartItemProps[] | null>(null) // viewing cart as authenticated user
    const [totalCartPrice, setTotalCartPrice] = useState<number>(0);

    // fetch data for both types of carts
    useEffect(() => {
        if (user?.id) {
            const fetchCart = async () => {
                const cartData = await fetchUserCart(user.id);

                if (cartData) {
                    const { cartItems, totalCartPrice } = cartData;
                    setUserCart(cartItems);
                    setTotalCartPrice(totalCartPrice ?? 0);
                } else {
                    setUserCart([]);
                    setTotalCartPrice(null);
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
        <div className={clsx(
            "flex flex-col items-center justify-start absolute top-[110%] -right-4 lg:-right-2 transition-all ease-in-out text-text bg-secondary border border-slate-500",
            {
                "max-h-0 pointer-events-none border-none overflow-hidden": !show,
                "max-h-[80dvh] min-w-0 pointer-events-auto": show
            }
        )}>
            <Triangle className="w-[28px] h-auto absolute -top-3 right-3 lg:right-5 z-30" />
            <div className="flex flex-col items-center justify-between gap-4 z-50 p-4 bg-secondary min-h-[35dvh] min-w-[85vw] lg:min-w-[33vw] lg:min-h-[30dvh] max-h-[90dvh] overflow-y-auto">
                <div className="w-full flex flex-col items-start justify-start gap-6">
                    {
                        user ? (
                            <CartItems cart={userCart} local={false} />
                        ) : (
                            <CartItems cart={localCart} local={true} />
                        )
                    }
                    <ClearCartButton
                        localCart={localCart}
                        setLocalCart={setLocalCart}
                        userCart={userCart}
                        setUserCart={setUserCart}
                    />
                </div>
                <CartTotal
                    cart={user ? userCart : localCart}
                    totalCartPrice={totalCartPrice}
                />
                <CartAuthMessage user={user} />
            </div>
        </div>
    );
}