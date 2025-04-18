import Image from "next/image";
import { ProductTypes } from "@/app/types/product-types";
import PhotoPreview from "@/app/ui/product-preview/PhotoPreview";
import ProductDetails from "@/app/ui/product-preview/ProductDetails";
import { useProductStore } from "@/useProductStore";

type ProductProps = {
    product: ProductTypes;
    selectedSize: string | null;
    setSelectedSize: (value: string) => void;
}

export default function Product() {

    const {
        product,
        selectedSize,
        setSelectedSize,
    } = useProductStore();
    
    return (
        <div className="flex flex-1 flex-col lg:flex-row items-center justify-start lg:justify-between lg:items-start py-8 md:py-10 lg:py-12 px-6 sm:px-12 lg:px-0 lg:max-w-[90vw] gap-8">
            <PhotoPreview 
                photos={product?.photos}
                name={product?.name}
                brand={product?.brand}
            />
            <ProductDetails
                product={product ? product : null}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
            />
        </div>
    );
}