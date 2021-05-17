import Person, { PersonDTO } from "@/core/entities/Person";

export interface PersonRepository {
  index(): Promise<Person[]>;
  create(data: PersonDTO): Promise<Person>;
  getById(id: string): Promise<Person | null>;
  delete(id: string): Promise<void>;
}
