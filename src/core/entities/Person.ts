export default class Person {
    id: string;

    name: string;

    cpf: number;

    birthDate: Date;

    constructor(name: string, cpf: number, birthDate: Date) {
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
    }
}