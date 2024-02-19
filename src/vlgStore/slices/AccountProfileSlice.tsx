import { StateCreator } from 'zustand';
import { AccountProfile } from '../../models/AccountProfile';


const remenberAccountProfile: string = localStorage.getItem('remenberAccountProfile') || 'false';

export type AccountProfileSlice = {
  accountProfile: AccountProfile
  setAccountProfile: (user: Partial<AccountProfile>) => void,
  resetAccountProfile: () => void,
  setIsRemembered: (isRemembered: boolean) => void,
}

export const createAccountProfileSlice: StateCreator<AccountProfileSlice> = (set) => ({
  accountProfile: {
    isRemembered: JSON.parse(remenberAccountProfile)
  } as AccountProfile,

  setAccountProfile: (user: Partial<AccountProfile>) => {
    set(prev => ({
      accountProfile: {
        ...prev.accountProfile,
        ...user,
      }
    }));
  },

  setIsRemembered: (isRemembered: boolean) => {
    localStorage.setItem('remenberAccountProfile', JSON.stringify(isRemembered));

    set(prev => ({
      accountProfile: {
        ...prev.accountProfile,
        isRemembered
      }
    }));
  },

  resetAccountProfile: () => {
    localStorage.removeItem('remenberAccountProfile');
    set({ accountProfile: {} as AccountProfile });
  }
});
