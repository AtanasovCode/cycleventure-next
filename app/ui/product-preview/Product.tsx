import PhotoPreview from "@/app/ui/product-preview/PhotoPreview";
import ProductDetails from "@/app/ui/product-preview/ProductDetails";

export default function Product() {
    return (
        <div className="flex flex-1 flex-col lg:flex-row items-center justify-start lg:justify-between lg:items-start py-8 md:py-10 lg:py-12 px-6 sm:px-12 lg:px-0 lg:max-w-[90vw] gap-8">
            <PhotoPreview />
            <ProductDetails />
        </div>
    );
}