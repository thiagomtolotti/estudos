import Cliente from "../Cliente";
import Conta from "./Conta";

export default class ContaPoupanca extends Conta {
  constructor(saldoInicial: number, cliente: Cliente, agencia: number) {
    super(saldoInicial, cliente, agencia);
  }

  public sacar(valor: number): number {
    const taxa = 1.02;
    const valorSacado = valor * taxa;

    return super.handleSacar(valorSacado);
  }
}
