import Image from "next/image";
import { ProductType } from "@/app/types/product-preview";
import PhotoPreview from "@/app/ui/product-preview/PhotoPreview";
import Star from "@/app/assets/icons/star.svg";
import { formatMoney } from "@/app/lib/utils";

type ProductProps = {
    product: ProductType;
}

export default function Product({
    product,
}: ProductProps) {

    const getStars = (starCount: number) => {
        return Array.from({ length: starCount }).map((_, i) => (
            <Star key={i} className="w-3 h-3" />
        ));
    };


    return (
        <div className="flex flex-1 flex-col lg:flex-row items-center justify-start lg:justify-between py-4 px-4 sm:px-12 lg:px-0 lg:max-w-[90vw] lg:gap-16">
            <PhotoPreview 
                photos={product.photos}
                name={product.name}
                brand={product.brand}
            />
            <div className="flex flex-col items-start justify-center gap-2 lg:max-w-[30%]">
                <div className="font-bold text-4xl">
                    {product.name}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
                    <div>Brand:</div>
                    <div className="capitalize">{product.brand}</div>
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
                <div className="font-bold text-2xl my-4">
                    {formatMoney.format(product.price)}
                </div>
                <div>
                    {product.description}
                </div>
            </div>
        </div>
    );
}