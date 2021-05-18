import PersonViewModel from "@/adapters/view-models/PersonViewModel";
import Person, { PersonDTO } from "@/core/entities/Person";
import { PersonRepository } from "@/core/repositories/PersonRepository";

type PersonMemory = {
  id: string;
  name: string;
  cpf: string;
  birthDate: string | Date;
};

export default class PersonRepositoryMemory implements PersonRepository {
  persons: PersonMemory[] = [
    {
      id: "8b0bb0ea-7017-48b2-8b74-365cab76e7da",
      name: "John Doe",
      cpf: "09955584427",
      birthDate: "1989-10-31"
    }
  ];

  index(): Promise<Person[]> {
    const persons = this.persons.map(item => PersonViewModel.create(item));
    return Promise.resolve(persons);
  }

  create(data: PersonDTO): Promise<Person> {
    const person = PersonViewModel.create(data);
    this.persons.push(person);
    return Promise.resolve(person);
  }

  getById(id: string): Promise<Person | null> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
