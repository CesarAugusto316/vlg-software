import { StateCreator } from 'zustand';
import { AccountProfile } from '../../models/AccountProfile';


const remenberAccountProfile = localStorage.getItem('remenberAccountProfile') || 'false';

export type AccountProfileSlice = {
  accountProfile: AccountProfile
  setAccountProfile: (user: Partial<AccountProfile>) => void,
  resetAccountProfile: () => void
}

export const createAccountProfileSlice: StateCreator<AccountProfileSlice> = (set) => ({
  accountProfile: {
    remember: remenberAccountProfile ? JSON.parse(remenberAccountProfile) : false
  } as AccountProfile,

  setAccountProfile: (user: Partial<AccountProfile>) => {
    localStorage.setItem('remenberAccountProfile', JSON.stringify(user.remember ?? false));

    set(prev => ({
      accountProfile: {
        ...prev.accountProfile,
        ...user,
      }
    }));
  },

  resetAccountProfile: () => {
    set({ accountProfile: {} as AccountProfile });
  }
});
