import { create } from "zustand";


    
    export const useUserStore = create((set)=>({
      user: null,
      isLoggedIn: false,
      setUser: (userData: any) => set({ user: userData, isLoggedIn:true })

}))


// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// const useUserStore = create(
//   persist(
//     (set) => ({
//       user: null, // Initially, no user is logged in
//       setUser: (userData) => set({ user: userData }), // Set user data
//       clearUser: () => set({ user: null }), // Clear user on logout
//     }),
//     {
//       name: 'user-store', // Key for localStorage
//     }
//   )
// );

// import { create } from "zustand";

// export const useUserStore = create((set) => ({
//     user: null, // Default value for user
//     isLoggedIn: false, // Default value for login status
//     setUser: (userData) => set({ user: userData, isLoggedIn: true }), // Updates user and login status
//     clearUser: () => set({ user: null, isLoggedIn: false }), // Clears user and resets login status
//   }));
  