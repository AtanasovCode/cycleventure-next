import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { ProductTypes } from "@/app/types/product-types";
import { addToCart } from "@/app/lib/data";
import { fetchUserCart } from "@/app/lib/data";
import CartAddIcon from "@/app/assets/icons/cart-add.svg";
import CartCheckIcon from "@/app/assets/icons/cart-check.svg";
import { useCartStore } from "@/useCartStore";

type ButtonProps = {
    product: ProductTypes;
    selectedSize: string | null;
    quantity: number;
    setSizeError: (value: boolean) => void;
}

export default function CartButton({
    product,
    selectedSize,
    quantity,
    setSizeError,
}: ButtonProps) {

    const supabase = createClient();

    const {
        setUserCart,
        setTotalCartPrice,
    } = useCartStore();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        supabase.auth.getUser().then((session) => {
            // do something here with the session like  ex: setState(session)
            setUser(session.data.user)
        });
    }, [])

    useEffect(() => {
        console.log(user?.role);
        console.log("PRODUCT DETAILS: ", product);
    }, [user])

    const addToCartWithoutAuth = () => {

        const currentLocalCart = sessionStorage.getItem("localCart");
        const parsedCurrentLocalCart = currentLocalCart ? JSON.parse(currentLocalCart) : [];

        const data = {
            id: product.id,
            product_id: product.id,
            name: product.name,
            final_price: product.final_price * quantity,
            photo: product?.photos[0],
            size: selectedSize,
            quantity: quantity,
            brand: product?.brand,
        }

        parsedCurrentLocalCart.unshift(data);

        sessionStorage.setItem("localCart", JSON.stringify(parsedCurrentLocalCart));
    }

    const handleClick = () => {
        if (!selectedSize) {
            setSizeError(true);
            return;
        }

        if (!user) {
            console.log("User is not authenticated, storing item to local cart");
            addToCartWithoutAuth();
            return;
        }

        console.log("Adding to cart for user:", user.id); // Debugging
        addToCart(user.id, product.id, quantity, selectedSize).then(() => {
            refreshCart();
        })
    };

    const refreshCart = async () => {
        if (user?.id) {
            const cartData = await fetchUserCart(user.id);
            if (cartData) {
                setUserCart(cartData.cartItems);
                setTotalCartPrice(cartData.totalCartPrice ?? 0);
            } else {
                setUserCart([]);
                setTotalCartPrice(0);
            }
        }
    };



    return (
        <button
            className="w-full text-center font-bold p-3 bg-accent text-black rounded-md cursor-pointer flex items-center justify-center gap-2"
            onClick={() => handleClick()}
        >
            <CartAddIcon className="w-6 h-auto" />
            <p>
                Add to Cart
            </p>
        </button>
    );
}