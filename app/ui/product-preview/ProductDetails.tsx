import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { ProductTypes } from "@/app/types/product-types";
import ProductCategories from "@/app/ui/product-preview/ProductCategories";
import SizeSelect from "@/app/ui/product-preview/SizeSelect";
import QuantitySelect from "@/app/ui/product-preview/QuantitySelect";
import ProductPrice from "@/app/ui/ProductPrice";
import CartButton from "@/app/ui/product-preview/CartButton";

type ProductProps = {
    product: ProductTypes;
    selectedSize: string | null;
    setSelectedSize: (value: string) => void;
}

export default function ProductDetails({
    product,
    selectedSize,
    setSelectedSize,
}: ProductProps) {

    const [sizeNotSelectedError, setSizeNotSelectedError] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="flex flex-col items-start justify-start gap-8 lg:max-w-[35%]">
            <div className="flex flex-col items-start justify-start gap-4">
                <div className="font-bold text-4xl">
                    {product.name}
                </div>
                <ProductCategories
                    product={product}
                />
            </div>
            <div className="font-bold text-2xl text-accent">
                <ProductPrice
                    price={product.price}
                    finalPrice={product.final_price}
                    isOnSale={product.isOnSale}
                />
            </div>
            <div>
                {product.description}
            </div>
            <SizeSelect
                sizes={product.sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                sizeError={sizeNotSelectedError}
                setSizeError={setSizeNotSelectedError}
            />
            <QuantitySelect
                quantity={quantity}
                setQuantity={setQuantity}
            />
            <CartButton
                product={product}
                selectedSize={selectedSize}
                quantity={quantity}
                setSizeError={setSizeNotSelectedError}
                productID={product.id}
            />
        </div>
    );
}