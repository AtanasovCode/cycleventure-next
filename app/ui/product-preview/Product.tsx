import Image from "next/image";
import { ProductType } from "@/app/types/product-preview";
import PhotoPreview from "@/app/ui/product-preview/PhotoPreview";
import ProductDetails from "@/app/ui/product-preview/ProductDetails";

type ProductProps = {
    product: ProductType;
    selectedSize: string;
    setSelectedSize: (value: string) => void;
}

export default function Product({
    product,
    selectedSize,
    setSelectedSize,
}: ProductProps) {
    return (
        <div className="flex flex-1 flex-col lg:flex-row items-center justify-start lg:justify-between py-4 px-4 sm:px-12 lg:px-0 lg:max-w-[90vw] gap-8">
            <PhotoPreview 
                photos={product.photos}
                name={product.name}
                brand={product.brand}
            />
            <ProductDetails 
                product={product}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
            />
        </div>
    );
}