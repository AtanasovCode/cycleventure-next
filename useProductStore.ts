import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SortOptions } from '@/app/types/sort'
import { Filters } from "@/app/types/Filters";
import { ProductTypes } from "@/app/types/product-types";



interface ProductState {
    hasHydrated: boolean;
    setHasHydrated: (value: boolean) => void;

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

    // ProductPreview State

    id: string; // product id
    setID: (id: string) => void;
    product: ProductTypes | null;
    setProduct: (product: ProductTypes) => void;
    previewLoading: boolean;
    setPreviewLoading: (previewLoading: boolean) => void;
    selectedSize: string | null;
    setSelectedSize: (selectedSize: string) => void;
    currentPhotoIdx: number;
    setCurrentPhotoIdx: (number: number) => void;
}

export const useProductStore = create<ProductState>()(
    persist(
        (set) => ({
            hasHydrated: false,
            setHasHydrated: (value) => set({ hasHydrated: value }),

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
            setShowSort: (showSort) => set({ showSort }),

            // ProductPreview State
            id: "",
            setID: (id: string) => set({ id }),
            product: null,
            setProduct: (product) => set({ product }),
            previewLoading: false,
            setPreviewLoading: (previewLoading) => set({ previewLoading }),
            selectedSize: null,
            setSelectedSize: (selectedSize) => set({ selectedSize }),
            currentPhotoIdx: 0,
            setCurrentPhotoIdx: (number) => set({ currentPhotoIdx: number }),
        }),
        {
            name: 'product-storage',
            partialize: (state) => ({
                selectedSortingOption: state.selectedSortingOption,
            }),
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
)
