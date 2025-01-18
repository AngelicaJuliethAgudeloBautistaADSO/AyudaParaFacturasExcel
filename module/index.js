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
function Limpiar(){
    InputNumeros.value="";
    result.value="";
}
