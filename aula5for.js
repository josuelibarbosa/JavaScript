//For Each
var a = [10,20,30,40,50,60];

for (let valor of a){
    console.log(valor);
}

// Exibir valores
a.forEach(valor => console.log(valor))

//Soma
var tot = 0
a.forEach(valor => {tot += valor;
})

console.log(tot);

//Indice
a.forEach(function(valor,indice,array){
    console.log(array[indice]);
})

//ForIn
for(i in a) {
    console.log(a[i]);
}

//ForOf
var b = [1,2,3,4];
for (var value of b) {
    var c = value * 2;
    console.log("2 * value is: %d", c);
}

