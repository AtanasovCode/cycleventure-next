'use client';

import { useState } from "react";
import { Filters } from "@/app/types/Filters";
import ProductsDisplay from "@/app/ui/products/ProductsDisplay";
import SideFilters from "@/app/ui/products/SideFilters";


export default function Products() {

    const [filters, setFilters] = useState<Filters>({
        category: [],
        frameType: [],
        brand: [],
    });
    const [showFilters, setShowFilters] = useState<boolean>(true);

    return (
        <div className="min-h-dvh w-full flex items-start justify-start text-text gap-16">
            <SideFilters filters={filters} setFilters={setFilters} showFilters={showFilters} />
            <ProductsDisplay filters={filters} />
        </div>
    );
}
