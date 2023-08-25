function insert(num) {
    var number = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = number + num;
}

function cleanOneElement() {
    var str = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = str.substring(0, str.length - 1);
}

function cleanAll() {
    document.getElementById('resultado').innerHTML = "";
}

function calcular() {

    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}

function porcentagem() {
    var resultado = document.getElementById('resultado').innerHTML + ' / 100';

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}