var InputNumeros = document.getElementById('numeros');
var InputLetras = document.getElementById('letras');
let result = document.getElementById('result');

//AGREGA LAS LETRAS QUE SE INGRESAN EN EL INPUT "LETRAS"
function processInputLetras() {
    console.log(InputNumeros)
    console.log(InputLetras)
    const ExpresionRegular = /\d+/g;
    const resultado = InputNumeros.value.replace(ExpresionRegular, (numero) => `${InputLetras.value.toUpperCase()}${numero}`);
    console.log(resultado);
    result.value = resultado;
    
}

function Limpiar(){
    InputNumeros.value="";
    InputLetras.value="";
    result.value="";
}