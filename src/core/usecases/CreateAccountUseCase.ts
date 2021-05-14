import Account, { CreateAccountDTO } from "../entities/Account";
import { AccountRepository } from "../repositories/AccountRepository";

export default class CreateAccountUseCase {
  constructor(private accountRepository: AccountRepository) {}

  async execute(data: CreateAccountDTO): Promise<Account> {
    const account = await this.accountRepository.create(data);
    return account;
  }
}
