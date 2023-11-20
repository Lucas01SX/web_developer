//alert ("Olá Hcode!!");

/*
var resposta = confirm("Você quer acessar esse site?");
console.log(resposta);
*/

//var a = 10;
//let b = 33;
//alert(a + b);

const a = 0;
const b = 0

function somar(a, b) {
    return a + b;
}
//console.log(somar(2,5));

document.querySelector("#calcular").addEventListener("click", function() {
    //alert("Timão campeão!!")
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;

    if (valorA.length > 0 && valorB.length > 0) {
        alert(parseInt(valorA) + parseInt(valorB));
    } else {
        alert("Digite os valores para o cálculo!");
    }

    
});