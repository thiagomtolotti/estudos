import { GrupoTransacao } from "./GrupoTransacao";
import { Transacao } from "./Transacao";
import { TipoTransacao } from "./TipoTransacao.js";

export class Conta {
	private nome: string;
	private _saldo: number;
	private trancacoes: Transacao[];

	constructor(nome: string) {
		this.nome = nome;
		this._saldo = JSON.parse(localStorage.getItem("saldo") || "0");
		this.trancacoes = JSON.parse(
			localStorage.getItem("trancacoes"),
			(key: string, value: any) => {
				if (key === "data") {
					return new Date(value);
				}

				return value;
			}
		);
	}

	public get saldo() {
		return this.saldo;
	}

	public getGruposTransacoes(): GrupoTransacao[] {
		const gruposTransacoes: GrupoTransacao[] = [];
		const listaTransacoes: Transacao[] = structuredClone(this.trancacoes);
		const transacoesOrdenadas: Transacao[] = listaTransacoes.sort(
			(t1, t2) => t2.data.getTime() - t1.data.getTime()
		);
		let labelAtualGrupoTransacao: string = "";

		for (let transacao of transacoesOrdenadas) {
			let labelGrupoTransacao: string = transacao.data.toLocaleDateString(
				"pt-br",
				{ month: "long", year: "numeric" }
			);
			if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
				labelAtualGrupoTransacao = labelGrupoTransacao;
				gruposTransacoes.push({
					label: labelGrupoTransacao,
					transacoes: [],
				});
			}
			gruposTransacoes.at(-1).transacoes.push(transacao);
		}

		return gruposTransacoes;
	}

	public getDataAcesso(): Date {
		return new Date();
	}

	registrarTransacao(novaTransacao: Transacao): void {
		if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
			this.depositar(novaTransacao.valor);
		} else if (
			novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA ||
			novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO
		) {
			this.debitar(novaTransacao.valor);
			novaTransacao.valor *= -1;
		} else {
			throw new Error("Tipo de Transação é inválido!");
		}

		this.trancacoes.push(novaTransacao);
		console.log(this.getGruposTransacoes());
		localStorage.setItem("transacoes", JSON.stringify(this.trancacoes));
	}

	public depositar(valor: number): void {
		if (valor <= 0) {
			throw new Error(
				"O valor a ser depositado deve ser maior que zero!"
			);
		}

		this._saldo += valor;
		localStorage.setItem("saldo", this._saldo.toString());
	}

	public debitar(valor: number): void {
		if (valor <= 0) {
			throw new Error("O valor a ser debitado deve ser maior que zero!");
		}
		if (valor > this._saldo) {
			throw new Error("Saldo insuficiente!");
		}

		this._saldo -= valor;
		localStorage.setItem("saldo", this._saldo.toString());
	}
}

const conta = new Conta("Joana da Silva Oliveira");

export default conta;
