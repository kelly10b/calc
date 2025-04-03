document.addEventListener("DOMContentLoaded", function() {
    let pantalla = document.getElementById("pantalla");

    function agregar(valor) {
        pantalla.value += valor;
    }

    function limpiar() {
        pantalla.value = "";
    }

    function calcular() {
        try {
            pantalla.value = eval(pantalla.value);
        } catch (e) {
            pantalla.value = "Error";
        }
    }

    function raizCuadrada() {
        if (pantalla.value !== "") {
            let num = parseFloat(pantalla.value);
            if (num >= 0) {
                pantalla.value = Math.sqrt(num);
            } else {
                pantalla.value = "Error";
            }
        }
    }

    function porcentaje() {
        if (pantalla.value !== "") {
            pantalla.value = eval(pantalla.value) / 100;
        }
    }

    // Asigna las funciones al objeto window para que sean accesibles desde el HTML
    window.agregar = agregar;
    window.limpiar = limpiar;
    window.calcular = calcular;
    window.raizCuadrada = raizCuadrada;
    window.porcentaje = porcentaje;
});
