'use client';

import { useEffect, useState } from "react";
import fetchProducts from "../lib/data";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            console.log("Fetching data...");
            const data = await fetchProducts(); // Wait for the data to resolve
            console.log("Data:", data);         // Log the actual data
            setProducts(data);                 // Update state if needed
            console.log("Data fetch complete.");
        };

        getProducts(); // Call the async function
    }, []);

    return (
        <div>
            <h1>Products Page</h1>
            <ul>
                {products?.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}
