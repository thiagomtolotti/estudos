import { TipoTransacao } from "./TipoTransacao.js";
export class Conta {
    nome;
    _saldo;
    trancacoes;
    constructor(nome) {
        this.nome = nome;
        this._saldo = JSON.parse(localStorage.getItem("saldo") || "0");
        this.trancacoes = JSON.parse(localStorage.getItem("trancacoes"), (key, value) => {
            if (key === "data") {
                return new Date(value);
            }
            return value;
        });
    }
    get saldo() {
        return this.saldo;
    }
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(this.trancacoes);
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
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
    getDataAcesso() {
        return new Date();
    }
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA ||
            novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error("Tipo de Transação é inválido!");
        }
        this.trancacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(this.trancacoes));
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        this._saldo += valor;
        localStorage.setItem("saldo", this._saldo.toString());
    }
    debitar(valor) {
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
