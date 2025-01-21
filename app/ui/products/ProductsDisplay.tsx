'use client';

import { useEffect, useState } from "react";
import fetchProducts from "@/app/lib/data";
import { Filters } from "@/app/types/Filters";
import Card from "@/app/ui/products/Card";
import Pages from "@/app/ui/products/Pages";
import { ProductsDisplaySkeleton } from "@/app/ui/Skeletons";

import { Product } from "@/app/types/Product";

type ProductsDisplayProps = {
    filters: Filters;
};


export default function ProductsDisplay({ filters }: ProductsDisplayProps) {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(12);
    const [totalPages, setTotalPages] = useState<number>(0);


    useEffect(() => {
        setLoading(true);
        const getProducts = async () => {
            const { data, totalPages } = await fetchProducts(page, itemsPerPage, filters); // Wait for the data to resolve
            setProducts(data);
            setTotalPages(totalPages)
            setLoading(false);
        };

        getProducts(); // Call the async function
    }, [page, itemsPerPage, filters]);

    return (
        <div className="w-full flex flex-col items-center justify-center gap-6 p-6">
            {loading ? (
                <ProductsDisplaySkeleton />
            ) : (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
                    {products?.map((product:any) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            )}
            <Pages page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );

}