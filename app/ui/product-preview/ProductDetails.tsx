import { useState } from "react";
import { ProductType } from "@/app/types/product-preview";
import ProductCategories from "@/app/ui/product-preview/ProductCategories";
import SizeSelect from "@/app/ui/product-preview/SizeSelect";
import QuantitySelect from "@/app/ui/product-preview/QuantitySelect";
import CartButton from "@/app/ui/product-preview/CartButton";
import { formatMoney } from "@/app/lib/utils";

type ProductProps = {
    product: ProductType;
    selectedSize: string | null;
    setSelectedSize: (value: string) => void;
}

export default function ProductDetails({
    product,
    selectedSize,
    setSelectedSize,
}: ProductProps) {

    const [sizeNotSelectedError, setSizeNotSelectedError] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1)

    return (
        <div className="flex flex-col items-start justify-center gap-2 lg:max-w-[35%]">
            <div className="font-bold text-4xl">
                {product.name}
            </div>
            <ProductCategories 
                product={product} 
            />
            <div className="font-bold text-2xl my-4 text-accent">
                {formatMoney.format(product.price)}
            </div>
            <div>
                {product.description}
            </div>
            <QuantitySelect 
                quantity={quantity}
                setQuantity={setQuantity}
            />
            <SizeSelect
                sizes={product.sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                sizeError={sizeNotSelectedError}
                setSizeError={setSizeNotSelectedError}
            />
            <CartButton
                selectedSize={selectedSize}
                setSizeError={setSizeNotSelectedError}
            />
        </div>
    );
}