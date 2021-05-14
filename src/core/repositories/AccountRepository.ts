import Account, { CreateAccountDTO } from "../entities/Account";

export interface AccountRepository {
  create(data: CreateAccountDTO): Promise<Account>;
}
