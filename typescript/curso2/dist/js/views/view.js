export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
/*
    View é uma classe genérica abstrata
    genérica porque permite que a filha defina o tipo <T>
    abstrata porque não existe sozinha (precisa de uma filha para implementar o método template)
*/
