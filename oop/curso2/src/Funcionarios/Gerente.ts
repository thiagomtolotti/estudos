import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
  constructor(nome: string, cpf: number, salario: number) {
    super(nome, cpf, salario, 1.1);
  }
}
