'use client';

import { useEffect, useState } from "react";
import fetchProducts from "../lib/data";

type Products = {
    id: string;
    name: string;
    photos: string[];
    price: number;
}

export default function Products() {
    const [products, setProducts] = useState<Products[]>([]);
    const [filter, setFilter] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(9);
    const [totalPages, setTotalPages] = useState<number>(0);

    const filters = [
        {
            value: "hardtail",
            name: "Hardtail"
        },
        {
            value: "full-suspension",
            name: "Full Suspension"
        },
        {
            value: "electric",
            name: "Electric MTB"
        },
    ]

    useEffect(() => {
        const getProducts = async () => {
            const { data, totalPages } = await fetchProducts(page, itemsPerPage, filter); // Wait for the data to resolve
            setProducts(data);
            setTotalPages(totalPages)
        };

        getProducts(); // Call the async function
    }, [page, itemsPerPage, filter]);

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <h1>Products Page</h1>
            <ul>
                {products?.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <div className="flex items-center justify-start gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <div
                        key={i} // Always use a key when rendering lists in React
                        className="text-xs cursor-pointer w-8 aspect-square flex items-center justify-center border border-slate-500 rounded-full"
                        onClick={() => setPage(i + 1)} // Adjust index for page number
                    >
                        {i + 1} {/* Display the correct page number */}
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
                {
                    filters.map((filter) => {
                        return (
                            <div 
                                key={filter.name}
                                onClick={() => setFilter(filter.value)}
                            >
                                {filter.name}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
