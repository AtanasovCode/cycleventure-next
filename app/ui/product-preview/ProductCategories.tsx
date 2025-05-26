import { ProductTypes } from "@/app/types/product-types";
import Star from "@/app/assets/icons/star.svg";
import { useProductStore } from "@/useProductStore";

export default function ProductCategories() {

    const {
        product,
    } = useProductStore();


    const getStars = (starCount: number) => {
        return Array.from({ length: starCount }).map((_, i) => (
            <Star key={i} className="w-3 h-3" />
        ));
    };

    return (
        <div className="flex flex-col items-start justify-center gap-1">
            <div className="flex items-center justify-center gap-2 text-sm text-text">
                <div>Brand:</div>
                <div className="capitalize">{product?.brand}</div>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-text">
                <div>Frame:</div>
                <div className="capitalize">{product?.frameType}</div>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-text">
                <div className="flex items-center justify-center">Rating:</div>
                <div className="flex items-end justify-center gap-1">
                    {
                        getStars(product?.rating ? product.rating : 0)
                    }
                </div>
                <div className="flex items-center justify-center">
                    ({product?.numberOfReviews})
                </div>
            </div>
        </div>
    );
}