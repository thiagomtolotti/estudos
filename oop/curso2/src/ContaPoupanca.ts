import Cliente from "./Cliente";
import Conta from "./Conta";

export default class ContaPoupanca extends Conta {
	constructor(saldoInicial: number, cliente: Cliente, agencia: number) {
		super(saldoInicial, cliente, agencia);
	}
}
