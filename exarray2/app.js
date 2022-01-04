/* Adcionando elementos array */

const frutas= [];
frutas[0] ="Abacaxi";
frutas[1]="Laranja";
frutas[2]="Ma�a";
frutas[3]="Lim�o";


console.log(frutas);

/* Editando elementos */

frutas[2]="Uva";
console.log(frutas);

/* Push -adicionar final do array */
const frutas =["Ma�a","Banana"];
frutas.push("Melancia");
console.log(frutas);

/* unshift-adicionar no come�o do array */
const frutas =["Ma�a","Banana"];
frutas.unshift("Melancia");
console.log(frutas);

/* pop - remove o ultimo elemento do array*/
const frutas =["Ma�a","Banana"];
frutas.pop();
console.log(frutas);

/* shift -remove primeiro elemento do array */
const frutas =["Ma�a","Banana"];
frutas.shift();
console.log(frutas);

/* splice -remove um intervalo de elementos do array */
const frutas =["Melancia","Banana","Morango","Uva","Ma�a"];
frutas.splice(3,2);
console.log(frutas);

/* indexof - retorna o indice do elemento informado*/
const frutas =["Melancia","Banana","Morango","Uva","Ma�a"];
let indice1=frutas.indexOf("Melancia");
let indice2 = frutas.indexOf("Uva")

console.log(frutas[indice1]);
console.log(frutas[indice2]);

/* sort - ordena o array em ordem crescente */
const frutas =["Melancia","Banana","Morango","Uva","Ma�a"];
frutas.sort();
console.log(frutas);

/* reverse-iverte a ordem do array */
frutas.reverse();
console.log(frutas);

 /* map- um array de origem que gera outro array */
 const numeros =[1,4,9,16];
 const novosNumeros = numeros.map((numero)=> numero *2)
 console.log(novosNumeros);

 /* filter - gera um novo array */
const numeros = [1,4,9,16];
const impares = numeros.filter((numero)=> numero %2 ===1);
console.log(impares);

/* find - obtem o valor do priemiro elemento no array que satizfaz a condi��o */
const numeros = [10,15,25,55,40];
let numeroRetornado = numeros.find((numero)=> numero >25);
console.log(numeroRetornado);