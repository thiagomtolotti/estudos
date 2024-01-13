import Cliente from "../Cliente";
import Conta from "./Conta";

export class ContaSalario extends Conta {
  constructor(cliente: Cliente) {
    super(0, cliente, 100);
  }

  public sacar(valor: number): number {
    const taxa = 1.2;
    const valorSacado = valor * taxa;

    return super.handleSacar(valorSacado);
  }
}
