import Cliente from "./Cliente";
import Conta from "./Conta";

export default class ContaCorrente extends Conta {
	public static numeroDeContas: number = 0;

	constructor(cliente: Cliente, agencia: number) {
		super(0, cliente, agencia);

		ContaCorrente.numeroDeContas += 1;
	}
}
