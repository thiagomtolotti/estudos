import Cliente from "./Cliente";

// Instâncias
const cliente1 = new Cliente("Ricardo", 10555789789, 15199);
const cliente2 = new Cliente("Alice", 8887897898, 15199);

console.clear();

cliente1.contaCorrente.depositar(1000);
cliente1.contaCorrente.transferir(-500, cliente2.contaCorrente);

console.log(cliente1.contaCorrente.saldo);
console.log(cliente2.contaCorrente.saldo);
// console.log(cliente2);
