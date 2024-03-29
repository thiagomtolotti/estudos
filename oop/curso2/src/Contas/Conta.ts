import Cliente from "../Cliente";

import { checkValue } from "../decorators/checkValue";

export default abstract class Conta {
  private _saldo: number;
  public readonly cliente: Cliente;
  public readonly agencia: number;

  constructor(saldoInicial: number, cliente: Cliente, agencia: number) {
    this._saldo = saldoInicial;
    this.cliente = cliente;
    this.agencia = agencia;
  }

  public get saldo() {
    return this._saldo;
  }

  @checkValue()
  public depositar(valor: number): number {
    this._saldo += valor;

    return valor;
  }

  protected abstract sacar(valor: number): number;

  @checkValue()
  protected handleSacar(valor: number): number {
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
  public transferir(valor: number, conta: Conta) {
    if (conta === this) {
      console.error(
        "Não é possível realizar uma transferência para a mesma conta"
      );
      return;
    }

    const valorSacado = this.sacar(valor);

    valorSacado && conta.depositar(valorSacado);
  }

  teste() {
    console.log("teste na classe conta");
  }
}
