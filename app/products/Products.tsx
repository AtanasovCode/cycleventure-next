'use client';

import { useState } from "react";
import { Filters } from "@/app/types/Filters";
import ProductsDisplay from "@/app/ui/products/ProductsDisplay";
import MobileNav from "@/app/ui/products/MobileNav";
import SideFilters from "@/app/ui/products/SideFilters";
import clsx from "clsx";


export default function Products() {

    const [filters, setFilters] = useState<Filters>({
        category: [],
        frameType: [],
        brand: [],
    });
    const [showFilters, setShowFilters] = useState<boolean>(false);

    return (
        <div className="w-full flex flex-col lg:flex-row items-start justify-start text-text gap-16 py-16">
            <div className="relative w-full lg:w-auto">
                <MobileNav
                    setShowFilters={setShowFilters}
                    showFilters={showFilters}
                />
                <SideFilters
                    filters={filters}
                    setFilters={setFilters}
                    showFilters={showFilters}
                    setShowFilters={setShowFilters}
                />
            </div>
            <div className="px-6 w-full">
                <ProductsDisplay filters={filters} showFilters={showFilters} />
            </div>
        </div>
    );
}
