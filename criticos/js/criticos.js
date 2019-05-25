var objetivoSeleccionado = null;
function seleccionarObjetivo(evt, objetivo) {
    objetivoSeleccionado = objetivo;
    desactivarPestanya("tabObjetivos");
    desactivarPestanya("tabResultados");
    ocultarClase("resultado");
    document.getElementById("contenedorResultado").style.display = "inline-block";
    activarPestanya(evt);
}

function seleccionarResultado(evt, resultado) {
    desactivarPestanya("tabResultados");
    activarPestanya(evt);
    ocultarClase("resultado");
    document.getElementById(objetivoSeleccionado + resultado).style.display = "inline-block";
}

function ocultarClase(clase) {
    var elementosAOcultar = document.getElementsByClassName(clase);
    for (var i = 0; i < elementosAOcultar.length; i++) {
        elementosAOcultar[i].style.display = "none";
    }
}

function desactivarPestanya(clase) {
    var elementosADesactivar = document.getElementsByClassName(clase);
    for (var i = 0; i < elementosADesactivar.length; i++) {
        elementosADesactivar[i].className = elementosADesactivar[i].className.replace(" active", "");
    }
}

function activarPestanya(evt) {
    evt.currentTarget.className += " active";
}