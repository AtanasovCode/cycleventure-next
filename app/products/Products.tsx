'use client';

import { useEffect, useState } from "react";
import fetchProducts from "../lib/data";

import { Product } from "@/app/types/Product";

import ProductsDisplay from "@/app/ui/products/ProductsDisplay";

type Filter = {
    value: string;
    name: string;
}

export default function Products() {
    
    const [products, setProducts] = useState<Product[]>([]);
    const [filter, setFilter] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(9);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        const getProducts = async () => {
            const { data, totalPages } = await fetchProducts(page, itemsPerPage, filter); // Wait for the data to resolve
            setProducts(data);
            setTotalPages(totalPages)
        };

        getProducts(); // Call the async function
    }, [page, itemsPerPage, filter]);

    return (
        <div className="flex flex-col items-center justify-center gap-6 text-text">
            <h1>Products Page</h1>
            <ProductsDisplay
                products={products}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </div>
    );
}
