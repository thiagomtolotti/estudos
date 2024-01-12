export default class ContaCorrente {
  private _agencia: number;
  private _saldo: number;

  constructor(agencia: number) {
    this._agencia = agencia;
    this._saldo = 0;
  }

  public get agencia() {
    return this._agencia;
  }

  public get saldo() {
    return this._saldo;
  }

  public depositar(valor: number): number {
    if (valor < 0) {
      console.error("Não é possível depositar um valor negativo");

      return 0;
    }

    this._saldo += valor;

    return valor;
  }

  public sacar(valor: number): number {
    if (valor < 0) {
      console.error("Não é possível sacar um valor negativo");
      return 0;
    }

    if (this._saldo - valor < 0) {
      console.error(
        "Não é possível sacar o valor pois não há saldo disponível"
      );

      return 0;
    }

    this._saldo -= valor;

    return valor;
  }
}
