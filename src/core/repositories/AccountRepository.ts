import Account, { AccountDTO } from "@/core/entities/Account";

export interface AccountRepository {
  index(): Promise<Account[]>;
  create(data: AccountDTO): Promise<Account>;
  getById(id: string): Promise<Account | null>;
  delete(id: string): Promise<void>;
}
