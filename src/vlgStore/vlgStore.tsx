import { create } from 'zustand';
import { AccountProfileSlice, createAccountProfileSlice } from './slices/AccountProfileSlice';


type StoreSlices = AccountProfileSlice  // & UserSlice

export const useVlgStore = create<StoreSlices>(
  (...args) => ({
    ...createAccountProfileSlice(...args)
  })
);
