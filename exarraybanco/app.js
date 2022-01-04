/* array sistema cadastro clientes */

let nome ;
let sobrenome;
let idade ;
let valorEmprestimo;
let numAnos;
let taxaDeJuros;
let juros;
let montante;
let ehBomPagador;
let avalistas;
function cadastraCliente(nomeCliente,sobrenomeCliente,idadeCliente
    ,valorEmprestimoCliente,numAnosCliente,ehBomPagadorCliente =false,avalistasCliente){
        nome = nomeCliente;
        sobrenome =sobrenomeCliente
        idade= idadeCliente;
        valorEmprestimo = valorEmprestimoCliente;
        numAnos = numAnosCliente;
        ehBomPagador = ehBomPagadorCliente;
     taxaDeJuros = defineTaxa(idadeCliente);
     avalistas=avalistasCliente;
}
function defineTaxa(idadeCliente){
    if(idade>= 18 && idade <=25){
        return 0.09;
    }else if(idade >= 26 && idade <= 35){
        return 0.08;
    }else if(idade >=36 && idade <=50){
        return 0.07;
    }else{
        return 0.06;
    }
}
cadastraCliente("Manuel","Silva",24,150000,2,true,["Manuel","Rafael","Bruno"]);
console.log(nome);
console.log(avalistas);
console.log(avalistas[0]);
console.log(avalistas[1]);
console.log(avalistas[2]);