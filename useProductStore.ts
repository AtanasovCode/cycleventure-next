import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SortOptions } from '@/app/types/sort'
import { Filters } from "@/app/types/Filters";


interface ProductState {
    showFilters: boolean
    setShowFilters: (showFilter: boolean) => void

    sortOptions: SortOptions[]
    selectedSortingOption: SortOptions
    setSelectedSortingOption: (option: SortOptions) => void

    filters: Filters
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
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
        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({
                selectedSortingOption: state.selectedSortingOption,
            }),
        }
    )
)
