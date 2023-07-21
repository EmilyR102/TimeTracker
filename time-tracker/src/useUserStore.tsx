import {create} from 'zustand'

type UserState = {
  email: string;
  password: string;
  setEmail: (email:string) => void;
  setPassword: (password:string) => void;
}

const useUserStore = create<UserState>((set) => ({
  email: "",
  password:"",
  setEmail: (email) => set({email}),
  setPassword: (password) => set({password})
}))

export default useUserStore