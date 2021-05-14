import { AccountRepository } from "../../src/core/repositories/AccountRepository";
import CreateAccountUseCase from "../../src/core/usecases/CreateAccountUseCase";
import GetAccountUseCase from "../../src/core/usecases/GetAccountUseCase";
import ListAccountsUseCase from "../../src/core/usecases/ListAccountsUseCase";
import AccountRepositoryMemory from "../../src/infra/repositories/AccountRepositoryMemory";

let accountRepoMemory: AccountRepository;

describe("Account Test Suit", () => {
  beforeEach(() => {
    accountRepoMemory = new AccountRepositoryMemory();
  });

  it("should be able to list all accounts", async () => {
    const listAccounts = new ListAccountsUseCase(accountRepoMemory);
    const accounts = await listAccounts.execute();
    expect(accounts[0]).toHaveProperty("id");
  });

  it("should be able to create a new account", async () => {
    const createAccount = new CreateAccountUseCase(accountRepoMemory);
    const account = await createAccount.execute({
      owner: "002",
      balance: 10000,
      dailyWithdrawLimit: 800,
      active: true,
      type: 1
    });
    expect(account).toHaveProperty("id");
    expect(account.balance).toBe(10000);
    expect(account.id).toMatch(
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    );
  });

  it("should be able to get account by id", async () => {
    const getAccount = new GetAccountUseCase(accountRepoMemory);
    const account = await getAccount.execute(
      "0fd767b7-7795-441a-bb0f-ebc1014da34d"
    );
    expect(account?.owner).toBe("001");
  });

  it("should throw an error if account does not exists", () => {
    const getAccount = new GetAccountUseCase(accountRepoMemory);
    expect(getAccount.execute("invalid id")).rejects.toThrow();
  });
});
