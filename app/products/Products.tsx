'use client';



import { useState } from "react";
import ProductsDisplay from "@/app/ui/products/ProductsDisplay";
import SideFilters from "@/app/ui/products/SideFilters";


export default function Products() {

    // currently applied filter. could be empty
    const [filter, setFilter] = useState<string>("");

    return (
        <div className="min-h-dvh w-full flex items-start justify-start gap-6 text-text p-4 md:p-8 lg:p-16">
            <SideFilters setFilter={setFilter} />
            <ProductsDisplay filter={filter} />
        </div>
    );
}
