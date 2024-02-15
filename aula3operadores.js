//básicos
var n = 3;
    //n = n - 6; seria a forma usual, para simplificar, colocar o simbolo antes do igual.
    n -= 6;
console.log(n);

//incremento e decremento
var x = 10;
    x++
    // x-- para decremento
    console.log(x);

//comparação
    console.log(n < x);
    console.log(n != x);
    console.log(n <= x);

var a = 10;
    b = 20;
    c = 60;

console.log(n <= x && b!= c);
console.log(!(n <= x && b!= c));

// verificar se a é maior que B e B é divisivel por 2
console.log(a > b && b % 2 == 0);

// verificar se B é maior igual A ou B dividido por 2 e o resultado é 2
console.log(a <= b || b / 2 == 2 );

// verificar se A é maior que B e B maior igual a 5
console.log(a > b && 5 <= b);


// verificar se B é par ou impar usando ternário
resultado = b % 2 == 0 ? "par" : "impar";

