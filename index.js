function calcular() {
    var formulario = document.getElementById("formulario");

    var peso = +formulario.peso.value;
    var altura = +formulario.altura.value;

    if (typeof (peso) !== 'number' || isNaN(peso))
        throw Error('Peso não é um número');

    if (typeof (altura) !== 'number' || isNaN(altura))
        throw Error('Altura não é um número');

    var imc = peso / Math.pow(altura, 2);

    // o metodo toFixed fixa apenas duas casas decimais apos o ponto.
    formulario.imc.value = imc.toFixed(2);

    if (imc < 18.5) {
        alert("Magreza");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Normal");
    } else if (imc > 24.9 && imc <= 30) {
        alert("Sobrepeso");
    } else if (imc > 30) {
        alert("Obesidade");
    }
}