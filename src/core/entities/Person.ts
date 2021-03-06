import { v4 as uuidv4 } from "uuid";

export default class Person {
  id: string;

  name: string;

  cpf: string;

  birthDate: string | Date;

  constructor(name: string, cpf: string, birthDate: string | Date, id?: string) {
    this.id = id || uuidv4();
    this.name = name;
    this.cpf = cpf;
    this.birthDate = birthDate;
  }
}

export type PersonDTO = {
  id?: string;
  name: string;
  cpf: string;
  birthDate: string | Date;
};
