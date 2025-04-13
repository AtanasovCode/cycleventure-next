'use client';

import { useEffect, useState } from "react";
import clsx from "clsx";
import fetchProducts from "@/app/lib/data";
import Card from "@/app/ui/products/Card";
import ProductsHeader from "@/app/ui/products/ProductsHeader";
import Pages from "@/app/ui/products/Pages";
import { ProductsDisplaySkeleton } from "@/app/ui/Skeletons";
import SadIcon from "@/app/assets/icons/sad.svg";
import { useProductStore } from "@/useProductStore";


export default function ProductsDisplay() {

    const {
        filters,
        showFilters,
        selectedSortingOption,

        products, 
        setProducts,
        loading, setLoading,
        page,
        itemsPerPage,
        setTotalPages,
    } = useProductStore();


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
                "h-auto min-h-[92vh] w-full flex flex-col items-center justify-start gap-16 relative",
                {
                    "h-full overflow-hidden": showFilters
                }
            )}
        >
            <ProductsHeader />
            <div className="w-full">
                {loading ? (
                    <ProductsDisplaySkeleton />
                ) : (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 lg:gap-16">
                        {
                            products && products.length ? (
                                products.map((product: any) => (
                                    <Card key={product.id} product={product} />
                                ))
                            ) : (
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-3">
                                    <SadIcon className="w-6 h-auto stroke-text" />
                                    <div className="text-center text-md">
                                        No products found
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )}
            </div>
            {
                products.length > 0 && (
                    <Pages />
                )
            }
        </div>
    );

}