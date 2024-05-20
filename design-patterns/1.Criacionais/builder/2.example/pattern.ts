class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public mayonnaise?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true;
    // Retorna o próprio objeto, permite chamar múltiplos métodos em sequência
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addMayonnaise() {
    this.mayonnaise = true;
    return this;
  }
}

// Funciona, MAS é difícil de saber o que cada propriedade no construtor significa
const myLunch = new HotDog("Italian", true, false, true);

// Muito mais elegante
const myNewLunch = new HotDog("Italian").addKetchup().addMayonnaise();
