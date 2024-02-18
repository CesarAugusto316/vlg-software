import { StateCreator } from 'zustand';
import { UserAccount } from '../../models/UserAccount';


export type AccountRegistrationSlice = {
  accountRegistration: UserAccount
  setAccountRegistration: (user: Partial<UserAccount>) => void
}

export const createAccountRegistrationSlice: StateCreator<AccountRegistrationSlice> = (set) => ({
  accountRegistration: {} as UserAccount,

  setAccountRegistration: (user: Partial<UserAccount>) => {
    set(prev => ({
      accountRegistration: {
        ...prev.accountRegistration,
        ...user
      }
    }));
  }
});
