// Polimorfismo - SistemaAutenticacao lê de qualquer objeto que tenha o método 'autenticar' de forma pública, não necessita de herança pra compartilhar código

import { Autenticavel } from "./models/IAutenticavel";

export class SistemaAutenticacao {
  static login(user: Autenticavel, senha: string): boolean {
    return user?.autenticar(senha);
  }
}
