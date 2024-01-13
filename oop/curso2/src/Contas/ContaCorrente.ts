import Cliente from "../Cliente";
import Conta from "./Conta";

export default class ContaCorrente extends Conta {
  public static numeroDeContas: number = 0;

  constructor(cliente: Cliente, agencia: number) {
    super(0, cliente, agencia);

    ContaCorrente.numeroDeContas += 1;
  }

  public sacar(valor: number): number {
    const taxa = 1.1;
    const valorSacado = valor * taxa;

    return super.handleSacar(valorSacado);
  }

  teste() {
    super.teste();
    console.log("Teste na classe conta corrente");
  }
}
