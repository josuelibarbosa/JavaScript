//Função Regular
function multiplicar(x,y){
    return x * y
}

var a = multiplicar(4,2);
console.log(a);

var b = multiplicar(6,7);
console.log(b);

function somaValores(a,b = 2,c = 6){
    var total = a + b + c
    return total
}

var f = somaValores(8);
console.log(f);

//Função Anônima
var infoCal = function(a,b,c){
    return a + b + c; 
}
console.log(infoCal(2,5,7));

//Arrow function
const soma = (num1,num2) =>{
    return num1 + num2;
}
console.log(soma(3,6));

const numeros = [1,2,3,4,5,6];
const valores = numeros.map((num) => num * num);
console.log(valores);

var listaProdutos = ["geladeira","fogão","air fryer"];
var listaEmMaiusculo = listaProdutos.map(primeiraEmMaiusculo);

function primeiraEmMaiusculo(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}
console.log(listaEmMaiusculo);
