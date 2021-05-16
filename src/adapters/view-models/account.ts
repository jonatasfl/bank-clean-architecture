import Account, { AccountDTO } from "@/core/entities/Account";

export default class AccountViewModel {
  static create({
    id,
    owner,
    balance,
    dailyWithdrawLimit,
    active,
    type
  }: AccountDTO): Account {
    return new Account(owner, balance, dailyWithdrawLimit, active, type, id);
  }
}
