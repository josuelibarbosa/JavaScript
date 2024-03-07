//forma de criar objetos
const pessoa = {
    nome: 'Josueli',
    sobrenome: 'Barbosa'
}

console.log(pessoa['sobrenome'])

//outra forma de criar objetos
const funcionario = new Object();
funcionario.nome = "Josueli"
funcionario.sobrenome = "da Mata"

console.log(funcionario.nome)

//criar objeto com function
function criarPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }

    }
}

const p1 = criarPessoa("João","Stabelin")
const p2 = criarPessoa("Renan","Mardegan")

console.log(p1.nomeCompleto)
console.log(p2.nomeCompleto)