'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchSelectedProduct } from "@/app/lib/data";
import { stringify } from "querystring";

type Product = {
    created_at: string;
    id: string;
    brand: string;
    name: string;
    description: string;
    price: number;
    isOnSale: boolean;
    salePercent: number;
    rating: number;
    numberOfReviews: number;
    frameType: string;
    photos: string[];
    sizes: string[];
}

export default function ProductPreview() {

    const searchParams = useSearchParams();

    const [id, setID] = useState<string>("")
    const [product, setProduct] = useState<Product[]>();

    useEffect(() => {
        const name = searchParams.get("name")?.split(",") || [];
        const id = searchParams.get("id") || "";

        setID(id);
        console.log(`ID: ${id}`);
    }, [searchParams])

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                console.log("Fetching product...");
                const data = await fetchSelectedProduct(id);
                console.log(data);
                setProduct(data);
            }

            fetchProduct();
        }
    }, [id])

    return (
        <div className="min-h-dvh flex items-center justify-center bg-background">
            Product Preview
        </div>
    );
}