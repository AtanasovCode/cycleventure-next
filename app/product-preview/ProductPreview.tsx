'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { fetchSelectedProduct } from "@/app/lib/data";
import Navigation from "@/app/ui/Navigation";
import Product from "@/app/ui/product-preview/Product";
import { ProductType } from "@/app/types/product-preview";

export default function ProductPreview() {

    const searchParams = useSearchParams();

    const [id, setID] = useState<string>("")
    const [product, setProduct] = useState<ProductType>();
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);


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
        <div className="min-h-screen flex-1 flex flex-col items-center justify-start bg-background text-text">
            <Navigation user={user} setUser={setUser} />
            <div className="flex-1 w-full flex items-start justify-center lg:items-center">
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
        </div>
    );
}