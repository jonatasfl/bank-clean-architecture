import CreateAccountUseCase from "../../src/core/usecases/CreateAccountUseCase";
import ListAccountsUseCase from "../../src/core/usecases/ListAccountsUseCase";
import AccountRepositoryMemory from "../../src/infra/repositories/AccountRepositoryMemory";

const accountRepoMemory = new AccountRepositoryMemory();

describe("Account Test Suit", () => {
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
      type: 1,
    });
    expect(account).toHaveProperty("id");
    expect(account.id).toMatch(
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    );
  });
});
