import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { fetchUserCart } from "@/app/lib/data";
import CartItems from "@/app/ui/navigation/CartItems";
import { CartItemProps } from "@/app/types/cart-types";
import { User } from "@supabase/supabase-js";
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
    const [userTotalCartPrice, setUserTotalCartPrice] = useState<number | null>(null);

    const clearLocalCart = () => {
        setLocalCart(null);
        sessionStorage.setItem("localCart", "");
    }

    // fetch data for both types of carts
    useEffect(() => {
        if (user?.id) {
            const fetchCart = async () => {
                const cartData = await fetchUserCart(user.id);
                
                if(cartData) {
                    const { cartItems, totalCartPrice } = cartData;
                    setUserCart(cartItems);
                    setUserTotalCartPrice(totalCartPrice);
                } else {
                    setUserCart([]);
                    setUserTotalCartPrice(null);
                }
            }

            fetchCart();
        } else {
            const cart = sessionStorage.getItem("localCart")
            cart && setLocalCart(JSON.parse(cart));
        }
    }, [user]);

    useEffect(() => {
        console.log(localCart);
    }, [localCart])

    useEffect(() => {
        console.log("USER CART: ", userCart);
    }, [userCart])


    return (
        <div className={clsx(
            "flex flex-col items-center justify-start absolute top-[150%] -right-6 transition-all ease-in-out text-text bg-secondary border-2 border-slate-500 rounded-lg",
            {
                "max-h-0 pointer-events-none border-none overflow-hidden": !show,
                "max-h-[80dvh] min-w-0 pointer-events-auto": show
            }
        )}>
            <Triangle className="w-[34px] h-auto absolute -top-5 right-6 z-30" />
            <div className="flex flex-col items-center justify-between gap-4 z-50 p-6 bg-secondary w-[85vw] lg:w-[30vw] h-[80dvh] rounded-lg overflow-y-auto">
                <div className="w-full flex flex-col items-start justify-start gap-6">
                    <div className="w-full font-bold text-xl text-center">
                        Your Cart
                    </div>
                    <div>
                        Total: ${userTotalCartPrice}
                    </div>
                    {
                        user ? (
                            <CartItems cart={userCart} />
                        ) : (
                            <CartItems cart={localCart} />
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