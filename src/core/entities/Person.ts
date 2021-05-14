import { v4 as uuidv4 } from "uuid";

export default class Person {
  id: string;

  name: string;

  cpf: number;

  birthDate: Date;

  constructor(name: string, cpf: number, birthDate: Date) {
    this.id = uuidv4();
    this.name = name;
    this.cpf = cpf;
    this.birthDate = birthDate;
  }
}
