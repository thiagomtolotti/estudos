import ContaCorrente from "./ContaCorrente";

export default class Cliente {
	// Propriedades
	public readonly nome: string;
	public readonly cpf: number;

	constructor(nome: string, cpf: number) {
		this.nome = nome;
		this.cpf = cpf;
	}
}
