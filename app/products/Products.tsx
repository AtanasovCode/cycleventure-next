'use client';

import { useEffect, useMemo } from "react";
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
        hasHydrated,
        sortOptions,
        filters, setFilters,
        selectedSortingOption, setSelectedSortingOption,
    } = useProductStore();

    const initializedFromUrl = useMemo(() => ({ current: false }), []); // Ref to track initialization

    // Initialize filters and sorting from URL after hydration
    useEffect(() => {
        if (hasHydrated && !initializedFromUrl.current) {
            const categories = searchParams.get("category")?.split(",") || [];
            const frameTypes = searchParams.get("frameType")?.split(",") || [];
            const brands = searchParams.get("brand")?.split(",") || [];
            const sortFromUrl = searchParams.get("sort");

            // Prioritize the persisted state if available on hydration
            if (selectedSortingOption.value === "position" && sortFromUrl) {
                const selectedSort = sortOptions.find((i) => i.value === sortFromUrl) || { name: "Position", value: "position" };
                setSelectedSortingOption(selectedSort);
            } else if (selectedSortingOption.value !== "position") {
                // Persisted value is already loaded, no need to change immediately
            } else if (sortFromUrl) {
                const selectedSort = sortOptions.find((i) => i.value === sortFromUrl) || { name: "Position", value: "position" };
                setSelectedSortingOption(selectedSort);
            }

            setFilters({
                category: categories,
                frameType: frameTypes,
                brand: brands,
            });
            initializedFromUrl.current = true; // Mark as initialized
        }
    }, [hasHydrated, searchParams, setFilters, sortOptions, setSelectedSortingOption, initializedFromUrl, selectedSortingOption.value]);

    // Sync URL params with state
    useEffect(() => {
        if (hasHydrated && initializedFromUrl.current) { // Only sync after initialization
            const params: Record<string, string> = {};

            if (filters.category.length) params.category = filters.category.join(",");
            if (filters.frameType.length) params.frameType = filters.frameType.join(",");
            if (filters.brand.length) params.brand = filters.brand.join(",");
            if (selectedSortingOption.value !== "position") params.sort = selectedSortingOption["value"]; // Only add sort if it's not the default

            const queryString = new URLSearchParams(params).toString();
            router.replace(`/products?${queryString}`, { scroll: false }); // Prevent scroll reset
        }
    }, [hasHydrated, filters, selectedSortingOption, router, initializedFromUrl]);

    return (
        <div className="w-full min-h-screen flex flex-col items-start justify-start text-text gap-4">
            <Navigation />
            <div className="w-full flex flex-col lg:flex-row px-6 sm:px-4 items-center justify-center lg:items-start">
                <SideFilters />
                <ProductsDisplay />
            </div>
        </div>
    );
}