import ContaCorrente from "./conta_corrente";

export default class Cliente {
  // Propriedades
  private _nome: string;
  private _cpf: number;
  private _contaCorrente: ContaCorrente;

  constructor(nome: string, cpf: number, agencia: number) {
    this._contaCorrente = new ContaCorrente(agencia);

    this._nome = nome;
    this._cpf = cpf;
  }

  // Métodos
  public get nome() {
    return this._nome;
  }

  public get cpf() {
    return this._cpf;
  }

  public get contaCorrente() {
    return this._contaCorrente;
  }
}
