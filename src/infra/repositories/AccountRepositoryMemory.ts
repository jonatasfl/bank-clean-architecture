import Account from "../../core/entities/Account";
import { AccountRepository } from "../../core/repositories/AccountRepository";

export default class AccountRepositoryMemory implements AccountRepository {
  create(data: Omit<Account, "id" | "createdAt">): Promise<Account> {
    const { owner, balance, dailyWithdrawLimit, active, type } = data;
    return Promise.resolve(
      new Account(owner, balance, dailyWithdrawLimit, active, type)
    );
  }
}
