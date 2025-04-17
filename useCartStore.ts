import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { UserCartItemProps, CartItemProps } from '@/app/types/cart-types';
import { Filters } from "@/app/types/Filters";

interface CartState {
  // carts
  userCart: UserCartItemProps[] | null;
  setUserCart: (value: UserCartItemProps[] | null) => void;
  localCart: CartItemProps[] | null;
  setLocalCart: (value: CartItemProps[] | null) => void;

  //values
  totalCartPrice: number;
  setTotalCartPrice: (value: number) => void;
  showAuthCard: boolean;
  setShowAuthCard: (value: boolean) => void;
  showCart: boolean;
  setShowCart: (value: boolean) => void;
  currentTheme: string;
  setCurrentTheme: (newTheme: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      //carts
      userCart: null,
      setUserCart: (value) => set({ userCart: value }),
      localCart: null,
      setLocalCart: (value) => set({ localCart: value }),

      //values
      totalCartPrice: 0,
      setTotalCartPrice: (total) => set({ totalCartPrice: total }),
      showAuthCard: false,
      showCart: false,
      setShowAuthCard: (toShow: boolean) => set((state) => ({
        showAuthCard: toShow,
        ...(toShow && state.showCart ? { showCart: false } : {})
      })),
      setShowCart: (toShow: boolean) => set((state) => ({
        showCart: toShow,
        ...(toShow && state.showAuthCard ? { showAuthCard: false } : {})
      })),

      currentTheme: "system",
      setCurrentTheme: (newTheme) => set({ currentTheme: newTheme }),
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
      partialize: (state) => ({
        currentTheme: state.currentTheme,
      })
    },
  ),
)