import { Autenticavel } from "../models/IAutenticavel";

export abstract class Funcionario implements Autenticavel {
  public readonly nome: string;
  public readonly cpf: number;
  public readonly salario: number;
  private bonificacao: number;
  private _senha: string | null;

  constructor(
    nome: string,
    cpf: number,
    salario: number,
    bonificacao: number = 1
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
    this.bonificacao = bonificacao;
    this._senha = null;
  }

  public autenticar(senha: string) {
    return this._senha === senha;
  }

  public cadastrarSenha(novaSenha: string) {
    this._senha = novaSenha;
  }
}
