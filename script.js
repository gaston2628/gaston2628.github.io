// script.js

// Función para ocultar el overlay con una transición de opacidad
function hideOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.opacity = 0;
        setTimeout(function() {
            overlay.style.display = 'none';
        }, 500); // Tiempo para la transición de opacidad
    }
}

// Añadir un evento para ocultar el overlay cuando se mueva el cursor
document.addEventListener('mousemove', hideOverlay);
