import ContaCorrente from "./ContaCorrente";

export default class Cliente {
  // Propriedades
  public readonly nome: string;
  public readonly cpf: number;
  public readonly contaCorrente: ContaCorrente;

  constructor(nome: string, cpf: number, agencia: number) {
    this.contaCorrente = new ContaCorrente(agencia);

    this.nome = nome;
    this.cpf = cpf;
  }
}
