import Person, { PersonDTO } from "@/core/entities/Person";
import { PersonRepository } from "@/core/repositories/PersonRepository";

export default class CreatePersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  async execute(data: PersonDTO): Promise<Person> {
    const person = await this.personRepository.create(data);
    return person;
  }
}
