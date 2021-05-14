import AccountViewModel from "@/adapters/view-models/account";
import Account, { CreateAccountDTO } from "@/core/entities/Account";
import { AccountRepository } from "@/core/repositories/AccountRepository";

export default class AccountRepositoryMemory implements AccountRepository {
  accounts: Account[] = [
    {
      id: "0fd767b7-7795-441a-bb0f-ebc1014da34d",
      owner: "001",
      balance: 5000,
      dailyWithdrawLimit: 800,
      active: true,
      type: 1,
      createdAt: new Date()
    }
  ];

  index(): Promise<Account[]> {
    return Promise.resolve(this.accounts);
  }

  create(data: CreateAccountDTO): Promise<Account> {
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
    return accountData ? Promise.resolve(accountData) : Promise.resolve(null);
  }

  delete(id: string): Promise<void> {
    this.accounts = this.accounts.filter(acc => acc.id !== id);
    return Promise.resolve();
  }
}
