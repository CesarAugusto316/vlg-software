import { create } from 'zustand';
import { AccountRegistrationSlice, createAccountRegistrationSlice } from './slices/accountRegistration';


type StoreSlices = AccountRegistrationSlice  // & UserSlice

export const useVlgStore = create<StoreSlices>(
  (...args) => ({
    ...createAccountRegistrationSlice(...args)
    // ...createOnboardingSlice(...args),
    // ...createUserSlice(...args),
  })
);
