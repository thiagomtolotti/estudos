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

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id: number) {
  return users.find((user) => user.id === id);
}

function printUser(id: number) {
  const user = getUser(id);

  // Precisa sempre checar se o usuário existe
  let name = "Guest";
  if (user && user.name !== "null") name = user.name;

  console.log("Hello", name);

  if (user && user.hasAccess && user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

printUser(1);
printUser(2);
printUser(3);
