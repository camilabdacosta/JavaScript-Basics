let nome ="Manuel";
let sobrenome = "Silva";
let idade =24;
let valorEmprestimo;
let numAnos;
let taxaDeJuros;
let juros;
let montante;

if(idade>= 18 && idade <=25){
    taxaDeJuros =0.09;
}else if(idade >= 26 && idade <= 35){
    taxaDeJuros =0.08;
}else if(idade >=36 && idade <=50){
    taxaDeJuros =0.07;
}else{
    taxaDeJuros =0.06;
}

while(true){
    valorEmprestimo = parseInt(prompt("insira o valor do emprestimo"));
   if(valorEmprestimo==0){
    break;
   }
    numAnos = parseInt(prompt("insira o numero de anos"));
    juros= valorEmprestimo * taxaDeJuros * numAnos;
    montante = valorEmprestimo + juros;
    console.log(montante);
}