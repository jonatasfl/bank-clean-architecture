import CreateAccountUseCase from "../../src/core/usecases/CreateAccountUseCase";
import AccountRepositoryMemory from "../../src/infra/repositories/AccountRepositoryMemory";

describe("CreateAccountUseCase Test Suit", () => {
  it("should be able to create a new account", async () => {
    const accountRepoMemory = new AccountRepositoryMemory();
    const createAccount = new CreateAccountUseCase(accountRepoMemory);
    const account = await createAccount.execute({
      owner: "002",
      balance: 10000,
      dailyWithdrawLimit: 800,
      active: true,
      type: 1,
    });
    expect(account).toHaveProperty("id");
  });
});
