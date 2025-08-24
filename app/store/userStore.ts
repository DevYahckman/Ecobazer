import { create } from "zustand";
import { supabase } from "@/supabase-client";

interface UserItems {
  email: string;
  image: string;
  name: string;
  phone: string;
  address: string;
}

interface UserState {
  user: UserItems | null;
  isLoggedIn: boolean;
  setUser: (userData: UserItems) => void;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (userData) => set({ user: userData, isLoggedIn: true }),

  fetchUser: async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("Error fetching session:", error);
      return;
    }

    const session = data.session;


    if (session?.user) {
      const userId = session.user.id;
      console.log("User ID:;;;;;;;;;;;;;;;;;;;;:", userId);

      const { data: profileData, error: profileError } = await supabase
        .from("userProfiles").select("*")
        .eq("userId", userId).single()

        if(profileError){
          console.error(profileError,'errrrrrrrrrrrrrrrrrrrr')
        }else{
          console.log(profileData);
          
        }


      
      set({
        user: {
          email: session.user.email || "",
          image: profileData.user_image || "",
          name: session.user.user_metadata?.name || "",
          phone: profileData.phone || "",
          address: profileData.address || "",
        },
        isLoggedIn: true,
      });
    } else {
      set({ user: null, isLoggedIn: false });
    }
  },
}));
