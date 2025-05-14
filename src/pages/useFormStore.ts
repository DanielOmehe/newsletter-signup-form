import { create } from 'zustand';

interface FormState {
  email: string;
  setEmail: (value: string) => void;

  isMobile: boolean;
  setIsMobile: (value: boolean) => void;

  isError: boolean;
  isSuccess: boolean;
  errorMessage: string;
  setIsError: (value: boolean, message?: string) => void;
  setIsSuccess: (value: boolean) => void;

  subscribeToNewsletter: () => void;
  dismissMessasge: () => void
}

const useFormStore = create<FormState>((set, get) => ({
  email: '',
  setEmail: (value) => set({ email: value }),

  isMobile: false,
  setIsMobile: (value) => set({ isMobile: value }),

  isError: false,
  isSuccess: false,
  setIsSuccess: (value) => set({ isSuccess: value }),
  errorMessage: '',
  setIsError: (value, message = '') => set({ isError: value, errorMessage: message }),
  dismissMessasge: () => set({ isSuccess: false }),

  subscribeToNewsletter: () => {

    // e.preventDefault()
    const { email, setIsError, setIsSuccess } = get();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setIsError(true, 'Email field cannot be empty.');
      setIsSuccess(false)
    } else if (!emailRegex.test(email)) {
      setIsError(true, 'Please enter a valid email address.');
      setIsSuccess(false)
    } else {
      setIsError(false);
      setIsSuccess(true)
      console.log(`Subscribed: ${email}`);
    }
  },
}));

export default useFormStore;