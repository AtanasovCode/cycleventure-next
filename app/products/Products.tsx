'use client';

import { Suspense, useEffect, useState } from "react";

import { Product } from "@/app/types/Product";

import ProductsDisplay from "@/app/ui/products/ProductsDisplay";

type Filter = {
    value: string;
    name: string;
}

export default function Products() {

    const [filter, setFilter] = useState<string>("");

    return (
        <div className="min-h-dvh w-full flex flex-col items-center justify-start gap-6 text-text">
            <h1>Products Page</h1>
            <ProductsDisplay filter={filter} />
        </div>
    );
}
