import { Funcionario } from "./Funcionario";

export class Diretor extends Funcionario {
  constructor(nome: string, cpf: number, salario: number) {
    super(nome, cpf, salario, 2);
  }
}
