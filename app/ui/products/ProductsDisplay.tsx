import Card from "@/app/ui/products/Card";
import Pages from "@/app/ui/products/Pages";

import { Product } from "@/app/types/Product";

type ProductTypes = {
    products: Product[];
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}


export default function ProductsDisplay({
    products,
    page,
    setPage,
    totalPages,
}: ProductTypes) {


    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-full grid grid-cols-3 gap-6">
                {products?.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
            <Pages page={page} setPage={setPage} totalPages={totalPages} />
        </div>

    );
}