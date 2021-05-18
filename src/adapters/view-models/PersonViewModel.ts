import Person, { PersonDTO } from "@/core/entities/Person";

export default class PersonViewModel {
  static create({ id, name, cpf, birthDate }: PersonDTO): Person {
    return new Person(name, cpf, birthDate, id);
  }
}
