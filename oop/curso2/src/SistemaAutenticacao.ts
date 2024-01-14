// Polimorfismo - SistemaAutenticacao lê de qualquer objeto que tenha o método 'autenticar' de forma pública, não necessita de herança pra compartilhar código

import { Autenticavel } from "./models/IAutenticavel";

export abstract class SistemaAutenticacao {
  static login(user: Autenticavel, senha: string): boolean {
    if (!SistemaAutenticacao.ehAutenticavel) return false;

    return user?.autenticar(senha);
  }

  static ehAutenticavel(Autenticavel: Autenticavel) {
    return (
      "autenticar" in Autenticavel &&
      Autenticavel.autenticar instanceof Function
    );
  }
}
