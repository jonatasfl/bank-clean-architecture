import { PersonRepository } from "@/core/repositories/PersonRepository";
import ListPersonsUseCase from "@/core/usecases/person/ListPersonsUseCase";
import PersonRepositoryMemory from "@/infra/repositories/PersonRepositoryMemory";

describe("Person Use Cases Test Suit", () => {
  let personRepoMemory: PersonRepository;

  beforeEach(() => {
    personRepoMemory = new PersonRepositoryMemory();
  });

  it("should be defined", () => {
    expect(personRepoMemory).toBeDefined();
  });

  it("should be able to list all persons", async () => {
    const listPersons = new ListPersonsUseCase(personRepoMemory);
    const persons = await listPersons.execute();
    expect(persons[0]).toHaveProperty("id", "8b0bb0ea-7017-48b2-8b74-365cab76e7da");
  });
});
