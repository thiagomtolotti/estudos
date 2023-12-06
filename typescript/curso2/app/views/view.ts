export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;

  public update(model: T) {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
/*
	View é uma classe genérica abstrata
	genérica porque permite que a filha defina o tipo <T>
	abstrata porque não existe sozinha (precisa de uma filha para implementar o método template)
*/
