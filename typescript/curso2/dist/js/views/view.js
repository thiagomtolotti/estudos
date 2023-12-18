export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
/*
    View é uma classe genérica abstrata
    genérica porque permite que a filha defina o tipo <T>
    abstrata porque não existe sozinha (precisa de uma filha para implementar o método template)
*/
