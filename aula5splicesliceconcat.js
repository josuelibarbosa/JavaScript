//Splice
var ar = [1,2,3,4,5,6,7];

ar.splice(1,1);

console.log(ar);

//Substituição de elementos
var nomes = ["Maria", "João", "Lucas", "Pedro"];
var novos = nomes.splice(1,1,"Luiz");
console.log(nomes);
console.log(novos);

 // Slice [cria uma cópia sem alterar a array original]
var pessoa = ["Eduardo","Monica","Joana","Rosana"]
var pessoas1= pessoa.slice(1,3);
console.log(pessoa);
console.log(pessoas1);

//Concat [concatenação, junção de duas ou mais arrays]
var gerente = ["Davi","Manuela"]
var empresa = pessoa.concat(gerente);
console.log(empresa);