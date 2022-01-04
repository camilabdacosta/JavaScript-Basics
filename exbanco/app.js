/*
Sistema cadastro de clientes
*/
let nome = "Manuel";
let sobrenome = 'Silva';
let idade = 24;
const numCliente = 324444;
let valorEmprestimo = 15000;
let taxaDeJuros =0.10;
let numAnos = 6;
let ehBomPagador = true;

/* Montante = valorEmprestimo + juros
juros = valorEmprestimo * taxaDeJuros * numAnos
 */

/* let juros = valorEmprestimo * taxaDeJuros* numAnos;
let montante = valorEmprestimo + juros;
console.log("Valor do montante" + montante); */

if(ehBomPagador){
console.log("O cliente "+ nome + "é um bom pagador");
}else{
    console.log("O cliente "+ nome + "não é um bom pagador");

}
