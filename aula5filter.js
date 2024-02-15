//Forma inline para filter
var numbers = [1,2,3,4,5,6,7,8,9,10]
var evens = numbers.filter(item => item % 2 == 0);
console.log(evens); 

//Função dentro do filter
var numeros = [1,2,3,4,5,6,7,8,9,10];
function buscarNumerosPares (value) {
    if (value % 2 == 0)
    return value;
}
var numerosPares = numeros.filter(buscarNumerosPares); 
console.log(numerosPares);

//Função fora do filter
function buscarValores(valor){
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

//Formas simplificadas:
// #1
var r1 = numeros.filter((valor) =>{
    return valor > 5
} );
console.log(r1);

// #2
var r2 = numeros.filter(valor => valor > 5);
console.log(r2);

//Pratica
var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var pessoasListagem = funcionarios.filter(
    function(valor){
    console.log(valor.nome);
})

var pessoasListagem = funcionarios.filter(
    function(valor){
    return valor.nome.length < 5
})
console.log(pessoasListagem);