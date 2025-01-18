var InputNumero1 = document.getElementById('numero1');
var InputNumero2 = document.getElementById('numero2');
let result = document.getElementById('result');
//COMPARA LOS NUMEROS DE LOS DOS INPUTS 
function processInputComparar(){
    console.log(InputNumero1);
    console.log(InputNumero2);
}

function Limpiar(){
    InputNumero1.value="";
    InputNumero2.value="";
    result.value="";
}