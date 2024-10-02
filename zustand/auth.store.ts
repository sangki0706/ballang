import { CurrentUser } from "@/schema/auth.schema";
import { create } from "zustand";

interface AuthStoreState {
    currentUser: CurrentUser;
    setCurrentUser: (user: CurrentUser) => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
    currentUser: null,
    setCurrentUser:(user) => set({ currentUser: user}),

}));