class Address {
  constructor(public zip: string, public street: string) {}
}

// Nunca utilizar a classe User para criar usuários, somente a 'UserBuilder'
class User {
  public age?: number;
  public phone?: string;
  public address?: Address;

  constructor(public name: string) {}
}

class UserBuilder {
  public user: User;

  constructor(name: string) {
    this.user = new User(name);
  }

  public setAge(age: number) {
    this.user.age = age;

    // Métodos dentro do builder retornam 'this' para permitirem múltiplas chamadas em uma mesma linha
    return this;
  }

  public setPhone(phone: string) {
    this.user.phone = phone;

    return this;
  }

  public setAddress(address: Address) {
    this.user.address = address;

    return this;
  }

  // Faz com que seja retornado o usuário retornado e não a instância de UserBuilder criada
  public build() {
    return this.user;
  }
}

const user = new UserBuilder("Bob")
  .setAge(10)
  .setPhone("11111111")
  .setAddress(new Address("1", "Main"))
  .build();

console.log(user);

// Outra opção de builder
class User2 {
  public age?: number;
  public phone?: string;
  public address?: Address;

  constructor(
    public name: string,
    {
      age,
      phone = "1234567890",
      address,
    }: { age?: number; phone?: string; address?: Address } = {}
  ) {
    this.name = name;
    if (age) this.age = age;
    if (phone) this.phone = phone;
    if (address) this.address = address;
  }
}

const user2 = new User2("Bob", {
  age: 10,
  phone: "111111",
  address: new Address("1", "Main"),
});
console.log(user2);
