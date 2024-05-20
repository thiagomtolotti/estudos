class User {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public hasAccess() {
    return this.name === "Bob";
  }
}

// Null object
class NullUser {
  public id: number;
  public name: string;

  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  public hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id: number) {
  return users.find((user) => user.id === id) ?? new NullUser();
}

function printUser(id: number) {
  const user = getUser(id);

  console.log("Hello", user.name);

  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

printUser(1);
printUser(2);
printUser(3);
