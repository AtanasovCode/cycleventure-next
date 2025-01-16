import { useEffect, useState } from "react";
import fetchProducts from "@/app/lib/data";
import Card from "@/app/ui/products/Card";
import Pages from "@/app/ui/products/Pages";
import { ProductsDisplaySkeleton } from "@/app/ui/Skeletons";

import { Product } from "@/app/types/Product";

type ProductProps = {
    filter: string;
}


export default function ProductsDisplay({ filter }: ProductProps) {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(9);
    const [totalPages, setTotalPages] = useState<number>(0);


    useEffect(() => {
        setLoading(true);
        const getProducts = async () => {
            const { data, totalPages } = await fetchProducts(page, itemsPerPage, filter); // Wait for the data to resolve
            setProducts(data);
            setTotalPages(totalPages)
            setLoading(false);
        };

        getProducts(); // Call the async function
    }, [page, itemsPerPage, filter]);

    return (
        <div className="w-full flex flex-col items-center justify-center gap-6 px-16">
            {loading ? (
                <ProductsDisplaySkeleton />
            ) : (
                <div className="w-full grid grid-cols-3 gap-8">
                    {products?.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            )}
            <Pages page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );

}