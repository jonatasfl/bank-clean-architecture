import AccountViewModel from "../../adapters/view-models/account";
import Account, { CreateAccountDTO } from "../../core/entities/Account";
import { AccountRepository } from "../../core/repositories/AccountRepository";

export default class AccountRepositoryMemory implements AccountRepository {
  accounts = [new Account("001", 2500, 500, true, 1)];

  index(): Promise<Account[]> {
    return Promise.resolve(this.accounts);
  }

  create(data: CreateAccountDTO): Promise<Account> {
    const { owner, balance, dailyWithdrawLimit, active, type } = data;
    const account = new Account(
      owner,
      balance,
      dailyWithdrawLimit,
      active,
      type
    );
    this.accounts.push(account);
    return Promise.resolve(account);
  }

  getById(id: string): Promise<Account | null> {
    const accountData = this.accounts.find((acc) => acc.id === id);
    return accountData
      ? Promise.resolve(AccountViewModel.create(accountData))
      : Promise.resolve(null);
  }
}
