import { create } from 'zustand'

interface FormState {
  email: String;
  setEmail: (value: String) => void;
  isMobile: Boolean;
}

const useFormStore = create<FormState>()((set) => ({
    email: "",
    setEmail: (value) => {
      set({ email:  value })
    },
    isMobile: false
}))

export default useFormStore