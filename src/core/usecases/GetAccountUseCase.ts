import Account from "../entities/Account";
import { AccountRepository } from "../repositories/AccountRepository";

export default class GetAccountUseCase {
  constructor(private accountRepository: AccountRepository) {}

  async execute(id: string): Promise<Account | null> {
    const account = await this.accountRepository.getById(id);
    if (!account) throw new Error("Account does not exist");

    return account;
  }
}
