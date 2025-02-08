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
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const name = searchParams.get("name")?.split(",") || [];
        const id = searchParams.get("id") || "";

        setID(id);
    }, [searchParams])

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                setLoading(true);
                const data = await fetchSelectedProduct(id);
                setProduct(data);
                setLoading(false);
            }

            fetchProduct();
        }
    }, [id])

    return (
        <div className="min-h-dvh flex items-center justify-center bg-background">
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    product ? (
                        <div>
                            {product["name"]}
                        </div>
                    ) : (
                        <div>
                            Product not found
                        </div>
                    )
                )
            }
        </div>
    );
}