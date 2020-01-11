var tiempoIntervalo = 50;
var segundos = 2;
var limiteTiempo = (1000 / tiempoIntervalo) * segundos;

function obtenerResultado() {

    var contador = 0;
    var generarResultadoAleatorio = setInterval(function () {
        if (contador >= limiteTiempo) {
            clearInterval(generarResultadoAleatorio);
        }
        var numero = obtenerNumero();
        document.getElementById("resultado").innerHTML = numero + ":" + tabla[numero];
        contador++;
    }, tiempoIntervalo);
}

function obtenerNumero() {
    return Math.floor(Math.random() * Object.keys(tabla).length) + 1;
}