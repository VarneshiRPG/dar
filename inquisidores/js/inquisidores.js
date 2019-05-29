var inquisidores = {};
function seleccionarInquisidor(evt, inquisidor) {
    desactivarPestanya("tabInquisidor");
    desactivarPestanya("tabResultados");
    ocultarClase("resultado");
    document.getElementById(inquisidor).style.display = "inline-block";
    activarPestanya(evt);
    cargarDatosInquisidor(inquisidor);
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

function cargarDatosInquisidor(inquisidor) {
    for (var elemento in inquisidores[inquisidor]["datosValor"]) {
        console.log(elemento);
        document.getElementById(elemento).value = inquisidores[inquisidor]["datosValor"][elemento];
    }
    for (var elemento in inquisidores[inquisidor]["datosCheck"]) {
        console.log(elemento);
        document.getElementById(elemento).checked = inquisidores[inquisidor]["datosCheck"][elemento];
    }
}