'use client';

import { useEffect, useState } from "react";
import clsx from "clsx";
import fetchProducts from "@/app/lib/data";
import { Filters } from "@/app/types/Filters";
import { SortOptions } from "@/app/types/sort";
import Card from "@/app/ui/products/Card";
import ProductsHeader from "@/app/ui/products/ProductsHeader";
import Pages from "@/app/ui/products/Pages";
import { ProductsDisplaySkeleton } from "@/app/ui/Skeletons";
import { ProductTypes } from "@/app/types/product-types";

type ProductsDisplayProps = {
    filters: Filters;
    showFilters: boolean;
    setShowFilters: (value: boolean) => void;
    sortOptions: SortOptions[];
    selectedSortingOption: SortOptions;
    setSelectedSortingOption: (value: SortOptions) => void;
};


export default function ProductsDisplay({ 
    filters, 
    showFilters,
    setShowFilters,
    sortOptions,
    selectedSortingOption,
    setSelectedSortingOption,
}: ProductsDisplayProps) {

    const [products, setProducts] = useState<ProductTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(12);
    const [totalPages, setTotalPages] = useState<number>(0);

    const pageForward = () => {
        if (page === totalPages) {
            return;
        }

        setPage(page + 1);
    }

    const pageBack = () => {
        if (page === 1) {
            return;
        }

        setPage(page - 1);
    }


    useEffect(() => {
        setLoading(true);
        const getProducts = async () => {
            const { data, totalPages } = await fetchProducts(page, itemsPerPage, filters, selectedSortingOption["value"]); // Wait for the data to resolve
            setProducts(data);
            setTotalPages(totalPages)
            setLoading(false);
        };

        getProducts(); // Call the async function
    }, [page, itemsPerPage, filters, selectedSortingOption]);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollToTop();
    }, [page]);


    return (
        <div
            className={clsx(
                "min-h-dvh w-full flex flex-col items-center justify-center gap-16",
                {
                    "h-full overflow-hidden": showFilters
                }
            )}
        >
            <ProductsHeader
                selectedSortingOption={selectedSortingOption}
                setSelectedSortingOption={setSelectedSortingOption}
                sortOptions={sortOptions}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
            />
            <div className="w-full min-h-[80dvh]">
                {loading ? (
                    <ProductsDisplaySkeleton />
                ) : (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 lg:gap-16">
                        {products?.map((product: any) => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
            <Pages
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                pageForward={pageForward}
                pageBack={pageBack}
            />
        </div>
    );

}