export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  // Programação defensiva - Cria uma cópia da data para evitar que seja sobrescrita
  get data() {
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume() {
    return this.quantidade * this.valor;
  }
}
