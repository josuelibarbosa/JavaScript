var nome = "Josueli da Mata Barbosa";
var x = nome.length;
console.log(x);

resultado = x > 15 ? "Obrigado" : "Por favor preencha seu nome completo";
console.log(resultado);

//Colocar texto em caixa alta
var res = nome.toLocaleUpperCase();
console.log(res);

//Descobrir posição da palavra na frase
var jogo = "Celtics vs Lakers melhor time";
var posicao = jogo.indexOf("Lakers");
console.log(posicao);

//Cortar string
var cortado = jogo.slice(11,);
console.log(cortado);

//Saber se existe uma palavra na frase
var val = jogo.includes("Lakers");
console.log(val); 

//Concatenação (junção de strings)
var str1 = "Hello";
var str2 = " Turma";
var str3 = str1.concat(str2);
console.log(str3);

//Trim [tira o espaço em excesso do fim e inicio da frase]
var frase = "                  Olá estou aprendendo JavaScript";
console.log(frase.trim());

//Substring
var novaString = jogo.substring(11,17);
console.log(novaString);

//Substituir elementos na string
var frase = "Olá mundo";
if(frase.startsWith("Olá")){
    let sub = frase.substring(4);
    let novaString = sub.replace("mundo","pessoal")
    let novaStringMaiuscula = novaString.toUpperCase();
    console.log(novaStringMaiuscula)
}

//
var url = "https://minhaempresa.com.br/filme?nome=poder&atores=Josueli,Joao";
const parametros = url.split("?")[1]
console.log(parametros)
const valores = parametros.split("&");
console.log(valores)

for(let i = 0; i <valores.length; i++){
    if(valores[i].startsWith("atores=")){
        valores[i] = "atores=" + valores[i].substring(7).toUpperCase();
    }
}
console.log(valores)