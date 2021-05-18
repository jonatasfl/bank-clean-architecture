import { PersonRepository } from "@/core/repositories/PersonRepository";
import CreatePersonUseCase from "@/core/usecases/person/CreatePersonUseCase";
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

  it("should be able to create a person", async () => {
    const createPersons = new CreatePersonUseCase(personRepoMemory);
    const person = await createPersons.execute({ name: "Person 2", cpf: "11111111111", birthDate: "1992-01-01" });
    expect(person).toHaveProperty("id");
  });
});
