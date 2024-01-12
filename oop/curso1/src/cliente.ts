export default class Cliente {
  // Propriedades
  private _nome: string;
  private _cpf: number;
  private _agencia: number;
  private _saldo: number;

  constructor(nome: string, cpf: number, agencia: number, saldo: number) {
    this._nome = nome;
    this._cpf = cpf;
    this._agencia = agencia;
    this._saldo = saldo;
  }

  // Métodos
  get nome() {
    return this._nome;
  }

  get cpf() {
    return this._cpf;
  }

  get agencia() {
    return this._agencia;
  }

  get saldo() {
    return this._saldo;
  }
}
