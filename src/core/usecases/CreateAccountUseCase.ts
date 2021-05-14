import Account from "../entities/Account";
import { AccountRepository } from "../repositories/AccountRepository";

export default class CreateAccountUseCase {
  constructor(private accountRepository: AccountRepository) {}

  async execute(data: Omit<Account, "id" | "createdAt">): Promise<Account> {
    const account = await this.accountRepository.create(data);
    return account;
  }
}
