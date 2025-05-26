import { useState } from "react";
import ProductCategories from "@/app/ui/product-preview/ProductCategories";
import SizeSelect from "@/app/ui/product-preview/SizeSelect";
import QuantitySelect from "@/app/ui/product-preview/QuantitySelect";
import ProductPrice from "@/app/ui/ProductPrice";
import CartButton from "@/app/ui/product-preview/CartButton";
import { useProductStore } from "@/useProductStore";

export default function ProductDetails() {

    const {
        product,
        selectedSize,
    } = useProductStore();

    const [sizeNotSelectedError, setSizeNotSelectedError] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="flex flex-col items-start justify-start gap-8 lg:max-w-[35%]">
            <div className="flex flex-col items-start justify-start gap-4">
                <div className="font-bold text-4xl">
                    {product?.name}
                </div>
                <ProductCategories />
            </div>
            <div className="font-bold text-2xl text-text">
                <ProductPrice />
            </div>
            <div>
                {product?.description}
            </div>
            <SizeSelect
                sizeError={sizeNotSelectedError}
                setSizeError={setSizeNotSelectedError}
            />
            <QuantitySelect
                quantity={quantity}
                setQuantity={setQuantity}
            />
            <CartButton
                quantity={quantity}
                setSizeError={setSizeNotSelectedError}
            />
        </div>
    );
}