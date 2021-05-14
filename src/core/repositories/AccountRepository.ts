import Account, { CreateAccountDTO } from "../entities/Account";

export interface AccountRepository {
  index(): Promise<Account[]>;
  create(data: CreateAccountDTO): Promise<Account>;
}
