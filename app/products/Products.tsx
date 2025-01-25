'use client';

import { useState } from "react";
import { Filters } from "@/app/types/Filters";
import ProductsDisplay from "@/app/ui/products/ProductsDisplay";
import Navigation from "@/app/ui/Navigation";
import SideFilters from "@/app/ui/products/SideFilters";

export default function Products() {

    const [filters, setFilters] = useState<Filters>({
        category: [],
        frameType: [],
        brand: [],
    });
    const [showFilters, setShowFilters] = useState<boolean>(false);

    return (
        <div className="w-full flex flex-col items-start justify-start text-text gap-4 pb-6">
            <Navigation />
            <div className="flex flex-col lg:flex-row px-6 xs:px-16 sm:px-6 items-center justify-center lg:items-start">
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
