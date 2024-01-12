import { checkValue } from "./decorators/checkValue";

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

  @checkValue()
  public depositar(valor: number): number {
    this._saldo += valor;

    return valor;
  }

  @checkValue()
  public sacar(valor: number): number {
    if (this._saldo - valor < 0) {
      console.error(
        "Não é possível sacar o valor pois não há saldo disponível"
      );

      return 0;
    }

    this._saldo -= valor;

    return valor;
  }

  // Composição de classes
  public transferir(valor: number, conta: ContaCorrente) {
    const valorSacado = this.sacar(valor);

    valorSacado && conta.depositar(valorSacado);
  }
}
