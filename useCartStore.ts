import { create } from 'zustand'
import { UserCartItemProps, CartItemProps } from '@/app/types/cart-types';

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
}

export const useCartStore = create<CartState>()((set) => ({
  //carts
  userCart: null,
  setUserCart: (value) => set({ userCart: value }),
  localCart: null,
  setLocalCart: (value) => set({ localCart: value }),

  //values
  totalCartPrice: 0,
  setTotalCartPrice: (total) => set({ totalCartPrice: total }),
  showAuthCard: false,
  setShowAuthCard: (toShow) => set({ showAuthCard: toShow }),
}))