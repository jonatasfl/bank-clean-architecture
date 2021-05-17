import AccountViewModel from "@/adapters/view-models/AccountViewModel";
import Account, { AccountDTO } from "@/core/entities/Account";
import { AccountRepository } from "@/core/repositories/AccountRepository";

type AccountMemory = {
  id: string;
  owner: string;
  balance: number;
  dailyWithdrawLimit: number;
  active: boolean;
  type: number;
  createdAt?: string | Date;
};

export default class AccountRepositoryMemory implements AccountRepository {
  accounts: AccountMemory[] = [
    {
      id: "0fd767b7-7795-441a-bb0f-ebc1014da34d",
      owner: "001",
      balance: 5000,
      dailyWithdrawLimit: 800,
      active: true,
      type: 1,
      createdAt: "2021-05-17T21:20:21.477Z"
    }
  ];

  index(): Promise<Account[]> {
    const accounts = this.accounts.map(acc => AccountViewModel.create(acc));
    return Promise.resolve(accounts);
  }

  create(data: AccountDTO): Promise<Account> {
    const { owner, balance, dailyWithdrawLimit, active, type } = data;
    const account = AccountViewModel.create({
      owner,
      balance,
      dailyWithdrawLimit,
      active,
      type
    });

    this.accounts.push(account);
    return Promise.resolve(account);
  }

  getById(id: string): Promise<Account | null> {
    const accountData = this.accounts.find(acc => acc.id === id);
    return accountData ? Promise.resolve(AccountViewModel.create(accountData)) : Promise.resolve(null);
  }

  delete(id: string): Promise<void> {
    this.accounts = this.accounts.filter(acc => acc.id !== id);
    return Promise.resolve();
  }
}
