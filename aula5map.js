// Números
var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
    return valor * 2;
});

console.log(nums);

// Objetos
var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var func = funcionarios.map(pessoa => pessoa.nome)
console.log(func);