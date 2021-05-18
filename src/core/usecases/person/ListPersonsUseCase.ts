import Person from "@/core/entities/Person";
import { PersonRepository } from "@/core/repositories/PersonRepository";

export default class ListPersonsUseCase {
  constructor(private personRepository: PersonRepository) {}

  async execute(): Promise<Person[]> {
    const persons = await this.personRepository.index();
    return Promise.resolve(persons);
  }
}
