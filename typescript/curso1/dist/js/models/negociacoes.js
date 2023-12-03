export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    lista() {
        return this._negociacoes;
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
}
