import Cliente from "./Cliente";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

// Instâncias
const cliente1 = new Cliente("Ricardo", 10555789789);
const contaCorrenteRicardo = new ContaCorrente(cliente1, 15199);

console.clear();

contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(1000);

const contaPoupancaRicardo = new ContaPoupanca(5000, cliente1, 15199);

console.log(contaPoupancaRicardo.transferir(500, contaCorrenteRicardo));
