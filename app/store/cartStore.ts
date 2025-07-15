import {create} from 'zustand';
import { StaticImageData } from "next/image";


interface CartItem {
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
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}


export const useCartStore = create<CartState>((set)=> ({
  cartItems: [],
  addToCart: (item:any) => set((state:any) => ({ cartItems: [...state.cartItems, item] })),
    removeFromCart: (itemId:any) => set((state:any) => ({
        cartItems: state.cartItems.filter(item => item.id !== itemId)
    })),
    clearCart: () => set({ cartItems: [] }),

}))
  