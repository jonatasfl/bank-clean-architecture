import Account, { CreateAccountDTO } from "../../core/entities/Account";

export default class AccountViewModel {
  static create({
    owner,
    balance,
    dailyWithdrawLimit,
    active,
    type,
  }: CreateAccountDTO): Account {
    return new Account(owner, balance, dailyWithdrawLimit, active, type);
  }
}
