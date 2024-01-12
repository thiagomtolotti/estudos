import Cliente from "./cliente";

// Instâncias
const cliente1 = new Cliente("Ricardo", 10555789789, 15199);
const cliente2 = new Cliente("Alice", 8887897898, 15199);

console.clear();

console.log(cliente1.contaCorrente.saldo);
cliente1.contaCorrente.depositar(100);
console.log(cliente1.contaCorrente.saldo);
cliente1.contaCorrente.sacar(200);
console.log(cliente1.contaCorrente.saldo);
// console.log(cliente2);
