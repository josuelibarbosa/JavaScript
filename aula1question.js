let rlSync = require('readline-sync');
let nome = rlSync.question("Qual o seu nome?\n")

console.log(`Olá, ${nome}`)

let idade = rlSync.question("Qual a sua idade?\n")

console.log(`Sua idade é: ${idade}`)

//no terminal digitar: npm install readline-sync --save
//permite fazer input de informações pelo prompt, você faz pergunta e o usuário responde pelo console
// para rodar no prompt, digite: node e o nome do arquivo com a extensão
