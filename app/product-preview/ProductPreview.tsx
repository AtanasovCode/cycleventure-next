'use client';

import { Suspense, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useSearchParams, useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { 
    fetchSelectedProduct,
    fetchUserCart,
    fetchUserData,
} from "@/app/lib/data";
import Navigation from "@/app/ui/Navigation";
import Product from "@/app/ui/product-preview/Product";
import { ProductTypes } from "@/app/types/product-types";

export default function ProductPreview() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductPreviewPageContent />
        </Suspense>
    );
}

function ProductPreviewPageContent() {

    const supabase = createClient();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [id, setID] = useState<string>("");
    const [user, setUser] = useState<User | null>(null);
    const [product, setProduct] = useState<ProductTypes>();
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    // sync URL search params with selected bike frame size
    useEffect(() => {

        const params = new URLSearchParams(searchParams.toString());

        if (selectedSize) {
            params.set("frameSize", encodeURIComponent(selectedSize));
        } else {
            params.delete("frameSize");
        }

        router.replace(`/product-preview?${params.toString()}`);

    }, [selectedSize])

    // get ID from URL search params
    useEffect(() => {
        const name = searchParams.get("name")?.split(",") || [];
        const id = searchParams.get("id") || "";
        const frameSize = searchParams.get("frameSize");

        setID(id);
        if (frameSize) setSelectedSize(decodeURIComponent(frameSize));
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
            <Navigation />
            <div className="flex-1 w-full flex items-start justify-center lg:items-center">
                {
                    loading ? (
                        <div>Loading...</div>
                    ) : (
                        product ? (
                            <Product
                                user={user}
                                product={product}
                                selectedSize={selectedSize}
                                setSelectedSize={setSelectedSize}
                            />
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