import { StateCreator } from 'zustand';
import { AccountProfile } from '../../models/AccountProfile';


export type AccountProfileSlice = {
  accountProfile: AccountProfile
  setAccountProfile: (user: Partial<AccountProfile>) => void
}

export const createAccountProfileSlice: StateCreator<AccountProfileSlice> = (set) => ({
  accountProfile: {} as AccountProfile,

  setAccountProfile: (user: Partial<AccountProfile>) => {
    set(prev => ({
      accountProfile: {
        ...prev.accountProfile,
        ...user
      }
    }));
  }
});
