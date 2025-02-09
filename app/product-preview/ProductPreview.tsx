'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchSelectedProduct } from "@/app/lib/data";
import Product from "@/app/ui/product-preview/Product";
import { ProductType } from "@/app/types/product-preview";

export default function ProductPreview() {

    const searchParams = useSearchParams();

    const [id, setID] = useState<string>("")
    const [product, setProduct] = useState<ProductType>();
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
                        <Product product={product} />
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