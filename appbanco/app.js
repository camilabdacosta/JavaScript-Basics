let nome ;
let sobrenome;
let idade ;
let valorEmprestimo;
let numAnos;
let taxaDeJuros;
let juros;
let montante;
let ehBomPagador;

function cadastraCliente(nomeCliente,sobrenomeCliente,idadeCliente
    ,valorEmprestimoCliente,numAnosCliente,ehBomPagadorCliente){
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

function adicionaAvalista(avalista){
avalistas.push(avalista);
}

function removeAvalista(){
    avalistas.pop();
}

function editaAvalista(nomeAvalista,indice){
avalistas[indice] = nomeAvalista;

}

function ordenaAvalista(){
   return avalistas.sort();
    
}
function exibeAvalista(){
    avalistas.forEach((avalista,indice) => {
        console.log(`O ${indice + 1} avalista é${avalista}` );
    });
}
adicionaAvalista("Andrew");
adicionaAvalista("José");
adicionaAvalista("Marcos");
//console.log(avalistas);
removeAvalista();
removeAvalista();
//console.log(avalistas);
editaAvalista("Manuel Silva",0);
//console.log(avalistas[0]);
//console.log(ordenaAvalista());