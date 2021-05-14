import Account from "../entities/Account";
import { AccountRepository } from "../repositories/AccountRepository";

export default class ListAccountsUseCase {
  constructor(private accountRepository: AccountRepository) {}

  async execute(): Promise<Account[]> {
    const accounts = await this.accountRepository.index();
    return accounts;
  }
}
