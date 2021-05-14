import Account from "../entities/Account";

export interface AccountRepository {
  create(data: Omit<Account, "id" | "createdAt">): Promise<Account>;
}
