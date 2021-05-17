import { AccountRepository } from "@/core/repositories/AccountRepository";
import CreateAccountUseCase from "@/core/usecases/account/CreateAccountUseCase";
import DeleteAccountUseCase from "@/core/usecases/account/DeleteAccountUseCase";
import GetAccountUseCase from "@/core/usecases/account/GetAccountUseCase";
import ListAccountsUseCase from "@/core/usecases/account/ListAccountsUseCase";
import AccountRepositoryMemory from "@/infra/repositories/AccountRepositoryMemory";

let accountRepoMemory: AccountRepository;

describe("Account Test Suit", () => {
  beforeEach(() => {
    accountRepoMemory = new AccountRepositoryMemory();
  });

  it("should be able to list all accounts", async () => {
    const listAccounts = new ListAccountsUseCase(accountRepoMemory);
    const accounts = await listAccounts.execute();
    expect(accounts[0]).toHaveProperty("id", "0fd767b7-7795-441a-bb0f-ebc1014da34d");
    expect(accounts[0].createdAt).toEqual(new Date("2021-05-17T21:20:21.477Z"));
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
    expect(account.id).toMatch(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
  });

  it("should be able to get account by id", async () => {
    const getAccount = new GetAccountUseCase(accountRepoMemory);
    const account = await getAccount.execute("0fd767b7-7795-441a-bb0f-ebc1014da34d");
    expect(account?.owner).toBe("001");
  });

  it("should throw an error if account does not exists", async () => {
    const getAccount = new GetAccountUseCase(accountRepoMemory);
    expect(getAccount.execute("xxx")).rejects.toThrow();
  });

  it("should be able to delete an account", async () => {
    const createAccount = new CreateAccountUseCase(accountRepoMemory);
    const account = await createAccount.execute({
      owner: "002",
      balance: 10000,
      dailyWithdrawLimit: 800,
      active: true,
      type: 1
    });
    const getAccount = new GetAccountUseCase(accountRepoMemory);
    expect(await getAccount.execute(account.id)).toHaveProperty("owner", "002");

    const usecase = new DeleteAccountUseCase(accountRepoMemory);
    await usecase.execute(account.id);
    expect(getAccount.execute(account.id)).rejects.toThrow();
  });
});
