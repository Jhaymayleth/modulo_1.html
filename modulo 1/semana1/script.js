/* ==============================================
   JAVASCRIPT - Interactividad básica (TASK 5)
   ============================================== */

// ---- MENSAJE DE BIENVENIDA ----
// Muestra un mensaje de bienvenida cuando se carga la página

// Seleccionar el elemento del mensaje
var mensajeBienvenida = document.getElementById("mensaje-bienvenida");
var btnCerrarMensaje = document.getElementById("btn-cerrar-mensaje");

// Mostrar el mensaje al cargar la página
window.addEventListener("load", function () {
  // Verificamos que el elemento exista (solo en index.html)
  if (mensajeBienvenida) {
    mensajeBienvenida.classList.add("visible");
  }
});

// Cerrar el mensaje al hacer clic en el botón
if (btnCerrarMensaje) {
  btnCerrarMensaje.addEventListener("click", function () {
    mensajeBienvenida.classList.remove("visible");
  });
}

// ---- CAMBIAR TEXTO DE UN PÁRRAFO ----
// Al hacer clic en el botón, cambia el texto del hero

var btnCambiarTexto = document.getElementById("btn-cambiar-texto");
var textoHero = document.getElementById("texto-hero");

// Variable para saber si el texto ya fue cambiado
var textoCambiado = false;

if (btnCambiarTexto) {
  btnCambiarTexto.addEventListener("click", function () {
    // Si el texto no ha sido cambiado, lo cambiamos
    if (!textoCambiado) {
      textoHero.textContent = "Soy Jose Mauricio, estudiante y futuro desarrollador web 🚀";
      btnCambiarTexto.textContent = "Volver al original";
      textoCambiado = true;
    } else {
      // Si ya fue cambiado, volvemos al original
      textoHero.textContent = "Desarrollo web | Emprendimiento | Innovación";
      btnCambiarTexto.textContent = "¿Quién soy?";
      textoCambiado = false;
    }
  });
}

// ---- MOSTRAR / OCULTAR CONTENIDO ----
// Botón que muestra u oculta información extra en "Sobre mí"

var btnMasInfo = document.getElementById("btn-mas-info");
var infoExtra = document.getElementById("info-extra");

if (btnMasInfo) {
  btnMasInfo.addEventListener("click", function () {
    // Si está visible, lo ocultamos
    if (infoExtra.classList.contains("visible")) {
      infoExtra.classList.remove("visible");
      btnMasInfo.textContent = "Ver más sobre mí";
    } else {
      // Si está oculto, lo mostramos
      infoExtra.classList.add("visible");
      btnMasInfo.textContent = "Ocultar información";
    }
  });
}

// ---- FORMULARIO DE CONTACTO ----
// Muestra un mensaje de confirmación al enviar el formulario

var formulario = document.getElementById("formulario-contacto");
var mensajeFormulario = document.getElementById("mensaje-formulario");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    // Evitar que la página se recargue
    evento.preventDefault();

    // Mostrar mensaje de éxito
    mensajeFormulario.classList.add("visible");

    // Limpiar el formulario
    formulario.reset();

    // Ocultar el mensaje después de 3 segundos
    setTimeout(function () {
      mensajeFormulario.classList.remove("visible");
    }, 3000);
  });
}
