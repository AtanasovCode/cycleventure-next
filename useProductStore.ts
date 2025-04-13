import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SortOptions } from '@/app/types/sort'
import { Filters } from "@/app/types/Filters";
import { ProductTypes } from "@/app/types/product-types";



interface ProductState {
    showFilters: boolean;
    setShowFilters: (showFilter: boolean) => void;

    sortOptions: SortOptions[];
    selectedSortingOption: SortOptions;
    setSelectedSortingOption: (option: SortOptions) => void;

    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;

    products: ProductTypes[];
    setProducts: (products: ProductTypes[]) => void;

    loading: boolean;
    setLoading: (loading: boolean) => void;

    page: number;
    setPage: (page: number) => void;

    itemsPerPage: number;
    setItemsPerPage: (count: number) => void;

    totalPages: number;
    setTotalPages: (count: number) => void;

    showSort: boolean,
    setShowSort: (showSort: boolean) => void;
}

export const useProductStore = create<ProductState>()(
    persist(
        (set) => ({
            showFilters: false,
            setShowFilters: (showFilters) => set({ showFilters }),

            filters: {
                category: [],
                frameType: [],
                brand: [],
            },
            setFilters: (value) =>
                set((state) => ({
                    filters: typeof value === "function" ? value(state.filters) : value,
                })),

            sortOptions: [
                { name: "Position", value: "position" },
                { name: "Top rated", value: "top-rated" },
                { name: "Price (low to high)", value: "price-low-to-high" },
                { name: "Price (high to low)", value: "price-high-to-low" },
                { name: "A-Z", value: "a-z" },
                { name: "Z-A", value: "z-a" },
            ],
            selectedSortingOption: { name: "Position", value: "position" },
            setSelectedSortingOption: (option) => set({ selectedSortingOption: option }),

            products: [],
            setProducts: (products) => set({ products }),

            loading: false,
            setLoading: (loading) => set({ loading }),

            page: 1,
            setPage: (page) => set({ page }),

            itemsPerPage: 12,
            setItemsPerPage: (count) => set({ itemsPerPage: count }),

            totalPages: 0,
            setTotalPages: (count) => set({ totalPages: count }),

            showSort: false,
            setShowSort: (showSort: boolean) => set({ showSort }),

        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({
                selectedSortingOption: state.selectedSortingOption,
            }),
        }
    )
)
