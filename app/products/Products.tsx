'use client';

import { useState, useEffect, useMemo } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Filters } from "@/app/types/Filters";
import { SortOptions } from "@/app/types/sort";
import ProductsDisplay from "@/app/ui/products/ProductsDisplay";
import Navigation from "@/app/ui/Navigation";
import SideFilters from "@/app/ui/products/SideFilters";

export default function Products() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsPageContent />
        </Suspense>
    );
}

function ProductsPageContent() {

    const supabase = createClient();
    const router = useRouter();
    const searchParams = useSearchParams();

    const sortOptions = useMemo(
        () => [
            { name: "Position", value: "position" },
            { name: "Top rated", value: "top-rated" },
            { name: "Price (low to high)", value: "price-low-to-high" },
            { name: "Price (high to low)", value: "price-high-to-low" },
            { name: "A-Z", value: "a-z" },
            { name: "Z-A", value: "z-a" },
        ],
        []
    );

    const [filters, setFilters] = useState<Filters>({
        category: [],
        frameType: [],
        brand: [],
    });
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [selectedSortingOption, setSelectedSortingOption] = useState<SortOptions>({ name: "Position", value: "position" })
    const [user, setUser] = useState<User | null>(null);


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


    // check if user is signed in and update user state with user data
    useEffect(() => {
        // console.log(supabase.auth.getUser());

        const checkAuth = async () => {
            const { data } = await supabase.auth.getUser();

            setUser(data?.user || null)
        }

        checkAuth();
    }, [])

    return (
        <div className="w-full flex flex-col items-start justify-start text-text gap-4 pb-6">
            <Navigation user={user} />
            <div
                className="w-full flex flex-col lg:flex-row px-6 xs:px-16 sm:px-6 items-center justify-center lg:items-start"
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
