import { useState, useEffect } from "react";
import clsx from "clsx";
import CartItems from "@/app/ui/navigation/CartItems";
import CartTotal from "@/app/ui/navigation/CartTotal";
import CartAuthMessage from "@/app/ui/navigation/CartAuthMessage";
import ClearCartButton from "@/app/ui/navigation/ClearCartButton";
import ViewCartButton from "@/app/ui/navigation/ViewCartButton";
import { fetchUserCart } from "@/app/lib/data";
import { CartItemProps, UserCartItemProps } from "@/app/types/cart-types";
import { User } from "@supabase/supabase-js";

// icons
import Triangle from "@/app/assets/icons/triangle.svg";

type CartProps = {
    show: boolean;
    user: User | null;
    setUser: (value: User | null) => void;
    userCart: UserCartItemProps[] | null;
    setUserCart: (value: any) => void;
    localCart: CartItemProps[] | null;
    setLocalCart: (value: any) => void;
    totalCartPrice: number;
}

export default function Cart({
    show,
    user,
    setUser,
    localCart,
    setLocalCart,
    userCart,
    setUserCart,
    totalCartPrice,
}: CartProps) {
    return (
        <div
            className="
                flex flex-col items-center justify-between text-text bg-secondary rounded-md
                gap-4 p-4 z-50
                min-h-[20dvh] min-w-[92vw] lg:min-w-[28vw] lg:min-h-[20dvh] max-h-[90dvh] overflow-y-auto
                absolute top-[105%] -right-4 lg:-right-2 transition-all ease-in-out
            "
        >
            <div className="w-full flex flex-col items-start justify-start gap-6">
                {(userCart || localCart) ? (
                    <CartItems cart={userCart || localCart} local={!user} />
                ) : (
                    <div className="w-full flex items-center justify-center">Cart is empty</div>
                )}
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
            {user && userCart && <ViewCartButton />}
            <CartAuthMessage user={user} />
        </div>
    );
}