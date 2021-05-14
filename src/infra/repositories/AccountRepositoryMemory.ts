import Account, { CreateAccountDTO } from "../../core/entities/Account";
import { AccountRepository } from "../../core/repositories/AccountRepository";

export default class AccountRepositoryMemory implements AccountRepository {
  create(data: CreateAccountDTO): Promise<Account> {
    const { owner, balance, dailyWithdrawLimit, active, type } = data;
    return Promise.resolve(
      new Account(owner, balance, dailyWithdrawLimit, active, type)
    );
  }
}
