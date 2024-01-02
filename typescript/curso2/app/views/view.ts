export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);

    if (!elemento) {
      throw Error(`Seletor ${seletor} não existe no DOM`);
    }

    this.elemento = elemento as HTMLElement;

    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T) {
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
