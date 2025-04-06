import clsx from "clsx";
import { CartItemProps, UserCartItemProps } from "@/app/types/cart-types";
import { User } from "@supabase/supabase-js";

type ClearCartProps = {
    localCart: CartItemProps[] | null;
    setLocalCart: (value: null) => void;
    userCart: UserCartItemProps[] | null;
    setUserCart: (value: null) => void;
    user: User | null;
}


export default function ClearCartButton({
    localCart,
    setLocalCart,
    userCart,
    setUserCart,
    user,
}: ClearCartProps) {

    const clearLocalCart = () => {
        setLocalCart(null);
        sessionStorage.setItem("localCart", "");
    };

    return (
        <div className={clsx(
            "w-full flex items-center justify-start",
            {
                "hidden": user,
                "inline-block": !user
            }
        )}>
            <input
                type="button"
                value="clear cart"
                onClick={() => clearLocalCart()}
                className="text-sm underline text-accent bg-none border-none text-left cursor-pointer p-0 m-0"
            />
        </div>
    );
}