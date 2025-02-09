import { ProductType } from "@/app/types/product-preview";

type ProductProps = {
    product: ProductType;
}

export default function Product({
    product,
}: ProductProps) {
    return (
        <div>
            {product["name"]}
        </div>
    );
}