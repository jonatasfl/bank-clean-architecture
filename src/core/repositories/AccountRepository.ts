import Account, { CreateAccountDTO } from "../entities/Account";

export interface AccountRepository {
  index(): Promise<Account[]>;
  create(data: CreateAccountDTO): Promise<Account>;
  getById(id: string): Promise<Account | null>;
  delete(id: string): Promise<void>;
}
