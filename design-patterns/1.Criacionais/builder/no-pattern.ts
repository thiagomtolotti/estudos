class Address {
  constructor(public zip: string, public street: string) {}
}

class User {
  constructor(
    public name: string,
    public age?: number,
    public phone?: string,
    public address?: Address
  ) {}
}

// Caso queira criar um usuário com endereço mas sem idade e telefone é necessário passar undefined 2x no construtor
// Sem olhar a classe é impossível dizer ao que os undefined se referem, e é preciso decorar a ordem do construtor
const user = new User("Bob", undefined, undefined, new Address("1", "Main"));
console.log(user);
