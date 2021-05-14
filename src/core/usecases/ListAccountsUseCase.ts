import Account from "@/core/entities/Account";
import { AccountRepository } from "@/core/repositories/AccountRepository";

export default class ListAccountsUseCase {
  constructor(private accountRepository: AccountRepository) {}

  async execute(): Promise<Account[]> {
    const accounts = await this.accountRepository.index();
    return accounts;
  }
}
