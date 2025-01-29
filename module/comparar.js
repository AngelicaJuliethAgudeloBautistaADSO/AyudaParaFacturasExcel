var InputNumero1 = document.getElementById('numero1');
var InputNumero2 = document.getElementById('numero2');
let result = document.getElementById('result');
//COMPARA LOS NUMEROS DE LOS DOS INPUTS 
function processInputComparar(){
    //.split convierte la cadena en un array y los separa por , 
    let Input1= InputNumero1.value.split(',').map(num => num.trim());
    let Input2= InputNumero2.value.split(',').map(num => num.trim());

    console.log(Input1);
    console.log(Input2);

    let compara= Input1.filter(num => !Input2.includes(num)).concat(Input2.filter(num => !Input1.includes(num)));
    
    result.value = compara.length > 0 ? compara.join(', '): "";
}

function Limpiar(){
    InputNumero1.value="";
    InputNumero2.value="";
    result.value="";
}