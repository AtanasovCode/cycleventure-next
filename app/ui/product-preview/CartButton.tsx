import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { ProductTypes } from "@/app/types/product-types";

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

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error("Unable to get user details", error);
                return;
            }

            setUser(data?.user || null);
        };

        getUser();

        // Listen for authentication state changes
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        // Cleanup to remove listener when component unmounts
        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);


    const addToCartWithoutAuth = () => {

        const currentLocalCart = sessionStorage.getItem("localCart");
        const parsedCurrentLocalCart = currentLocalCart ? JSON.parse(currentLocalCart) : [];

        const data = {
            product_id: product.id,
            brand: product.brand,
            name: product.name,
            price: product.price,
            photo: product.photos[0],
            size: selectedSize,
            quantity: quantity,
        }

        parsedCurrentLocalCart.unshift(data);

        sessionStorage.setItem("localCart", JSON.stringify(parsedCurrentLocalCart));
    }

    const handleClick = () => {
        if (!selectedSize) {
            setSizeError(true);
            return;
        }

        user ? "" : addToCartWithoutAuth();
    }

    return (
        <input
            type="button"
            value="Add to Cart"
            className="w-full text-center font-bold p-3 bg-accent text-black rounded-md"
            onClick={() => handleClick()}
        />
    );
}