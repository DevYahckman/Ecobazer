import {create} from 'zustand';
import { StaticImageData } from "next/image";


interface CartItem {
  id:number
  productName: string;
  price: number;
  img: StaticImageData;
  units?: number;
  description?: string;
  category?: string;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}


export const useCartStore = create<CartState>((set)=> ({
  cartItems: [],
  addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
    removeFromCart: (itemId:number) => set((state) => ({
        cartItems: state.cartItems.filter(item => item.id !== itemId)
    })),
    clearCart: () => set({ cartItems: [] }),

}))
  