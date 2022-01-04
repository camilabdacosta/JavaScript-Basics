
function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente,
    numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente) {
    cliente = {
        nome: nomeCliente,
        sobrenome: sobrenomeCliente,
        idade: idadeCliente,

        emprestimo: {
            valorEmprestimo: valorEmprestimoCliente,
            numAnos: numAnosCliente,
            ehBomPagador: ehBomPagadorCliente,
            taxaDeJuros: defineTaxa(idadeCliente),
            avalistas: avalistasCliente,
        },
        adicionaAvalista: function (avalista){
            this.emprestimo.avalistas.push(avalista);

        },
        removeAvalista : function(){
            this.emprestimo.avalistas.pop();
        },
        editaAvalista: function(nomeAvalista,indice){
            this.emprestimo.avalistas[indice]=nomeAvalista;
        },
        ordenaAvalista : function(){
            this.emprestimo.avalistas.sort();
        },
        exibeAvalistas: function(){
            this.emprestimo.avalistas.array.forEach((avalista,indice) => {
                console.log(`O ${indice + 1} avalista é ${avalista}`);
                
            });
        }
    }
    return cliente;
}
function defineTaxa(idadeCliente) {
    if (idade >= 18 && idade <= 25) {
        return 0.09;
    } else if (idade >= 26 && idade <= 35) {
        return 0.08;
    } else if (idade >= 36 && idade <= 50) {
        return 0.07;
    } else {
        return 0.06;
    }
}
const cliente1 = cadastraCliente("Manuel", "Silva", 24, 150000, 2, true, ["Manuel", "Rafael", "Bruno"]);

cliente1.adicionaAvalista("Camila");
cliente1.removeAvalista();
cliente1.editaAvalista("Manuel Silva",0);
cliente1.ordenaAvalista();
cliente1.exibeAvalistas();