import { AccountRepository } from "../repositories/AccountRepository";

export default class DeleteAccountUseCase {
  constructor(private accountRepository: AccountRepository) {}

  async execute(id: string): Promise<void> {
    const account = await this.accountRepository.getById(id);
    if (!account) throw new Error("Account does not exist");
    await this.accountRepository.delete(id);
    return Promise.resolve();
  }
}
