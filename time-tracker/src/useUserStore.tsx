import { useId } from 'react';
import {create} from 'zustand'

type UserState = {
  email: string;
  password: string;
  uid:string;
  name:string;
  setEmail: (email:string) => void;
  setPassword: (password:string) => void;
  setUserID: (uid:string) => void;
  setName: (name:string) => void
}

const useUserStore = create<UserState>((set) => ({
  name: "",
  email: "",
  password: "",
  uid: "",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUserID: (uid) => set({ uid }),
}));

export default useUserStore