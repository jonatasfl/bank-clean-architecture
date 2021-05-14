import Account, { CreateAccountDTO } from "@/core/entities/Account";
import { AccountRepository } from "@/core/repositories/AccountRepository";

export default class CreateAccountUseCase {
  constructor(private accountRepository: AccountRepository) {}

  async execute(data: CreateAccountDTO): Promise<Account> {
    const account = await this.accountRepository.create(data);
    return account;
  }
}
