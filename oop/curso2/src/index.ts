import Cliente from "./Cliente";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

// Instâncias
const cliente1 = new Cliente("Ricardo", 10555789789);
const contaCorrenteRicardo = new ContaCorrente(cliente1, 15199);
const contaPoupancaRicardo = new ContaPoupanca(5000, cliente1, 15199);

console.clear();

contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.transferir(1000, contaCorrenteRicardo);

console.log(ContaCorrente.numeroDeContas);
