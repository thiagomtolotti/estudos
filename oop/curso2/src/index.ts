// import Cliente from "./Cliente";
// import ContaCorrente from "./Contas/ContaCorrente";
// import ContaPoupanca from "./Contas/ContaPoupanca";
// import { ContaSalario } from "./Contas/ContaSalario";

import Cliente from "./Cliente";
import ContaCorrente from "./Contas/ContaCorrente";
import { Diretor } from "./Funcionarios/Diretor";
import { Gerente } from "./Funcionarios/Gerente";
import { SistemaAutenticacao } from "./SistemaAutenticacao";

// // Instâncias
// const cliente1 = new Cliente("Ricardo", 10555789789);
// const contaCorrenteRicardo = new ContaCorrente(cliente1, 15199);
// const contaPoupancaRicardo = new ContaPoupanca(5000, cliente1, 15199);
// const contaSalarioRicardo = new ContaSalario(cliente1);

// console.clear();

// contaCorrenteRicardo.depositar(1000);
// contaCorrenteRicardo.sacar(500);
// console.log(contaCorrenteRicardo.saldo);

// contaCorrenteRicardo.teste();

const diretor = new Diretor("Thiago", 54565456, 10000);
const gerente = new Gerente("Rafael", 45646546, 5000);
const cliente = new Cliente("Lais", 12378945601, "456");
const contaCorrenteLais = new ContaCorrente(cliente, 15199);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123");

const isGerenteLoggedIn = SistemaAutenticacao.login(diretor, "123456");
const isDiretorLoggenIn = SistemaAutenticacao.login(gerente, "123");
const isClienteLoggedIn = SistemaAutenticacao.login(cliente, "456");

console.log(isGerenteLoggedIn);
console.log(isDiretorLoggenIn);
console.log(isClienteLoggedIn);
