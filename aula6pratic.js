var drink = "Chá";

switch(drink){
    case "Café":
        console.log("Você escolheu: café, o valor a pagar é R$ 10,50");
        break;
    case "Chá":
        console.log("Você escolheu: chá, o valor a pagar é R$ 9,50");
        break;
    case "Leite":
        console.log("Você escolheu: leite, o valor a pagar é R$ 5,00");
        break;
    default:
        console.log("Esta bebida não esta em nosso cardápio, por favor escolha entre: Café, chá ou leite!")
}