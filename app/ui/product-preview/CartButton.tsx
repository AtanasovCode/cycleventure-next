import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import clsx from "clsx";
import { User } from "@supabase/supabase-js";
import { ProductTypes } from "@/app/types/product-types";
import { addToCart } from "@/app/lib/data";
import { fetchUserCart } from "@/app/lib/data";
import CartAddIcon from "@/app/assets/icons/cart-add.svg";
import CartCheckIcon from "@/app/assets/icons/cart-check.svg";
import { useCartStore } from "@/useCartStore";
import { useProductStore } from "@/useProductStore";

type ButtonProps = {
    quantity: number;
    setSizeError: (value: boolean) => void;
}

export default function CartButton({
    setSizeError,
    quantity,
}: ButtonProps) {

    const supabase = createClient();

    const {
        product,
        selectedSize,
    } = useProductStore();

    const {
        userCart, setUserCart,
        localCart, setLocalCart,
        setTotalCartPrice,
    } = useCartStore();

    const [user, setUser] = useState<User | null>(null);
    const [itemInCart, setItemInCart] = useState<boolean | undefined>(false);

    useEffect(() => {
        supabase.auth.getUser().then((session) => {
            // do something here with the session like  ex: setState(session)
            setUser(session.data.user)
        });
    }, [])

    const addToCartWithoutAuth = () => {

        const currentLocalCart = sessionStorage.getItem("localCart");
        const updatedLocalCart = currentLocalCart ? JSON.parse(currentLocalCart) : [];

        const data = {
            id: product?.id,
            product_id: product?.id,
            name: product?.name,
            final_price: product?.final_price ? product.final_price * quantity : 0,
            photo: product?.photos[0],
            size: selectedSize,
            quantity: quantity,
            brand: product?.brand,
        }

        updatedLocalCart.unshift(data);

        sessionStorage.setItem("localCart", JSON.stringify(updatedLocalCart));
        setLocalCart(updatedLocalCart);
    }

    const refreshCart = async () => {
        if (user?.id) {
            const cartData = await fetchUserCart(user.id);
            if (cartData && (cartData.cartItems?.length > 0 || cartData.totalCartPrice > 0)) {
                setUserCart(cartData.cartItems);
                setTotalCartPrice(cartData.totalCartPrice ?? 0);
            } else {
                setUserCart(null);
                setTotalCartPrice(0);
            }
        }
    };

    const handleClick = () => {
        if (!selectedSize) {
            setSizeError(true);
            return;
        }

        if (itemInCart) return;

        if (!user || !product) {
            console.log("User is not authenticated, storing item to local cart");
            addToCartWithoutAuth();
            return;
        }

        addToCart(user.id, product?.id, quantity, selectedSize).then(() => {
            refreshCart();
        })
    };

    useEffect(() => {
        const userCartHasItem = userCart?.some((item) => item.product_id === product?.id);
        const localCartHasItem = localCart?.some((item) => item.product_id === product?.id);

        setItemInCart(userCartHasItem || localCartHasItem);
    }, [localCart, userCart, product?.id])

    return (
        <button
            className={clsx(
                "w-full text-center font-bold p-3 bg-accent text-black rounded-md cursor-pointer",
                "flex items-center justify-center gap-2",
                {
                    "cursor-pointer": !itemInCart,
                    "cursor-not-allowed": itemInCart,
                }
            )}
            onClick={() => handleClick()}
        >
            {
                itemInCart ? (
                    <>
                        <CartCheckIcon className="w-6 h-auto" />
                        <p>
                            Item in Cart
                        </p>
                    </>
                ) : (
                    <>
                        <CartAddIcon className="w-6 h-auto" />
                        <p>
                            Add to Cart
                        </p>
                    </>
                )
            }
        </button>
    );
}