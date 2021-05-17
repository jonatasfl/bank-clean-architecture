import Account, { AccountDTO } from "@/core/entities/Account";
import { AccountRepository } from "@/core/repositories/AccountRepository";

export default class CreateAccountUseCase {
  constructor(private accountRepository: AccountRepository) {}

  async execute(data: AccountDTO): Promise<Account> {
    const account = await this.accountRepository.create(data);
    return account;
  }
}
