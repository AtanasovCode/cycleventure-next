import { User } from "@supabase/supabase-js";
import { ProductTypes } from "@/app/types/product-types";

type ButtonProps = {
    user: User | null;
    product: ProductTypes;
    selectedSize: string | null;
    quantity: number;
    setSizeError: (value: boolean) => void;
    // user: User | null;
}

export default function CartButton({
    user,
    product,
    selectedSize,
    quantity,
    setSizeError,
}: ButtonProps) {

    const addToCartWithoutAuth = () => {
        const data = {
            product_id: product.id,
            brand: product.brand,
            name: product.name,
            price: product.price,
            photo: product.photos[0],
            size: selectedSize,
            quantity: quantity,
        }

        sessionStorage.setItem("localCart", JSON.stringify(data));
    }

    const handleClick = () => {
        if(!selectedSize) {
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