// Primeira abordagem
class Settings {
  static instance: Settings;
  public readonly mode = "dark";

  private constructor() {}

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }
}

export const settings = Settings.getInstance();

// Segunda abordagem

// Em JS existem objetos literais, dados globais, e os objetos são referenciados por referência
// Criar um objeto global tem o mesmo efeito do singleton
export const settings2 = {
  dark: "true",
};
