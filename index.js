var InputNumeros = document.getElementById('numeros');
let result = document.getElementById('result');
var InputLetras = document.getElementById('letras');
//QUITA LAS LETRAS Y TIENE UN FORMATO 'NUMERO', 'NUMERO'
function processInput() {
    console.log(InputNumeros)
    const ExpresionRegular = /\d+/g;
    const numeros = InputNumeros.value.match(ExpresionRegular); 
    console.log(numeros);
    result.value = numeros ? `'${numeros.join("', '")}'` : '';
}
//AGREGA LAS LETRAS QUE SE INGRESAN EN EL INPUT "LETRAS"
function processInputLetras() {
    console.log(InputNumeros)
    console.log(InputLetras)
    const ExpresionRegular = /\d+/g;
    const resultado = InputNumeros.value.replace(ExpresionRegular, (numero) => `${InputLetras.value}${numero}`);
    console.log(resultado);
    result.value = resultado;
}