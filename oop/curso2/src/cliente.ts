import ContaCorrente from "./Contas/ContaCorrente";
import { Autenticavel } from "./models/IAutenticavel";

export default class Cliente implements Autenticavel {
  // Propriedades
  public readonly nome: string;
  public readonly cpf: number;
  private _senha: string;

  constructor(nome: string, cpf: number, senha: string) {
    this.nome = nome;
    this.cpf = cpf;
    this._senha = senha;
  }

  public autenticar(senha: string) {
    return this._senha === senha;
  }
}
