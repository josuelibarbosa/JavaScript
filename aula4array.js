var valores = [8,1,7,2,9]

console.log(valores[0]);

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

var carros = [];
carros[0] = "Fiat";
carros[1] = "Chevrolet";

var motos = new Array("BMW", "Yamaha", "Honda", "Kawasaki")

// Calcular a média de todos os números de um array
var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){ 
    soma += valores[pos];
}
var media = soma/valores.length;

console.log(media);

//Inverter itens de um array
console.log("Array Invertido " + valores.reverse());

//Transformar array em string
var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('|'));

//Retirar primeiro elemento de um array
var retirado = arr1.shift();

console.log(retirado);
console.log(arr1);

//Acrescentar primeiro elemento em um array
arr1.unshift(0);
console.log(arr1);

//Pegar posição de um elemento da array
console.log("Posição do número 3: " + arr1.indexOf(3));

//Acrescente item em um array
arr1.push(7);
console.log(arr1);

//Retirar o último elemento de uma array
arr1.pop();
console.log(arr1);
