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

    return (
        <div className="min-h-dvh w-full flex items-start justify-start gap-6 text-text p-4 md:p-8 lg:p-16">
            <SideFilters filters={filters} setFilters={setFilters} />
            <ProductsDisplay filters={filters} />
        </div>
    );
}
