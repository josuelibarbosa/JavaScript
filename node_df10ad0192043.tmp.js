//For Each
//1
var a = [10,20,30,40,50,60];

for (let valor of a){
    console.log(valor);
}

//2
const carros = [

    { id: 1, modelo: "Corsa", marca: "“Chevrolet", preco: 45000, dataCriacao: "01/01/2022" },
  
    { id: 2, modelo: "Punto", marca: "Fiat", preco: 35000, dataCriacao: "01/02/2022" },
  
    { id: 3, modelo: "Gol", marca: "Volkswagen", preco: 40000, dataCriacao: "01/03/2022" }
  
  ];
  
  let totalPrecos = 0;
  
  for (let i = 0; i < carros.length; i) {
  
    const carro = carros[i];
  
    totalPrecos += carro.preco;
  
  }
  
  console.log("Total dos preços dos carros:", totalPrecos);

// For Each
a.forEach(valor => console.log(valor))

//1
var tot = 0
a.forEach(valor => {tot += valor;
})

console.log(tot);

//2
a.forEach(function(valor,indice,array){
    console.log(array[indice]);
})

//ForIn
for(i in a) {
    console.log(a[i]);
}

var carro = [{modelo: "Audi A3", marca: "Audi", ano: "2020"}, {modelo: "Compass", marca: "Jeep", ano: 2021}]

for (let caracteristica in carro){
    console.log(carro[caracteristica]);
}

//ForOf, quando você quer pegar uma propriedade especifica, usar um of, do contrário usar o in
var b = [1,2,3,4];
for (var value of b) {
    var c = value * 2;
    console.log("2 * value is: %d", c);
}

