import Cliente from "./Cliente";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";
import { ContaSalario } from "./ContaSalario";

// Instâncias
const cliente1 = new Cliente("Ricardo", 10555789789);
const contaCorrenteRicardo = new ContaCorrente(cliente1, 15199);
const contaPoupancaRicardo = new ContaPoupanca(5000, cliente1, 15199);
const contaSalarioRicardo = new ContaSalario(cliente1);

console.clear();

contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(500);
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.teste();
