import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private _negociacoes: Array<Negociacao> = [];

  lista(): ReadonlyArray<Negociacao> {
    return this._negociacoes;
  }

  adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }
}
