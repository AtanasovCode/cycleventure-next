import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import CartItems from "@/app/ui/navigation/CartItems";
import { fetchUserCart } from "@/app/lib/data";
import { CartItemProps } from "@/app/types/cart-types";
import { User } from "@supabase/supabase-js";
import { formatMoney } from "@/app/lib/utils";

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
    const [totalCartPrice, setTotalCartPrice] = useState<number | null>(null);

    const clearLocalCart = () => {
        setLocalCart(null);
        sessionStorage.setItem("localCart", "");
    }

    // fetch data for both types of carts
    useEffect(() => {
        if (user?.id) {
            const fetchCart = async () => {
                const cartData = await fetchUserCart(user.id);

                if (cartData) {
                    const { cartItems, totalCartPrice } = cartData;
                    setUserCart(cartItems);
                    setTotalCartPrice(totalCartPrice);
                } else {
                    setUserCart([]);
                    setTotalCartPrice(null);
                }
            }

            fetchCart();
        } else {
            const cart = sessionStorage.getItem("localCart")
            cart && setLocalCart(JSON.parse(cart));
        }
    }, [user]);

    useEffect(() => {
        let total = 0;
        localCart?.map((item) => {
            total += item.final_price;
        })

        setTotalCartPrice(total);
    }, [localCart])


    return (
        <div className={clsx(
            "flex flex-col items-center justify-start absolute top-[110%] -right-4 lg:-right-6 transition-all ease-in-out text-text bg-secondary border border-slate-500",
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
                    <div className={clsx(
                        "w-full flex items-center justify-start",
                        {
                            "hidden": !localCart,
                            "inline-block": localCart
                        }
                    )}>
                        <input
                            type="button"
                            value="clear cart"
                            onClick={() => clearLocalCart()}
                            className="text-sm underline text-accent bg-none border-none text-left cursor-pointer p-0 m-0"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                    <div className="w-full text-sm lg:text-base flex items-center justify-between">
                        <div>
                            Subtotal
                        </div>
                        <div>
                            {formatMoney.format(totalCartPrice)}
                        </div>
                    </div>
                    <div className="w-full text-lg lg:text-xl flex items-center justify-between">
                        <div>
                            Total
                        </div>
                        <div>
                            {formatMoney.format(totalCartPrice)}
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    {
                        user ? (
                            <div>User signed in</div>
                        ) : (
                            <div className="w-full flex flex-col items-start justify-center gap-4">
                                <div className="w-full text-left text-slate-300">
                                    <Link href="/sign-in" className="text-accent underline">Sign In</Link>
                                    <span> to save your cart and proceed to checkout</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}