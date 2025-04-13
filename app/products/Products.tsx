'use client';

import { useState, useEffect, useMemo } from "react";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductsDisplay from "@/app/ui/products/ProductsDisplay";
import Navigation from "@/app/ui/Navigation";
import SideFilters from "@/app/ui/products/SideFilters";
import { useProductStore } from "@/useProductStore";

export default function Products() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsPageContent />
        </Suspense>
    );
}

function ProductsPageContent() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const {
        sortOptions,
        showFilters, setShowFilters,
        filters, setFilters,
        selectedSortingOption, setSelectedSortingOption, 
    } = useProductStore();

    // Sync URL params with state
    useEffect(() => {

        // The Record<string, string> type ensures `params` is an object where keys and values are both strings.
        // This enforces type safety and helps construct query strings for the URL dynamically.
        const params: Record<string, string> = {};

        if (filters.category.length) params.category = filters.category.join(",");
        if (filters.frameType.length) params.frameType = filters.frameType.join(",");
        if (filters.brand.length) params.brand = filters.brand.join(",");
        if (selectedSortingOption) params.sort = selectedSortingOption["value"];

        const queryString = new URLSearchParams(params).toString();
        router.replace(`/products?${queryString}`);
    }, [filters, selectedSortingOption, router]);

    // Initialize filters from URL on first load
    useEffect(() => {
        const categories = searchParams.get("category")?.split(",") || [];
        const frameTypes = searchParams.get("frameType")?.split(",") || [];
        const brands = searchParams.get("brand")?.split(",") || [];
        const sort = searchParams.get("sort");
        const selectedSort = sortOptions.find((i) => i.value === sort) || { name: "Position", value: "position" };


        setFilters({
            category: categories,
            frameType: frameTypes,
            brand: brands,
        });
        setSelectedSortingOption(selectedSort);
    }, [searchParams]);

    return (
        <div className="w-full min-h-screen flex flex-col items-start justify-start text-text gap-4">
            <Navigation />
            <div
                className="w-full flex flex-col lg:flex-row px-6 sm:px-4 items-center justify-center lg:items-start"
            >
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
                    sortOptions={sortOptions}
                    selectedSortingOption={selectedSortingOption}
                    setSelectedSortingOption={setSelectedSortingOption}
                />
            </div>
        </div>
    );
}
