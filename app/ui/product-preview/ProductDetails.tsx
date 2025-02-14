import { useState } from "react";
import { ProductType } from "@/app/types/product-preview";
import SizeSelect from "@/app/ui/product-preview/SizeSelect";;
import QuantitySelect from "@/app/ui/product-preview/QuantitySelect";
import CartButton from "@/app/ui/product-preview/CartButton";
import { formatMoney } from "@/app/lib/utils";
import Star from "@/app/assets/icons/star.svg";

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
    const [quantity, setQuantity] = useState<number>(1);

    const getStars = (starCount: number) => {
        return Array.from({ length: starCount }).map((_, i) => (
            <Star key={i} className="w-3 h-3" />
        ));
    };

    return (
        <div className="flex flex-col items-start justify-center gap-2 lg:max-w-[35%]">
            <div className="font-bold text-4xl">
                {product.name}
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
                <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
                    <div>Brand:</div>
                    <div className="capitalize">{product.brand}</div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
                    <div>Frame:</div>
                    <div className="capitalize">{product.frameType}</div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
                    <div className="flex items-center justify-center">Rating:</div>
                    <div className="flex items-end justify-center gap-1">
                        {
                            getStars(product.rating)
                        }
                    </div>
                    <div className="flex items-center justify-center">
                        ({product.numberOfReviews})
                    </div>
                </div>
            </div>
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