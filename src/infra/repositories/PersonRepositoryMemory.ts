import Person, { PersonDTO } from "@/core/entities/Person";
import { PersonRepository } from "@/core/repositories/PersonRepository";

export default class PersonRepositoryMemory implements PersonRepository {
  persons = [
    {
      id: "8b0bb0ea-7017-48b2-8b74-365cab76e7da",
      name: "John Doe",
      cpf: 09955584427,
      birthDate: "198-10-31"
    }
  ];

  index(): Promise<Person[]> {
    throw new Error("Method not implemented.");
  }

  create(data: PersonDTO): Promise<Person> {
    throw new Error("Method not implemented.");
  }

  getById(id: string): Promise<Person | null> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
