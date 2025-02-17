import { useState, useEffect } from "react";
import { fetchUserCart } from "@/app/lib/data";
import CartItems from "@/app/ui/navigation/CartItems";
import { CartType } from "@/app/types/cart-types";
import clsx from "clsx";
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

    const [localCart, setLocalCart] = useState<CartType[] | null>(null); // viewing cart as guest
    const [userCart, setUserCart] = useState<CartType[] | null>(null) // viewing cart as authenticated user

    // fetch data for both types of carts
    useEffect(() => {
        if(user) {
            return;
        } else {
            const cart = sessionStorage.getItem("localCart")
            cart && setLocalCart(JSON.parse(cart));
        }
    }, []);

    useEffect(() => {
        console.log(localCart);
    }, [localCart])


    return (
        <div className={clsx(
            "flex flex-col items-center justify-start absolute top-[160%] right-0 rounded-md transition-all ease-in-out text-text bg-secondary border-2 border-slate-600 z-50",
            {
                "max-h-0 pointer-events-none border-none overflow-hidden": !show,
                "max-h-64 min-w-0 pointer-events-auto": show
            }
        )}>
            <Triangle className="w-[34px] h-auto absolute -top-6 right-0 z-30" />
            <div className="flex flex-col items-center justify-start z-50 p-6 gap-6 bg-secondary min-w-[85vw] lg:min-w-[30vw] h-[85dvh] rounded-md">
                <div className="font-bold text-xl text-center">
                    Your Cart
                </div>
                {
                    user ? (
                        <CartItems cart={userCart} />
                    ) : (
                        <CartItems cart={localCart} />
                    )
                }
            </div>
        </div>
    );
}