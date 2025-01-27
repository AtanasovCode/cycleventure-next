'use client';

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Filters } from "@/app/types/Filters";
import ProductsDisplay from "@/app/ui/products/ProductsDisplay";
import Navigation from "@/app/ui/Navigation";
import SideFilters from "@/app/ui/products/SideFilters";

export default function Products() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState<Filters>({
        category: [],
        frameType: [],
        brand: [],
    });
    const [showFilters, setShowFilters] = useState<boolean>(false);

    // Sync URL params with state
    useEffect(() => {
        const params: Record<string, string> = {};
        if (filters.category.length) params.category = filters.category.join(",");
        if (filters.frameType.length) params.frameType = filters.frameType.join(",");
        if (filters.brand.length) params.brand = filters.brand.join(",");

        const queryString = new URLSearchParams(params).toString();
        router.replace(`/products?${queryString}`);
    }, [filters, router]);

    // Initialize filters from URL on first load
    useEffect(() => {
        const categories = searchParams.get("category")?.split(",") || [];
        const frameTypes = searchParams.get("frameType")?.split(",") || [];
        const brands = searchParams.get("brand")?.split(",") || [];

        setFilters({
            category: categories,
            frameType: frameTypes,
            brand: brands,
        });
    }, [searchParams]);


    return (
        <div className="w-full flex flex-col items-start justify-start text-text gap-4 pb-6">
            <Navigation />
            <div className="w-full flex flex-col lg:flex-row px-6 xs:px-16 sm:px-6 items-center justify-center lg:items-start">
                <SideFilters
                    filters={filters}
                    setFilters={setFilters}
                    showFilters={showFilters}
                    setShowFilters={setShowFilters}
                />
                <ProductsDisplay
                    filters={filters}
                    showFilters={showFilters}
                    setShowFilters={setShowFilters}
                />
            </div>
        </div>
    );
}
