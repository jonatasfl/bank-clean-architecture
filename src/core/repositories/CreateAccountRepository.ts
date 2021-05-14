import Account from "../entities/Account";

export interface CreateAccountRepository {
  execute(data: Omit<Account, 'id' | 'createdAt'>): Promise<Account>
}